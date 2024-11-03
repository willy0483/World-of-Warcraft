import { getAccessToken } from "../getAccessToken/getAccessToken.js";

// Function to get item data and image URL
export async function getItemData(itemId) {
  const accessToken = await getAccessToken();

  // Fetch item data
  const response = await fetch(
    `https://eu.api.blizzard.com/data/wow/item/${itemId}?namespace=static-eu&locale=en_GB&access_token=${accessToken}`
  );

  console.log(response);

  if (!response.ok) {
    throw new Error(`Error fetching item: ${response.statusText}`);
  }

  const itemData = await response.json();

  return { itemData };
}
