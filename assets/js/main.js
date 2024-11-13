export const myApp = document.getElementById("app");
const mainContainer = document.createElement("div");
mainContainer.classList.add("main-container");

export const itemContainer = document.createElement("div");

import { buildSearch } from "./modules/view/buildSearch/buildSearch.js";

export const searchOutpostContainer = document.createElement("section");

export function homePage() {
  mainContainer.innerHTML = "";
  itemContainer.innerHTML = "";
  searchOutpostContainer.innerHTML = "";
  myApp.appendChild(mainContainer);
  itemContainer.classList.add("item-container");
  mainContainer.appendChild(itemContainer);
  buildSearch();
  searchOutpostContainer.classList.add("search-outpost");
  mainContainer.appendChild(searchOutpostContainer);
}

homePage();
