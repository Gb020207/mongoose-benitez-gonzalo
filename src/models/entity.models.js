import { model, Schema, Types } from "mongoose";


const Entityschema = new Schema({
type: {
    type: String,
    required: true,
    unique: true
},
characteristics:[{
    name: {
        type: String,
        required: true,
        unique: true,
    },
    damage:{
        type: Number,
        required: true,
    },
    description:{
        type: String,
        required: true,
        unique: true
    }
}]
},
{
    versionKey:false,
}
)

export const Entity = model("Entity", Entityschema)