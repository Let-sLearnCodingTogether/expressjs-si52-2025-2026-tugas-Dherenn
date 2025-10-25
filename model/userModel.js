import mongoose from "mongoose";
const UserSchema = new mongoose.Schema(
    {
        username :{
            type : String,
            required : [true, "Username Wajib Diisi!"],
            unique : true,
            trim : true
        },
        email : {
            type : String,
            required : [true, "Email Wajib Diisi!"],
            unique : true,
            trim : true

        },
        password : {
            type : String,
            required: [true, "Password Wajib Diisi!"]
        }
    },
    {
        timestamps : true
    }
)

const UserModel = mongoose.model("User", UserSchema)

export default UserModel

