/*import { getParam } from "./utils.mjs";
import loadHeaderFooter from "./utils.mjs";
import ProductData from "./ProductData.mjs";
import ProductDetails from "./ProductDetails.mjs";
loadHeaderFooter("#header", "#footer");

const dataSource = new ProductData("tents");
const productID = getParam("product");

const product = new ProductDetails(productID, dataSource);
product.init();*/

import { getParam } from "./utils.mjs";
import ExternalServices from "./ExternalServices.mjs";
import ProductDetails from "./ProductDetails.mjs";
import loadHeaderFooter from "./utils.mjs";

loadHeaderFooter("#header", "#footer");

/*const dataSource = new ProductData("tents");
const productID = getParam("product");

const product = new ProductDetails(productID, dataSource);
product.init();*/

const productID = getParam("product");
const dataSource = new ExternalServices();
const element = document.querySelector(".product-details");

const product = new ProductDetails(productID, dataSource, element);

product.init();
