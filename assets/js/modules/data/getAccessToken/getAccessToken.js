const clientId = "2f562a782625431bba789d6704e59708"; // Replace with your Client ID
const clientSecret = "MeiRs2QBmCNmnwGjyNt9VE290PsUEaL6"; // Replace with your Client Secret

// Function to get an access token
export async function getAccessToken() {
  const response = await fetch("https://us.battle.net/oauth/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: `grant_type=client_credentials&client_id=${clientId}&client_secret=${clientSecret}`,
  });
  const data = await response.json();
  return data.access_token;
}
