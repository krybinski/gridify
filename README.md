# Gridify

Lightweight pure javascript plugin that creates a Pinterest-like grid

## Usage

Add script tag before your closing `</body>` tag:
```html
<script src="gridify.min.js"></script>
```

```js
const options = {
  containerSelector: '.grid',       // selector for items container
  itemSelector: '.grid--item',      // selector for item
  columnSelector: '.grid--column',  // selector for column
  resizable: true,                  // re-draw layout if window resize
  onResize: () => {                 // function called if window resized and grid rebuild
    console.log('grid resized');
  }
}

const gridify = new Gridify(options);
```

## Settings

Option | Type | Default | Description
------ | ---- | ------- | -----------
containerSelector | string | '.grid' | Selector for grid items container
itemSelector | string | '.grid--item' | Selector for grid item
columnSelector | string | '.grid--column' | Selector for grid column
resizable | boolean | true | Enables window resize event
onResize | function | - | Function called if window resized and grid rebuild
