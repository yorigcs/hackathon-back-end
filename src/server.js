import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT ||"5000";

const server = express();

server.use([express.json(),cors()]);

server.listen(PORT, () => console.log(" listening on port " + PORT));