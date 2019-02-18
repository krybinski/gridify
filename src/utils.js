// Get a class name without the selector
export const parseSelector = (selector) => {
  return selector.slice(1, selector.length);
};

// Remove item from DOM tree
export const removeItemFromDom = (item) => {
  item.parentNode.removeChild(item);
};
