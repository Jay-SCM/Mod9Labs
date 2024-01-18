// Import the 'Models' module, likely representing all the Mongoose models
let Models = require("../models"); // This assumes that 'Models' is defined in an 'index.js' file

// Define a class named 'Like'
class Like {
  // Constructor function, currently empty
  constructor() {}

  // Method to handle fetching all likes
  async likesGet(res) {
    try {
      const data = await Models.Like.find({});
      res.send({ result: 200, data: data }); // Send a successful response with the fetched data
    } catch (e) {
      res.send({ result: 500, error: e.message }); // Send an error response with the error message
    }
  }

  // Method to handle creating a new like
  likePost(data, res) {
    new Models.Like(data)
      .save()
      .then((data) => res.send({ result: 200, data: data })) // Send a successful response with the created like data
      .catch((err) => {
        console.log(err);
        res.send({ result: 500, error: err.message }); // Send an error response with the error message
      });
  }

  // Method to handle updating an existing like (commented out as not needed)
  // async likePut(req, res) {
  //   try {
  //     const newLike = Models.Like.findByIdAndUpdate(req.params.id, req.body, {
  //       useFindAndModify: false,
  //     });
  //     await newLike.save();
  //     res.send({ result: 200, data: newLike });
  //   } catch (e) {
  //     res.send({ result: 500, error: e.message });
  //   }
  // }

  // Method to handle deleting an existing like
  // Not working
  async likeDelete(req, res) {
    try {
      const deletedLike = Models.Like.findByIdAndDelete(req.params.id, req.body, {
        useFindAndModify: false,
      });
      res.send({ result: 200, data: deletedLike }); // Send a successful response with the deleted like data
    } catch (e) {
      res.send({ result: 500, error: e.message }); // Send an error response with the error message
    }
  }
}

// Export the 'Like' class to make it available for use in other files
module.exports = Like;
