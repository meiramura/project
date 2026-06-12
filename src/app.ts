import express from "express";
import { json } from "express";
import { RegisterRoutes } from "../build/routes";

const app = express();

app.use(json());

RegisterRoutes(app);

export default app;