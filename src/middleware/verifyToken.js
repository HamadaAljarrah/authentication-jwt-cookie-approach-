import jwt from "jsonwebtoken"

export const allowIfLoggedIn = (req, res, next)=>{
    const token = req.cookies.jwt
    if(!token){
        res.redirect("/login")
    }
    try {
        const user = jwt.verify(token, process.env.TOKEN_SECRET)
        req.user = user
    } catch (error) {
        console.log(error);
    }
    return next()

}

export const allowIfNotLoggedIn = (req, res, next)=>{
    const token = req.cookies.jwt
    if(token){
        res.redirect("/profile")
    }
    return next()

}