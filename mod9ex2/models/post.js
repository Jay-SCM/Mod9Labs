// Import the 'mongoose' module to define Mongoose schemas
const mongoose = require("mongoose");

// Extract the 'Schema' class from the 'mongoose' module
const Schema = mongoose.Schema;

// Import the 'userSchema' module which is assumed to define the user schema
const userSchema = require("./user");

// Define a new Mongoose schema for posts
const postSchema = new Schema({
  // Title of the post, a required string that will be trimmed
  title: { type: String, trim: true, required: true },

  // Content of the post, a string
  content: { type: String },

  // Images associated with the post, stored as an array of strings
  images: [{ type: String }],

  // Creation timestamp of the post, set to the current date by default
  createdAt: {
    type: Date,
    immutable: true, // Once set, this field is immutable
    default: () => Date.now(), // Default value is the current date and time
  },

  // Last update timestamp of the post, set to the current date by default
  updatedAt: {
    type: Date,
    immutable: true, // Once set, this field is immutable
    default: () => Date.now(), // Default value is the current date and time
  },

  // User ID associated with the post, a reference to the 'userSchema'
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "userSchema", // Reference to the 'userSchema'
    required: true,
  },
});

// Export the Mongoose model for the 'post' schema
module.exports = mongoose.model("post", postSchema);

