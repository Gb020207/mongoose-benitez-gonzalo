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
user:[{
  username: {
    type: String,
    required: true,
    unique: true
},
email:{
    type: String,
    required: true,
    unique: true
},
password:{
    type: String,
    required: true,
    
},
}]
},
{
    versionKey:false,
}


)

export const Rank = model("Rank", Rankchema);