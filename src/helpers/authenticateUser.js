import { User } from "../model/user.js";
import bcrypt from "bcrypt"
import { createToken } from "./createToken.js";

export const authenticateUser = async(res, email, password) => {
    const user = await User.findOne({email});
        if(!(email && password)){
           res.render("login.ejs", {message: "All inputs is required"});
        }else if(!user){
           res.render("login.ejs", {message: "User doesn't exist"});
        }
        else if(user && await bcrypt.compare(password, user.password)){
            const payload = {userId: user._id, name: user.name, email: email}
            const token = createToken(payload);
            res.cookie("jwt", token, {mayAge: process.env.MAX_AGE, httpOnly: true})
            res.redirect("./profile")
        } else {
            res.render("login.ejs", {message: "Email or password is wrong"});
        }
}