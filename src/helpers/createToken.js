import jwt from "jsonwebtoken"

export const createToken = (payload)=>{
    const token = jwt.sign(payload, process.env.TOKEN_SECRET)
    return token    
}