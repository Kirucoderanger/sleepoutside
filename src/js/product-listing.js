import ExternalServices from "./ExternalServices.mjs";
import ProductList from "./ProductList.mjs";
import loadHeaderFooter from "./utils.mjs";
import { getParam } from "./utils.mjs";
loadHeaderFooter("#header", "#footer");

// Get the category from the URL parameters
// If no category is specified, default to "tents"
//const category = getParam("category") || "tents";
//const dataSource = new ProductData(category);
const category = getParam("category");
const dataSource = new ExternalServices();
const element = document.querySelector(".product-list");
const productListing = new ProductList(category, dataSource, element);
console.log(category);
document.querySelector("h2").textContent = `TOP PRODUCTS (${category})`;

productListing.init();  


/*
import loadHeaderFooter from "./utils.mjs";
import { getParam } from "./utils.mjs";
import ExternalServices from "./ExternalServices.mjs";
import ProductList from "./ProductList.mjs";

loadHeaderFooter("#header", "#footer");

const category = getParam("category");
const dataSource = new ExternalServices();
const element = document.querySelector(".product-list");
const listing = new ProductList(category, dataSource, element);

listing.init();*/
