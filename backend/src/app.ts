import express from "express";
import cors from 'cors';
import { RegisterRoutes } from "../build/routes";

const app = express();

app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "DELETE", "PUT"],
    allowedHeaders: ["Content-Type"]
}));
app.use(express.json());


RegisterRoutes(app);

export default app;