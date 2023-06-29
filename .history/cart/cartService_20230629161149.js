const { readJsonFile, writeJsonFile } = require('../helpers/dataUtils');

const getCartItems = () => {
  return readJsonFile('cart.json');
};

const updateCartItems = (cartItems) => {
  writeJsonFile('cart.json', cartItems);
};

function getCartTotal() {
  const total = cartService.getCartTotal();
  console.log('Cart Total:', total);
}

module.exports = {
  getCartItems,
  updateCartItems,
};
