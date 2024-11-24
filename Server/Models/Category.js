const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  name: { type: String, required: true, unique: true },
  description:{type:String, trim:true},
},{timestamps:true});

module.exports = mongoose.model("Category", categorySchema);
