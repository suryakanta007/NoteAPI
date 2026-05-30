import { Schema,model } from "mongoose";


const noteSchema = new Schema({
    title:{
        type:String,
        required:true,
        unquie:true
    },
    description:{
        type:String,
        required:true
    }
})
export const Note = model("Notes",noteSchema)