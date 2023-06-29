const faker = require('@faker-js/faker');
const { readJsonFile, writeJsonFile } = require('../helpers/dataUtils');
const { nanoid } = require("nanoid");

const createProduct = () => {

	  const inStock = faker.datatype.boolean();
    const quantityAvailable = (inStock ? faker.datatype.number({ min: 100, max: 10000 }) : null);
    const product = {
        name: faker.commerce.product(),
        priceInCents: faker.commerce.price(10, 1000, 0),
        prodID: nanoid(5),
        inStock: inStock,
        quantityAvailable: quantityAvailable
    }
  

  const products = readJsonFile('products.json');
  products.push(product);
  writeJsonFile('products.json', products);

  console.log('New product created:');
  console.log(product);


const deleteProduct = (productName) => {
  const products = readJsonFile('products.json');
  const updatedProducts = products.filter(
    (product) => product.name.toLowerCase() !== productName.toLowerCase()
  );
  writeJsonFile('products.json', updatedProducts);

  console.log(`Product "${productName}" deleted.`);
};

const updateProduct = (productName) => {
  const products = readJsonFile('products.json');
  const productToUpdateIndex = products.findIndex(
    (product) => product.name.toLowerCase() === productName.toLowerCase()
  );

  if (productToUpdateIndex === -1) {
    console.log(`Product "${productName}" not found.`);
    return;
  }

  // Modify the properties of the product as needed
  products[productToUpdateIndex].name = 'Updated Product Name';
  products[productToUpdateIndex].priceInCents = 9999;

  writeJsonFile('products.json', products);

  console.log(`Product "${productName}" updated.`);
};

const showProduct = (productName) => {
  const products = readJsonFile('products.json');
  const product = products.find(
    (p) => p.name.toLowerCase() === productName.toLowerCase()
  );

  if (product) {
    console.log('Product details:');
    console.log(product);
  } else {
    console.log(`Product "${productName}" not found.`);
  }
};

const showAllProducts = () => {
  const products = readJsonFile('products.json');
  const simplifiedProducts = products.map((product) => ({
    name: product.name,
    id: product.id,
    price: product.priceInCents,
  }));

  console.log('All products:');
  console.log(simplifiedProducts);
};

const sortProductsByPrice = () => {
  const products = readJsonFile('products.json');
  const sortedProducts = products.sort((a, b) => a.priceInCents - b.priceInCents);

  console.log('Products sorted by price:');
  console.log(sortedProducts);
};

const showProductsBelowPrice = (priceThreshold) => {
  const products = readJsonFile('products.json');
  const filteredProducts = products.filter(
    (product) => product.priceInCents < priceThreshold
  );

  console.log(`Products below ${priceThreshold}:`);
  console.log(filteredProducts);
};

module.exports = {
  createProduct,
  deleteProduct,
  updateProduct,
  showProduct,
  showAllProducts,
  sortProductsByPrice,
  showProductsBelowPrice,
};
