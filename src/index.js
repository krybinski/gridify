import { parseSelector, removeItemFromDom } from './utils';

(function (factory) {
  window.Gridify = factory();
})(function () {
  'use strict'

  class Gridify {
    constructor(opts) {
      this.options = Object.assign(Gridify.defaults , opts);

      this.container = document.querySelector(this.options.containerSelector);
      this.items = this.container.querySelectorAll(this.options.itemSelector);
      this.elementsData = [];
      this.columns = [];
      this.columnsNumber = this.getColumnsNumber();

      this.init();
    }

    // Get columns elements from DOM
    getColumns () {
      return this.container.querySelectorAll(this.options.columnSelector);
    }

    // Get first column element from DOM
    getFirstColumn () {
      return this.getColumns()[0];
    }

    // Get number of columns
    getColumnsNumber () {
      let instanceForCompute = false;

      if (this.getColumns().length === 0) {
        instanceForCompute = true;

        const column = document.createElement('div');
        column.classList.add(parseSelector(this.options.columnSelector));
        this.container.appendChild(column);
      }

      const columnWidth = this.getFirstColumn().offsetWidth;
      const containerWidth = this.container.offsetWidth;

      if (instanceForCompute) {
        this.getColumns().forEach(element => removeItemFromDom(element));
      }

      return Math.round(containerWidth / columnWidth);
    }

    // Save items content and params and removes originals items
    recordAndRemove () {
      this.items.forEach((item, index) => {
        this.elementsData.push({
          content: item.outerHTML,
          column: index % this.columnsNumber,
        });

        removeItemFromDom(item);
      });
    }

    // Determines in which column an item should be
    setColumnsPosition () {
      for (const i in this.elementsData) {
        this.elementsData[i].column = i % this.columnsNumber;
      }
    }

    // Append html string to DOM element
    appendHtml(element, str) {
      const div = document.createElement('div');
      div.innerHTML = str;
      while (div.children.length > 0) {
        element.appendChild(div.children[0]);
      }
    }

    // Write and append html
    draw () {
      for (let i = 0; i < this.columnsNumber; i++) {
        const column = document.createElement('div');
        column.classList.add(parseSelector(this.options.columnSelector));
        this.container.appendChild(column);
      }

      // Creates items
      for (const i in this.elementsData) {
        const content = (this.elementsData[i].content !== undefined) ? this.elementsData[i].content : '';
        const index = i % this.columnsNumber;
        const container = this.container.querySelectorAll(this.options.columnSelector)[index];

        this.appendHtml(container, content);
      }

      this.options.onResize();
    }

    resize() {
      if (this.columnsNumber !== this.getColumnsNumber()) {
        this.columnsNumber = this.getColumnsNumber();
        this.setColumnsPosition();
        this.draw();
      }
    }

    init() {
      this.columnsNumber = this.getColumnsNumber();
      this.recordAndRemove();
      this.draw();

      if (this.options.resizable) {
        window.addEventListener('resize', this.resize.bind(this), false);
      }
    }
  }

  Gridify.defaults = {
    containerSelector: '.grid',
    itemSelector: '.grid--item',
    columnSelector: '.grid--column',
    resizable: true,
    onResize: () => {
      console.log('grid resized');
    }
  };

  return Gridify;
});
