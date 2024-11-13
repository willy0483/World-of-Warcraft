import { searchOutpostContainer } from "../../../main.js";
import { getImage } from "../../data/fetchWowItem/fetchWowItem.js";

export async function buildSearchOutput(searchResult) {
  // console.log(searchResult);
  // Clear previous search results
  searchOutpostContainer.innerHTML = "";

  const amountContainer = document.createElement("div");
  amountContainer.classList.add("amount-container");
  const amount = document.createElement("p");
  amount.textContent = `Amount of results: ${searchResult.length}`;
  amountContainer.appendChild(amount);
  searchOutpostContainer.appendChild(amountContainer);

  const searchItemsContainer = document.createElement("div");
  searchItemsContainer.classList.add("search-items-container");
  searchOutpostContainer.appendChild(searchItemsContainer);

  for (const element of searchResult) {
    const imageUrl = await getImage(element.data.creature_displays[0].id);
    // console.log(imageUrl);

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
    searchItemsContainer.appendChild(searchItem);

    searchItem.addEventListener("click", () => {
      console.log(element.data);
    });
  }
}
