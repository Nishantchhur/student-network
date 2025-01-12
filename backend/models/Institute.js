const mongoose = require("mongoose");

const instituteSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ["college", "school", "company"],
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  students: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // List of affiliated students
  }],
  teachers: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // List of affiliated teachers
  }]
}, { timestamps: true });

module.exports = mongoose.model("Institute", instituteSchema);
