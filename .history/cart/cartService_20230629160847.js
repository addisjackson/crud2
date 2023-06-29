const { readJsonFile, writeJsonFile } = require('../helpers/dataUtils');

const getCartItems = () => {
  return readJsonFile('cart.json');
};

const updateCartItems = (cartItems) => {
  writeJsonFile('cart.json', cartItems);
};

const getCartTotal = () => {
  const cartItems = readJsonFile('cart.json');
  for (const cartItem of cartItems) {
    total += cartItem.priceInCents*cartItem.quantity;

module.exports = {
  getCartItems,
  updateCartItems,
};
