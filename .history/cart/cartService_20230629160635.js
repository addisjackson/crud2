const { readJsonFile, writeJsonFile } = require('../helpers/dataUtils');

const getCartItems = () => {
  return readJsonFile('cart.json');
};

const updateCartItems = (cartItems) => {
  writeJsonFile('cart.json', cartItems);
};

const getCartT

module.exports = {
  getCartItems,
  updateCartItems,
};
