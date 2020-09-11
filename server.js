const express = require("express");

const projectRouter = require("./router/project_router"); //CHANGE321

const server = express();

server.use(express.json());
// server.use(helmet());
server.use("/api/projects", projectRouter); //CHANGE321

server.get("/", (req, res) => {
  res.status(200).json({ Victor_Frankenstein: "It LIVEEEESSSSSSS" });
});

module.exports = server;
