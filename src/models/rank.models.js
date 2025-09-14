import { model, Schema, Types } from "mongoose";


const Rankchema = new Schema({
rank: {
    type: String,
    required: true,
    unique: true
},
level:{
    type: Number,
    required: true,
    unique: true
},
user:{
    type: Types.ObjectId,
    ref:"User",
    required: true,
}
},
{
    versionKey:false,
}


)

export const Rank = model("Rank", Rankchema);