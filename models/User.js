const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  //i can also add more properties as needed
  credits: { type: Number, default: 0 },
});

mongoose.model("users", userSchema);
