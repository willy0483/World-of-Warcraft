// main.js

import { getAccessToken } from "./modules/data/getAccessToken/getAccessToken.js";

// Function to fetch data from an API
async function fetchData() {
  try {
    const token = await getAccessToken(); // Get the access token

    const response = await fetch(
      "https://eu.api.blizzard.com/data/wow/creature/42722?namespace=static-eu&locale=en_GB", // Changed creature ID for testing
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("There has been a problem with your fetch operation:", error);
  }
}

// Call the fetchData function
fetchData();
