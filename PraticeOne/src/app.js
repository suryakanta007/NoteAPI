import express from "express";



const app = express();

app.use(express.json());


// Routes
import notesRoutes from "./routes/notes.routs.js"
app.use("/api/v1/notes",notesRoutes)





export default app

