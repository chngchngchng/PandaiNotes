const mongoose = require("mongoose");

const moduleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A Module must have a name!"],
  },
  code: {
    type: String,
    required: [true, "A module must have its own code!"],
  },
  description: {
    type: String,
  },
});

const Module = mongoose.model("Module", moduleSchema);
module.exports = Module;
