import React, { useState } from "react";

function MemeList({ memes, darkMode }) {
  const [selectedMeme, setSelectedMeme] = useState(null);

  // Destructuring in action when a meme is clicked
  const handleMemeClick = (meme) => {
    const { id, name, url, width, height } = meme;
    setSelectedMeme({ id, name, url, width, height });
  };

  const memeGridStyles = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    gap: "20px",
    marginTop: "20px",
  };

  const memeItemStyles = {
    border: darkMode ? "1px solid #555" : "1px solid #ddd",
    borderRadius: "8px",
    overflow: "hidden",
    transition: "transform 0.3s",
    cursor: "pointer",
  };

  const memeImageStyles = {
    width: "100%",
    height: "200px",
    objectFit: "cover",
  };

  const memeNameStyles = {
    padding: "10px",
    textAlign: "center",
    backgroundColor: darkMode ? "#444" : "#f9f9f9",
  };

  const modalStyles = {
    position: "fixed",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: "1000",
  };

  const modalContentStyles = {
    backgroundColor: darkMode ? "#333" : "#fff",
    padding: "20px",
    borderRadius: "8px",
    maxWidth: "80%",
    maxHeight: "80%",
    overflowY: "auto",
    color: darkMode ? "#fff" : "#333",
  };

  return (
    <div>
      <h2>Found {memes.length} memes</h2>

      <div style={memeGridStyles}>
        {memes.map((meme) => (
          <div
            key={meme.id}
            style={memeItemStyles}
            className={`meme-item ${darkMode ? "dark-meme" : "light-meme"}`}
            onClick={() => handleMemeClick(meme)}
          >
            <img src={meme.url} alt={meme.name} style={memeImageStyles} />
            <div style={memeNameStyles}>{meme.name}</div>
          </div>
        ))}
      </div>

      {selectedMeme && (
        <div style={modalStyles} onClick={() => setSelectedMeme(null)}>
          <div style={modalContentStyles} onClick={(e) => e.stopPropagation()}>
            <h2>{selectedMeme.name}</h2>
            <img
              src={selectedMeme.url}
              alt={selectedMeme.name}
              style={{ maxWidth: "100%", maxHeight: "400px" }}
            />
            <p>
              Dimensions: {selectedMeme.width} x {selectedMeme.height}
            </p>
            <button
              onClick={() => setSelectedMeme(null)}
              className={darkMode ? "dark-button" : "light-button"}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default MemeList;
