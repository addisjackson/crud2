const productController = require('./products/productController');
const cartController = require('./cart/cartController');
const { nanoid } = require("nanoid");
const faker = require("@faker-js/faker");
const { readJsonFile, writeJsonFile } = require('../helpers/dataUtils');

// Call the appropriate controller based on the command line arguments
const command = process.argv[2];

switch (command) {
  case 'create':
    productController.createProduct();
    break;
  case 'delete':
    const productNameToDelete = process.argv[3];
    productController.deleteProduct(productNameToDelete);
    break;
  case 'update':
    const productToUpdate = process.argv[3];
    productController.updateProduct(productToUpdate);
    break;
  case 'show':
    const productNameToShow = process.argv[3];
    productController.showProduct(productNameToShow);
    break;
  case 'index':
    productController.showAllProducts();
    break;
  case 'sort':
    productController.sortProductsByPrice();
    break;
  case 'below':
    const priceThreshold = parseInt(process.argv[3]);
    productController.showProductsBelowPrice(priceThreshold);
    break;
  case 'add-to-cart':
    const productNameToAddToCart = process.argv[3];
    cartController.addProductToCart(productNameToAddToCart);
    break;
  case 'view-cart':
    cartController.viewCart();
    break;
  case 'delete-cart':
    cartController.deleteCart();
    break;
  case 'update-cart':
    const productInCartToUpdate = process.argv[3];
    cartController.updateProductInCart(productInCartToUpdate);
    break;
  case 'view-cart-item':
    const cartItemName = process.argv[3];
    cartController.viewCartItem(cartItemName);
    break;
  default:
    console.log('Invalid command.');
}
