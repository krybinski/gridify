import { parseSelector, prepareEvent, removeItemFromDom } from './utils';
import CONSTANTS from './constants';

(function(factory) {
  window.Gridify = factory();
})(function() {
  'use strict';

  class Gridify {
    constructor(opts) {
      this.options = Object.assign(Gridify.defaults, opts);

      this.container = document.querySelector(this.options.containerSelector);
      this.items = this.container.querySelectorAll(this.options.itemSelector);
      this.elementsData = [];
      this.columns = [];
      this.columnsNumber = this._getColumnsNumber();

      this._init();
    }

    // Get columns elements from DOM
    _getColumns() {
      return this.container.querySelectorAll(this.options.columnSelector);
    }

    // Get first column element from DOM
    _getFirstColumn() {
      return this._getColumns()[0];
    }

    // Get number of columns
    _getColumnsNumber() {
      let instanceForCompute = false;

      if (this._getColumns().length === 0) {
        instanceForCompute = true;

        const column = document.createElement('div');
        column.classList.add(parseSelector(this.options.columnSelector));
        this.container.appendChild(column);
      }

      const columnWidth = this._getFirstColumn().offsetWidth;
      const containerWidth = this.container.offsetWidth;

      if (instanceForCompute) {
        this._getColumns().forEach(element => removeItemFromDom(element));
      }

      return Math.round(containerWidth / columnWidth);
    }

    // Save items content and params and removes originals items
    _recordAndRemove() {
      this.items.forEach((item, index) => {
        this.elementsData.push({
          content: item.outerHTML,
          column: index % this.columnsNumber,
        });

        removeItemFromDom(item);
      });
    }

    // Determines in which column an item should be
    _setColumnsPosition() {
      for (const i in this.elementsData) {
        this.elementsData[i].column = i % this.columnsNumber;
      }
    }

    // Append html string to DOM element
    _appendHtml(element, str) {
      const div = document.createElement('div');
      div.innerHTML = str;
      while (div.children.length > 0) {
        element.appendChild(div.children[0]);
      }
    }

    // Write and append html
    _draw() {
      for (let i = 0; i < this.columnsNumber; i++) {
        const column = document.createElement('div');
        column.classList.add(parseSelector(this.options.columnSelector));
        this.container.appendChild(column);
      }

      // Creates items
      for (const i in this.elementsData) {
        const content =
          this.elementsData[i].content !== undefined ? this.elementsData[i].content : '';
        const index = i % this.columnsNumber;
        const container = this.container.querySelectorAll(this.options.columnSelector)[index];

        this._appendHtml(container, content);
      }
    }

    _resize() {
      if (this.columnsNumber !== this._getColumnsNumber()) {
        this.columnsNumber = this._getColumnsNumber();
        this._setColumnsPosition();
        this._draw();
        prepareEvent(CONSTANTS.EVENTS.RESIZED, this.container);
      }
    }

    _init() {
      const loadedHandler = () => {
        prepareEvent(CONSTANTS.EVENTS.INIT, this.container);
        this.columnsNumber = this._getColumnsNumber();
        this._recordAndRemove();
        this._draw();
      };

      window.addEventListener('DOMContentLoaded', loadedHandler, false);

      if (this.options.resizable) {
        window.addEventListener('resize', this._resize.bind(this), false);
      }
    }
  }

  Gridify.defaults = {
    containerSelector: '.grid',
    itemSelector: '.grid--item',
    columnSelector: '.grid--column',
    resizable: true,
  };

  return Gridify;
});
