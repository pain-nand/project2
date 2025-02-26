import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    userName: {
        type:  String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },

}, {timestamps: true})

const UserModel = mongoose.model("users", UserSchema)

export default UserModel
