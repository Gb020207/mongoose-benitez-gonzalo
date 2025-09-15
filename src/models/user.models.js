import { model, Schema } from "mongoose";
import { Post } from "./post.models.js";


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
Userschema.pre("findOneAndDelete", async function (next) {
    const userId = this.getQuery()._id;

    console.log("Eliminando usuario", userId);

    await Post.deleteMany({user: userId})
    
    next();
})
export const User = model("User", Userschema);