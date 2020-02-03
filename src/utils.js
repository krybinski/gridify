// Get a class name without the selector
export const parseSelector = selector => {
  return selector.slice(1, selector.length);
};

// Remove item from DOM tree
export const removeItemFromDom = item => {
  item.parentNode.removeChild(item);
};

// Create event
export const prepareEvent = (name, element) => {
  const event = new Event(name);
  element.dispatchEvent(event);
};
