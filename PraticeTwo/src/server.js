import http from "http";
import app from "./app.js";
import { config } from "dotenv";

import  dbConnect  from "./config/db.js";



config();

const server = http.createServer(app);
const PORT = process.env.PORT;

dbConnect().then(() => {
    server.listen(PORT, () => {
        console.log(`server is runing on http://localhost:${PORT}`);
    });
}).catch((err) => {
    console.log(err);
});

