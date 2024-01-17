const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema(
  {
    company: {
      type: String,
      required: [true, "Please provide company name"],
      maxLength: 50,
    },
    position: {
      type: String,
      required: [true, "Please provide position"],
      maxLength: 100,
    },
    status: {
      type: String,
      enum: ["interview", "declined", "pending"],
      default: "pending",
    },
    createdBy: {
      type: mongoose.Types.ObjectId, // this is very very important. every time when we create a job, we assigned to one of our users.
      ref: "User", // which model we are referencing.
      required: [true, "Please provide user"],
    },
  },
  { timestamps: true } // It creates createdAt and UpdatedAt properties.
);

module.exports = mongoose.model("Job", jobSchema);
