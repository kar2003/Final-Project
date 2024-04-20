// index.js

import express from "express";
import path from "path";

// Create Express app
const app = express();
const __dirname = "C:/Users/Lisa/Desktop/JS Framework/Final Project";

// Set up static files middleware to serve HTML, CSS, and JavaScript files
app.use(express.static(path.join(__dirname, "public")));


// Define route to render user profile view
app.get("/game", (req, res) => {
    // Render the 'gameRoom' view
    res.sendFile(path.join(__dirname, "View", "gameRoom.html"));
  });

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
