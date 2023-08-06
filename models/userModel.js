const mongoose = require("mongoose");

//schema design   what is benefit of schema?
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "name is required"],
    },
    email: {
      type: String,
      required: [true, "email is required and should be unique"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "password is required"],
    },
  },
  { timestamps: true }
);

// what is meant by model in mongoose.model?

//export
const userModel = mongoose.model("users", userSchema);
module.exports = userModel;
