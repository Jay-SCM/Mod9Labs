// Import the 'express' module and create an instance of the router
let express = require("express");
let router = express.Router();

// Import the 'Controllers' module which likely contains the logic for handling post-related operations
let Controllers = require("../mod9ex2/controllers");

// Define a route for the root path ("/") using the 'GET' method
router.get("/", (req, res) => {
  // Call the 'getPosts' method from the 'postController' in the 'Controllers' module
  // This method likely fetches and sends a list of posts as a response
  Controllers.postController.getPosts(res);
});

// Define a route for the "/create" path using the 'POST' method
router.post("/create", (req, res) => {
  // Call the 'createPost' method from the 'postController' in the 'Controllers' module
  // This method likely creates a new post based on the data in the request body
  Controllers.postController.createPost(req.body, res);
});

// Define a route for paths like "/:id" using the 'PUT' method
router.put("/:id", (req, res) => {
  // Call the 'updatePost' method from the 'postController' in the 'Controllers' module
  // This method likely updates the post with the specified ID using the data in the request
  Controllers.postController.updatePost(req, res);
});

// Define a route for paths like "/:id" using the 'DELETE' method
router.delete("/:id", (req, res) => {
  // Call the 'deletePost' method from the 'postController' in the 'Controllers' module
  // This method likely deletes the post with the specified ID
  Controllers.postController.deletePost(req, res);
});

// Export the router to make it available for use in other files
module.exports = router;
