import { searchOutpostContainer } from "../../../main.js";
import { getImage } from "../../data/fetchWowItem/fetchWowItem.js";

export async function buildSearchOutput(searchResult) {
  console.log(searchResult);

  // Clear previous search results
  searchOutpostContainer.innerHTML = "";

  for (const element of searchResult) {
    const imageUrl = await getImage(element.data.creature_displays[0].id);
    console.log(imageUrl);

    const searchItem = document.createElement("div");
    searchItem.classList.add("search-item");

    const image = document.createElement("img");
    image.src = imageUrl;

    const header = document.createElement("header");
    const name = document.createElement("h2");
    name.textContent = element.data.name.en_GB;

    searchItem.appendChild(image);
    header.appendChild(name);
    searchItem.appendChild(header);
    searchOutpostContainer.appendChild(searchItem);
  }
}
