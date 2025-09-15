import { model, Schema, Types } from "mongoose";


const Postschema = new Schema({
post: {
    type: String,
    required: true,
    unique: true
},
user:{
    type: Types.ObjectId,
    ref:"User",
    required: true,
    unique: true,
}
},
{
    versionKey:false,
}


)

export const Post = model("Post", Postschema);