const resolvers = [];
require("fs")
  .readdirSync("./src/resolvers")
  .forEach(function (file) {
    if (file !== "index.js") resolvers.push(require("./" + file));
  });

module.exports = resolvers;
