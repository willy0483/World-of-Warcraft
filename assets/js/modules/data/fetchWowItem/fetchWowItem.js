import { getAccessToken } from "../getAccessToken/getAccessToken.js";

// Function to get item data and image URL
export async function getItemData(itemId) {
  const accessToken = await getAccessToken();

  // Fetch item data
  const response = await fetch(
    `https://us.api.blizzard.com/data/wow/item/${itemId}?namespace=static-us&locale=en_US&access_token=${accessToken}`
  );

  if (!response.ok) {
    throw new Error(`Error fetching item: ${response.statusText}`);
  }

  const itemData = await response.json();

  // Fetch item media (image) using the media endpoint
  const mediaResponse = await fetch(
    `https://us.api.blizzard.com/data/wow/media/item/${itemId}?namespace=static-us&locale=en_US&access_token=${accessToken}`
  );

  if (!mediaResponse.ok) {
    throw new Error(`Error fetching item media: ${mediaResponse.statusText}`);
  }

  const mediaData = await mediaResponse.json();
  // Return both item data and image URL
  return { itemData, mediaData };
}
