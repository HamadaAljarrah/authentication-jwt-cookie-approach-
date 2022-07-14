import { authenticateUser } from "../helpers/authenticateUser.js";
import { registerNewUser } from "../helpers/registerUser.js";
export const registerUser = async (req, res)=>{
    try {
        const {name, password, email} = req.body;
        const user = {name, password, email}
        registerNewUser(res, user)

    } catch (error) {
        console.log(error);
    }
    
}

export const loginUser = async (req, res)=>{
    try {
        const {email, password} = req.body;
        authenticateUser(res, email, password)

    } catch (err) {
        console.log(err);
    }
}

export const logoutUser = async (req, res)=>{
    try {
        res.cookie("jwt", "", {maxAge: 1, httpOnly: true});
        res.redirect("/login")
    } catch (error) {
        console.log(error);
    }
}



export const renderHome = (req, res)=>{
    res.render("home.ejs")
}

export const renderLogin = (req, res)=>{
    res.render("login.ejs", {message: req.message})
}

export const renderRegister = (req, res)=>{
    res.render("register.ejs", {message: req.message})
}
export const renderProfile = (req, res)=>{
    res.render("profile.ejs", {name: req.user.name, email: req.user.email})
}

