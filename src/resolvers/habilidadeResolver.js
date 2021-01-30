const Model = require("../models/habilidade");

const resolver = {
  Query: {
    ahabilidades() {
      return Model.find().populate("carreira");
    },
    habilidades(_, { curriculo }) {
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
