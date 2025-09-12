import { model, Schema } from "mongoose";


const Userschema = new Schema({
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
},
{
    versionKey:false,
}


)

export const User = model("User", Userschema);