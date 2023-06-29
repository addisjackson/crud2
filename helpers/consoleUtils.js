const chalk = require("chalk");
const products = require("../data/products.json");

function logProductDetails(products) {
  for (const product of products) {
    console.log(chalk.yellow("Product Details:"));
    console.log(chalk.cyan("Name:"), product.name);
    console.log(chalk.cyan("ID:"), product.prodID);
    console.log(chalk.red("Price (in cents):"), product.priceInCents);
    console.log(chalk.cyan("In Stock:"), product.inStock);
    if (product.inStock) {
      console.log(chalk.blue("Quantity Remaining:"), product.quantityAvailable);
    }
  }
}

function logAllProducts(products) {
  console.log(chalk.yellow("All Products:"));
  products.forEach((product) => {
    console.log(chalk.cyan("Name:"), product.name);
    console.log(chalk.cyan("ID:"), product.id);
    console.log(chalk.red("Price (in cents):"), product.priceInCents);
    console.log(chalk.blue("In Stock:"), product.inStock);
  });
}

module.exports = { logProductDetails, logAllProducts };
