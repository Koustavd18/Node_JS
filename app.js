const http = require("http");
const express = require("express");
const routes = require("./routes");

const app = express();
const server = http.createServer(routes);

server.listen(3000, () => {
  console.log("Server started sucessfully");
});

app.listen(3001, () => {
  console.log("Server started at PORT 3000");
});
