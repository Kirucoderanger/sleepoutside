import ProductData from "./ProductData.mjs";
import ProductList from "./ProductList.mjs";
import loadHeaderFooter from "./utils.mjs";
import { getParam } from "./utils.mjs";
loadHeaderFooter("#header", "#footer");

// Get the category from the URL parameters
// If no category is specified, default to "tents"
//const category = getParam("category") || "tents";
//const dataSource = new ProductData(category);
const category = getParam("category");
const dataSource = new ProductData();
const element = document.querySelector(".product-list");
const productListing = new ProductList(category, dataSource, element);

productListing.init();
