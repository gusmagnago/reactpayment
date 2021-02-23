//mongoose mongo class
const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  //i can also add more properties as needed
});

mongoose.model("users", userSchema);
