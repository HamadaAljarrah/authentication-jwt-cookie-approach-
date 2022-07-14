import { User } from "../model/user.js"
import { createUser } from "./createUser.js";

export const registerNewUser = async(res, {name, email, password}) =>{
    const userExist = await User.findOne({email})
    if(!(name && password && email)){
        res.render("register.ejs", {message: "All inputs is required"});
    } 
    else if(userExist){
        res.render("register.ejs", {message: "User already exist!"}); 
    }
    else {
        const user = {name, email, password}
        createUser(user);
        res.redirect("/login")
    }
}