import ProductData from "./ProductData.mjs";
import ProductList from "./ProductList.mjs";

const dataSource = new ProductData("tents");

const element = document.querySelector(".product-list");
//const element = document.querySelector(".products");

const productList = new ProductList("Tents", dataSource, element);

productList.init();
