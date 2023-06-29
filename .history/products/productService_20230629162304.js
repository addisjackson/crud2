const { readJsonFile, writeJsonFile } = require('../helpers/dataUtils');

const getProducts = () => {
  return readJsonFile('products.json');
};

const updateProducts = (products) => {
  writeJsonFile('products.json', products);
};

function getProductsInStock() {
  return productsData.filter(product => product.instock);
}

// Get products out of stock
function getProductsOutOfStock() {
  return productsData.filter(product => !product.instock);
}

module.exports = {
  getProducts,
  updateProducts,
  get
};
