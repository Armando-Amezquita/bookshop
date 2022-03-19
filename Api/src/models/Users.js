const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, unique: true },
    lastname: { type: String, required: true, trim: true},
    books: { type: Array }
  },
  {
    timestamps: true,
    versionKey: false, 
  }
);

module.exports = model("users", userSchema);