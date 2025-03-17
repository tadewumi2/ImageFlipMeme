import React from "react";

function MemeSearch({ searchTerm, setSearchTerm, darkMode }) {
  const searchContainerStyles = {
    marginBottom: "20px",
    textAlign: "center",
  };

  const searchInputStyles = {
    padding: "10px",
    width: "300px",
    border: darkMode ? "1px solid #555" : "1px solid #ddd",
    borderRadius: "4px",
    fontSize: "16px",
    backgroundColor: darkMode ? "#444" : "#fff",
    color: darkMode ? "#fff" : "#333",
  };

  return (
    <div style={searchContainerStyles}>
      <input
        type="text"
        placeholder="Search memes by name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={searchInputStyles}
        className={darkMode ? "dark-input" : "light-input"}
      />
    </div>
  );
}

export default MemeSearch;
