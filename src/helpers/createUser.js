import bcrypt from "bcrypt"
import { User } from "../model/user.js"

export const createUser = async (user)=>{
    const hashedPassword = await bcrypt.hash(user.password, 10)
    const theUser = {name: user.name, email: user.email.toLowerCase(), password: hashedPassword};
    User.create(theUser)
    console.log("User was successfully created!");
}