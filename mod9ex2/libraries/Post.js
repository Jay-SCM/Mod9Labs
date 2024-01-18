// Import the 'Models' module, likely representing all the Mongoose models
let Models = require("../models"); // This assumes that 'Models' is defined in an 'index.js' file

// Define a class named 'Post'
class Post {
  // Constructor function, currently empty
  constructor() {}

  // Method to handle fetching all posts
  postsGet(res) {
    Models.Post.find({})
      .then((data) => res.send({ result: 200, data: data })) // Send a successful response with the fetched data
      .catch((err) => {
        console.log(err);
        res.send({ result: 500, error: err.message }); // Send an error response with the error message
      });
  }

  // Method to handle creating a new post
  postPost(data, res) {
    new Models.Post(data)
      .save()
      .then((data) => res.send({ result: 200, data: data })) // Send a successful response with the created post data
      .catch((err) => {
        console.log(err);
        res.send({ result: 500, error: err.message }); // Send an error response with the error message
      });
  }

  // Method to handle updating an existing post
  // REQ.BODY is empty - not working
  postPut(req, res) {
    Models.Post.findByIdAndUpdate(req.params.id, req.body, {
      useFindAndModify: false,
    })
      .then((data) => res.send({ result: 200, data: data })) // Send a successful response with the updated post data
      .catch((err) => {
        console.log(err);
        res.send({ result: 500, error: err.message }); // Send an error response with the error message
      });
  }

  // Method to handle deleting an existing post
  postDelete(req, res) {
    Models.Post.findByIdAndDelete(req.params.id, req.body, {
      useFindAndModify: false,
    })
      .then((data) => res.send({ result: 200, data: data })) // Send a successful response with the deleted post data
      .catch((err) => {
        console.log(err);
        res.send({ result: 500, error: err.message }); // Send an error response with the error message
      });
  }
}

// Export the 'Post' class to make it available for use in other files
module.exports = Post;
