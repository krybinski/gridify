const gridify = new Gridify();

const container = document.querySelector('.grid');

container.addEventListener('gridify:init', (ev) => {
  console.log('Init handler');
}, false);

container.addEventListener('gridify:resized', (ev) => {
  console.log('Resized handler');
}, false);
