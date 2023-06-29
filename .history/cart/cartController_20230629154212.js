const { readJsonFile, writeJsonFile } = require('../helpers/dataUtils');

const addProductToCart = (productName) => {
  const products = readJsonFile('products.json');
  const productIndex = products.findIndex(
    (product) => product.name.toLowerCase() === productName.toLowerCase()
  );

  if (productIndex !== -1) {
    const cartItems = readJsonFile('cart.json');
    const productToAdd = products[productIndex];

    cartItems.push(productToAdd);
    writeJsonFile('cart.json', cartItems);

    // Remove the product from the products.json file
    products.splice(productIndex, 1);
    writeJsonFile('products.json', products);

    console.log(`Product "${productName}" added to the cart.`);
  } else {
    console.log(`Product "${productName}" not found.`);
  }
};

const viewCart = () => {
  const cartItems = readJsonFile('cart.json');

  console.log('Cart items:');
  console.log(cartItems);
};

const deleteCart = () => {
  writeJsonFile('cart.json', []);

  console.log('Cart deleted.');
};

const updateProductInCart = (productName) => {
  const cartItems = readJsonFile('cart.json');
  const productIndex = cartItems.findIndex(
    (product) => product.name.toLowerCase() === productName.toLowerCase()
  );

  if (productIndex !== -1) {
    // Modify the properties of the product in the cart as needed
    cartItems[productIndex].name = 'Updated Product Name';
    cartItems[productIndex].priceInCents = 9999;

    writeJsonFile('cart.json', cartItems);

    console.log(`Product "${productName}" updated in the cart.`);
  } else {
    console.log(`Product "${productName}" not found in the cart.`);
  }
};

const viewCartItem = (productName) => {
  const cartItems = readJsonFile('cart.json');
  const product = cartItems.find(
    (p) => p.name.toLowerCase() === productName.toLowerCase()
  );

  if (product) {
    console.log('Cart item details:');
    console.log(product);
  } else {
    console.log(`Product "${productName}" not found in the cart.`);
  }
};


module.exports = {
  addProductToCart,
  viewCart,
  deleteCart,
  updateProductInCart,
  viewCartItem,
};
