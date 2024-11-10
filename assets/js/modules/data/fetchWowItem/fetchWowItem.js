import { getAccessToken } from "../getAccessToken/getAccessToken.js";

const token = await getAccessToken(); // Get the access token

// Function to fetch data from an API
export async function fetchData(id) {
  try {
    const response = await fetch(
      `https://eu.api.blizzard.com/data/wow/creature/${id}?namespace=static-eu&locale=en_GB`,
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
// fetchData(51632);
// 42722

import { buildSearchOutput } from "../../view/seachOutputView/searchOutputView.js";
export async function searchCreatures(name) {
  try {
    const response = await fetch(
      `https://eu.api.blizzard.com/data/wow/search/creature?namespace=static-eu&locale=en_GB&_pageSize=100&name.en_GB=${encodeURIComponent(
        name
      )}`,
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
    // console.log(data.results);
    buildSearchOutput(data.results);
  } catch (error) {
    console.error("There has been a problem with your fetch operation:", error);
  }
}

export async function getImage(creatureDisplayId) {
  try {
    const response = await fetch(
      `https://eu.api.blizzard.com/data/wow/media/creature-display/${creatureDisplayId}?namespace=static-eu&locale=en_GB`,
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
    return data.assets[0].value;
  } catch (error) {
    console.error("There has been a problem with your fetch operation:", error);
  }
}
