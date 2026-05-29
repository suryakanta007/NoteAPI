import {Schema,model} from "mongoose"

const schema = Schema({
    title:String,
    description:String
})


export const Note  = model("Notes",schema);