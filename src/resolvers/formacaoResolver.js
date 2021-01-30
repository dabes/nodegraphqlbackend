const Model = require("../models/formacao");

const resolver = {
  Query: {
    aformacoes() {
      return Model.find().populate("carreira");
    },
    formacoes(_, { curriculo }) {
      return Model.find({ curriculo: curriculo });
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
