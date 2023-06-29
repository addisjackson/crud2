const { readJsonFile, writeJsonFile } = require('../helpers/dataUtils');

const getProducts = () => {
  return readJsonFile('products.json');
};

const updateProducts = (products) => {
  writeJsonFile('products.json', products);
};

module.exports = {
  getProducts,
  updateProducts,
};
