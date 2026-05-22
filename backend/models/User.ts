import mongoose from "mongoose";

export interface IUser extends Document{
    name:string;
    email:string;
    password?:string;
    createdAt?:Date;
    updatedAt?:Date;
}

const UserScehma = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
            trim:true
        },
        email:{
            type:String,
            required:true,
            trim:true,
            unique:true,
            lowercase:true,
        },password:{
            type:String,
            required:true,
        }
    },{timestamps:true}
)

const User = mongoose.models.User || mongoose.model<IUser>('User',UserScehma)

export default User;