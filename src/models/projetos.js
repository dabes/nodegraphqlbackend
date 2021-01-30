const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
});

let Model;

try {
  // Trying to get the existing model to avoid OverwriteModelError
  Model = mongoose.model("Projetos");
} catch {
  Model = mongoose.model("Projetos", schema);
}

module.exports = Model;
