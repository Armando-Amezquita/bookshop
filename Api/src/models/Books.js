const { Schema, model } = require("mongoose");

const booksSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    released: { type: String, required: true },
    image: { type: String }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

module.exports = model("books", booksSchema);