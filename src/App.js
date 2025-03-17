import React, { useState } from "react";
import MemeList from "./MemeList";
import MemeSearch from "./MemeSearch";
import "./styles.css";

function App({ memes }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  // Filter memes based on search term
  const filteredMemes = memes.filter((meme) =>
    meme.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Define JSX styles
  const appStyles = {
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    backgroundColor: darkMode ? "#333" : "#f5f5f5",
    color: darkMode ? "#fff" : "#333",
    minHeight: "100vh",
    transition: "background-color 0.3s, color 0.3s",
  };

  const headerStyles = {
    textAlign: "center",
    marginBottom: "20px",
  };

  return (
    <div style={appStyles} className={darkMode ? "dark-mode" : "light-mode"}>
      <header style={headerStyles}>
        <h1>Meme Gallery</h1>
        <button
          onClick={toggleDarkMode}
          className={darkMode ? "dark-button" : "light-button"}
        >
          {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </button>
      </header>

      <MemeSearch
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        darkMode={darkMode}
      />

      <MemeList memes={filteredMemes} darkMode={darkMode} />
    </div>
  );
}

export default App;
