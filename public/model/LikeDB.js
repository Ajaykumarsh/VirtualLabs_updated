var mongoose = require("mongoose");

var likes = mongoose.Schema([
  {
    sub: {
      type: String,
      required: true,
    },
    labno: {
      type: Number,
      required: true,
    },
    checked: [
      {
        _id: { type: String },
        usn: { type: String, required: true },
        clicked: { type: Boolean, required: true },
      },
    ],
    like: {
      type: Number,
      required: true,
    },
  },
]);

module.exports = mongoose.model("likes", likes);
