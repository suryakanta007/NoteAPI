import { Note } from "../model/notes.model.js";

export const createNote = async(req,res)=>{
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
        return res.status(500).json({error:"something went wrong",heelo:error.message})
        
    }
}

// get all notes controller

export const getAllNotes = async(req,res)=>{
    try {
        const notes = await Note.find()
        if(!notes){
            return res.status(500).json({error:"something went wrong"})
        }
        return res.status(201).json({message:"note created successfully",notes})
    } catch (error) {
        return res.status(500).json({error:"something went wrong",error})
        
    }
}