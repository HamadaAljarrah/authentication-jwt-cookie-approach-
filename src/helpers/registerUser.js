import { User } from "../model/user.js"
import { createUser } from "./createUser.js";

export const registerNewUser = async(res, {name, email, password}) =>{
    const userExist = await User.findOne({email})
    if(!(name && password && email)) return res.render("register.ejs", {message: "All inputs is required"});
    if(userExist) return res.render("register.ejs", {message: "User already exist!"}); 
    const user = {name, email, password}
    createUser(user);
    return res.redirect("/login")
}