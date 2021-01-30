const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  facebook: {
    type: String,
  },
  linkedin: {
    type: String,
  },
  carreira: [{ type: mongoose.Schema.Types.ObjectId, ref: "Carreira" }],
  formacao: [{ type: mongoose.Schema.Types.ObjectId, ref: "Formacao" }],
  habilidade: [{ type: mongoose.Schema.Types.ObjectId, ref: "Habilidade" }],
  informacoes: [{ type: mongoose.Schema.Types.ObjectId, ref: "Informacoes" }],
});

let Model;

try {
  // Trying to get the existing model to avoid OverwriteModelError
  Model = mongoose.model("Curriculo");
} catch {
  Model = mongoose.model("Curriculo", schema);
}

module.exports = Model;
