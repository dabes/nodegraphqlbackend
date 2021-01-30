const { gql } = require("apollo-server-express");

const mutation = gql`
  type Mutation {
    createCurriculo(curriculo: CurriculoInput): Curriculo
    updateCurriculo(id: String, curriculo: CurriculoInput): Curriculo
    deleteCurriculo(id: String): Curriculo
  }
  input CurriculoInput {
    name: String
    title: String
    description: String
    facebook: String
    linkedin: String
  }
  input CarreiraInput {
    company: String
    timefrom: String
    timeto: String
    position: String
    description: String
    curriculo: CurriculoInput
  }
`;

module.exports = mutation;
