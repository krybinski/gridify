# Gridify

Lightweight, simple and pure javascript plugin that creates a Pinterest-like grid.

## Usage

Add script tag before your closing `</body>` tag:
```html
<script src="gridify.min.js"></script>
```

## Settings

Option | Type | Default | Description
------ | ---- | ------- | -----------
containerSelector | string | .grid | Selector for grid items container
itemSelector | string | .grid--item | Selector for grid item
columnSelector | string | .grid--column | Selector for grid column
resizable | boolean | true | Enables window resize event

Initialize without options:
```js
const gridify = new Gridify();
```

Initialize with options:
```js
const defaultOptions = {
  containerSelector: '.grid',       // selector for items container
  itemSelector: '.grid--item',      // selector for item
  columnSelector: '.grid--column',  // selector for column
  resizable: true,                  // re-draw layout if window resize
}

const gridify = new Gridify(defaultOptions);
```

## Events

Add handler on a container element

Event | Parameters | Description
------ | ----  | -----------
gridify:init | $event | Dispatched after plugin init
gridify:resized | $event | Dispatched after grid resized

Usage example:
```js
const container = document.querySelector('.grid');

container.addEventListener('gridify:init', (ev) => {
  console.log('Init handler');
}, false);

container.addEventListener('gridify:resized', (ev) => {
  console.log('Resized handler');
}, false);
```
