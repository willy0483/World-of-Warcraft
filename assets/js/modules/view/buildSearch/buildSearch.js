import { itemContainer } from "../../../main.js";
import { searchCreatures } from "../../data/fetchWowItem/fetchWowItem.js";
export function buildSearch() {
  const container = document.createElement("div");
  container.classList.add("searchHeaderContainer");

  const header = document.createElement("header");
  header.classList.add("SearchHeader");
  const title = document.createElement("h1");
  title.textContent = "LootExplorer";
  header.appendChild(title);
  container.appendChild(header);

  const searchContainer = document.createElement("section");
  searchContainer.classList.add("search-container");

  const searchInput = document.createElement("input");
  searchInput.type = "text";
  searchInput.placeholder = "Search for an creatures...";
  searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      searchCreatures(searchInput.value);
    }
  });

  const img = document.createElement("img");
  img.src = "assets/images/Svg/search-alt-1-svgrepo-com.svg";
  img.alt = "Search icon";
  searchContainer.appendChild(img);
  searchContainer.appendChild(searchInput);
  container.appendChild(searchContainer);
  itemContainer.appendChild(container);
}
