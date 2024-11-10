export const myApp = document.getElementById("app");

export const itemContainer = document.createElement("div");
itemContainer.classList.add("item-container");
myApp.appendChild(itemContainer);
import { buildSearch } from "./modules/view/buildSearch/buildSearch.js";

// build search component
buildSearch();

export const searchOutpostContainer = document.createElement("section");
searchOutpostContainer.classList.add("search-outpost");
myApp.appendChild(searchOutpostContainer);
