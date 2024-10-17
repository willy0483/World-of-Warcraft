import { getItemData } from "./modules/data/fetchWowItem/fetchWowItem.js";

// Example usage: Fetching item with ID 188032
getItemData(117373)
  .then((itemData) => {
    console.log("Item Data:", itemData);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
