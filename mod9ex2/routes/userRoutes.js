// Import the 'express' module and create an instance of the router
let express = require("express");
let router = express.Router();

// Import the 'Controllers' module which likely contains the logic for handling user-related operations
let Controllers = require("../mod9ex2/controllers");

// Define a route for the root path ("/") using the 'GET' method
router.get("/", (req, res) => {
  // Call the 'getUsers' method from the 'userController' in the 'Controllers' module
  // This method likely fetches and sends a list of users as a response
  Controllers.userController.getUsers(res);
});

// Define a route for the "/create" path using the 'POST' method
router.post("/create", (req, res) => {
  // Call the 'createUser' method from the 'userController' in the 'Controllers' module
  // This method likely creates a new user based on the data in the request body
  Controllers.userController.createUser(req.body, res);
});

// Define a route for paths like "/:id" using the 'PUT' method
router.put("/:id", (req, res) => {
  // Call the 'updateUser' method from the 'userController' in the 'Controllers' module
  // This method likely updates the user with the specified ID using the data in the request
  Controllers.userController.updateUser(req, res);
});

// Define a route for paths like "/:id" using the 'DELETE' method
router.delete("/:id", (req, res) => {
  // Call the 'deleteUser' method from the 'userController' in the 'Controllers' module
  // This method likely deletes the user with the specified ID
  Controllers.userController.deleteUser(req, res);
});

// Export the router to make it available for use in other files
module.exports = router;

