const Model = require("../models/curriculo");

const resolver = {
  Query: {
    curriculos() {
      return Model.find()
        .populate("carreira")
        .populate("informacoes")
        .populate("habilidade")
        .populate("formacao");
    },
    curriculo(_, { id }) {
      return Model.findById(id);
    },
  },
  // Mutation: {
  //   createCurriculo(_, { data }) {
  //     const newData = new Model(data);
  //     return newData.save();
  //   },
  //   updateCurriculo(_, { id, data }) {
  //     return Model.findByIdAndUpdate(id, data, {
  //       new: true,
  //     });
  //   },
  //   deleteCurriculo(_, { id }) {
  //     return Model.findByIdAndRemove(id);
  //   },
  // },
};

module.exports = resolver;
