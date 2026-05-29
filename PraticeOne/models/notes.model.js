import {Schema,model} from "mongoose"

const schema = Schema({
    title:String,
    descripction:String
})


export const Note  = model("Notes",schema);