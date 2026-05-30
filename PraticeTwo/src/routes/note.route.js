import {Router} from "express";
import { Note } from "../model/notes.model.js";
import {createNote, getAllNotes} from "../controllers/note.controller.js"
import { get } from "mongoose";


const router = Router();


router.post("/",createNote)
router.get("/",getAllNotes)

export default router