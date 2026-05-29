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

router.get("/",async(req,res)=>{
    try {
        const notes = await Note.find()
        if(!notes){
            return res.status(500).json({error:"something went wrong"})
        }
        return res.status(200).json({message:"notes fetched successfully",notes})
    } catch (error) {
        return res.status(500).json({error:"something went wrong",error})
        
    }
})

router.patch("/:id",async(req,res)=>{
    const {id} = req.params;
    const {title,description} = req.body;
    if(!id){
        return res.status(403,{message:"Id is needed."})
    }
    if(!title||!description){
        return res.status(403).json({message:"Title and description is needed."})
    }

    const isNotePresent = await Note.findOne({_id:id});
    if(!isNotePresent){
        return res.status(404).json({message:"Note is not found."})
    }
    const updateNote = await Note.findOneAndUpdate({_id:id},{title,description})

    res.status(200).json({message:"Note is Updated Successfully.",updateNote})

})

export default router