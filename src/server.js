import express from 'express';
import publicRoutes from "./routes/publicRoutes.js"
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT ||"5000";

const server = express();

server.use([express.json(),cors(),publicRoutes]);

server.listen(PORT, () => console.log(" listening on port " + PORT));