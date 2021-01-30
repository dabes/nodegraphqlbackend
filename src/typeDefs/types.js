const { gql } = require("apollo-server-express");

const types = gql`
  type Curriculo {
    id: ID!
    name: String
    title: String
    description: String
    facebook: String
    linkedin: String
    carreira: [Carreira]
    formacao: [Formacao]
    habilidade: [Habilidade]
    informacoes: [Informacao]
  }

  type Carreira {
    id: ID!
    company: String
    curriculo: Curriculo
    description: String
    position: String
    timefrom: String
    timeto: String
  }

  type Formacao {
    id: ID!
    curriculo: String
    curso: String
    estado: String
    grau: String
    inicio: String
    instituicao: String
  }

  type Habilidade {
    id: ID!
    curriculo: String
    name: String
    percent: String
    type: String
  }

  type Informacao {
    id: ID!
    curriculo: String
    dataNascimento: String
    email: String
    estadoCivil: String
    idade: String
    sexo: String
  }

  type Projeto {
    id: ID!
    title: String
    image: String
    description: String
    link: String
  }
`;

module.exports = types;
