import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "mvp.css";
import App from "./App";

async function prefetchData() {
  try {
    const url = "https://api.imgflip.com/get_memes";
    const apiResponse = await fetch(url);
    const data = await apiResponse.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch memes:", error);
    return { success: false, data: { memes: [] } };
  }
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

// Render a loading state initially
root.render(
  <StrictMode>
    <div>Loading memes...</div>
  </StrictMode>
);

// Fetch data and then render the app with the fetched data
prefetchData().then((data) => {
  console.log("Memes data:", data);
  const memes = data?.data?.memes || [];
  console.log("Memes array:", memes);
  console.log("Is array:", Array.isArray(memes));

  root.render(
    <StrictMode>
      <App memes={memes} />
    </StrictMode>
  );
});
