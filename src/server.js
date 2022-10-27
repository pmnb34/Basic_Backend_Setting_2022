require("dotenv").config();
import http from "http";
import express from "express";
import logger from "morgan";
import { ApolloServer } from "apollo-server-express";
import schema from "./schema";

const startApolloServer = async (schema) => {
  const PORT = process.env.PORT;
  const apollo = new ApolloServer({
    schema,
  });
  await apollo.start();
  const app = express();
  app.use(logger("dev"));
  apollo.applyMiddleware({ app });

  const httpServer = http.createServer(app);

  httpServer.listen(PORT, () => {
    console.log(`🚀Server is running on http://localhost:${PORT} ✅`);
  });
}

startApolloServer(schema);