import {Router} from "express";
import { Note } from "../model/notes.model.js";
import {createNote} from "../controllers/note.controller.js"


const router = Router();


router.post("/",createNote)

export default router