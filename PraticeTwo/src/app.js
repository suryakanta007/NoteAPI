import express from "express"


const app = express();

app.use(express.json());

// Routes\
import noteRoutes from "./routes/note.route.js"
app.use("/api/v1/notes",noteRoutes)



export default app