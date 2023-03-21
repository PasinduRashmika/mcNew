const crypto = require("crypto");
const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const dailyCountSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "A USer must have a title"],
  },
  name: {
    type: String,
    required: [true, "A student must have a name"],
  },
  level: {
    type: String,
    required: true,
  },
  regNo: {
    type: String,
    required: [true, "A student must have a name"],
    minlength: 8,
    lowercase: true,
    unique:true
  },
  faculty: {
    type: String,
    required: true,
    lowercase: true,
    enum: {
      values: [
        "science",
        "agriculture",
        "allied-health-science",
        "engineering",
        "fisheries-and-merin-science",
        "graduate-studies",
        "humanities-and-social",
        "management-and-finance",
        "medicine",
        "technology",
      ],
      message: "faculties must be one of them",
    },
    immutable: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: false,
    default: Date.now(),
  },
  mobile: {
    type: String,
    required: true,
    unique: true,
  },
});

const DailyCount = mongoose.model("DailyCount", dailyCountSchema);
module.exports = DailyCount;
