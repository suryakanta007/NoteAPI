import http from "http";
import app from "./app.js";
import { config } from "dotenv";


config();

const server = http.createServer(app);
const PORT = process.env.PORT;

server.listen(PORT, () => {
    console.log(`server is runing on http://localhost:${PORT}`);
});