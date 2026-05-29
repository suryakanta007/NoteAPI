import { Router } from "express";
import { Note } from "../models/notes.model.js";


const router = Router()



// post /notes "title","description" public

router.post("/",async(req,res)=>{
    try {
        const {title,description} = req.body;
        if(!title || !description){
            return res.status(400).json({error:"title and description both are required"})
        }
        const newNote = await Note.create({title,description})
        if(!newNote){
            return res.status(500).json({error:"something went wrong"})
        }
        return res.status(201).json({message:"note created successfully",note:newNote})
    } catch (error) {
        return res.status(500).json({error:"something went wrong",error})
        
    }
})

export default router