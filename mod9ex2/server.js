// Import the 'express' module and assign it to the 'express' variable
const express = require("express");

// Create an instance of the express application
const app = express();

// Load environment variables from a .env file
require("dotenv").config();

// Enable parsing of JSON data in request bodies
app.use(express.json());

// Import the 'dbConnect' module to establish a connection to MongoDB
let dbConnect = require("./dbConnect");

// Define a route for the root path ("/") that responds with a JSON message
app.get("/", (req, res) => {
  res.json({ message: "Welcome to my Exercise2 application." });
});

// Import route modules for users, posts, comments, and likes
let userRoutes = require("../routes/userRoutes");
let postRoutes = require("../routes/postRoutes");
let commentRoutes = require("../routes/commentRoutes");
let likeRoutes = require("../routes/likeRoutes");

// Use the imported route modules for specific paths
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/likes", likeRoutes);

// Set the port for the server to listen on, use the specified port or default to 8080
const PORT = process.env.PORT || 8080;

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

