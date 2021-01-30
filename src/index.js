const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const cors = require("cors");

const typeDefs = require("./typeDefs");
const resolvers = require("./resolvers");

require("dotenv").config();

const db = require("./db");
const server = new ApolloServer({ typeDefs, resolvers });

const StartServer = async () => {
  const app = express();
  server.applyMiddleware({ app });
  app.use(cors());
  db.on("error", (error) => console.error(error));
  await db.once("open", () => console.log("connected to database"));
  app.listen({ port: process.env.APP_PORT }, () =>
    console.log(
      `🚀 Server ready at http://localhost:${process.env.APP_PORT}${server.graphqlPath}`
    )
  );
};

StartServer();
