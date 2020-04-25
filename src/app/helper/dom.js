export const getElementHeight = el => {
  return getComputedHeight(getComputedStyle(el, null));
};

const getComputedHeight = (computed) =>
  getNumber(computed.getPropertyValue('height'));

const getNumber = (value) =>
  parseInt(value.replace('px'));
