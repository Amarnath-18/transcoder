import express from "express";
import { env } from "./configs/envs";

const app = express();

app.use(express.json());

app.get("/health", (_, res) => {
  res.status(200).json({
    uptime: process.uptime(),
    message: "OK",
    timestamp: new Date().toISOString(),
    environment: env.node_env,
  });
});

export { app };
