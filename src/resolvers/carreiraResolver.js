const Model = require("../models/carreira");

const ObjectId = require("mongoose").Types.ObjectId;

ObjectId.prototype.valueOf = function () {
  return this.toString();
};

const resolver = {
  Query: {
    carreiras(_, { curriculo }) {
      return Model.find({ curriculo: curriculo });
    },
    acarreiras() {
      return Model.find().populate("curriculo");
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
