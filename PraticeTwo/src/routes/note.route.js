import {Router} from "express";
import { Note } from "../model/notes.model.js";
import {createNote, deleteNote, getAllNotes, updateNote} from "../controllers/note.controller.js"
import { get } from "mongoose";


const router = Router();


router.post("/",createNote)
router.get("/",getAllNotes)
router.patch("/:id",updateNote)
router.delete("/:id",deleteNote)

export default router