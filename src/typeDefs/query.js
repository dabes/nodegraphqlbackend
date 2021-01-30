const { gql } = require("apollo-server-express");

const query = gql`
  type Query {
    curriculos: [Curriculo]
    curriculo(id: ID!): Curriculo
    acarreiras: [Carreira]
    aformacoes: [Formacao]
    ahabilidades: [Habilidade]
    ainformacoes: [Informacao]
    carreiras(curriculo: String!): [Carreira]
    formacoes(curriculo: String!): [Formacao]
    habilidades(curriculo: String!): [Habilidade]
    informacoes(curriculo: String!): [Informacao]
    projetos: [Projeto]
    projeto(id: ID!): Projeto
  }
`;

module.exports = query;
