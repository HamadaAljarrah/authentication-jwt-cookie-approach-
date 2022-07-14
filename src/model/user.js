import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    name: {type: String,required: true, defualt: null},
    email: {type: String,required: true, unique: true},
    password: {type: String, required: true, minLenght: 6},
})

export const User = mongoose.model("user", userSchema)