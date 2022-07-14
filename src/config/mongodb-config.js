import mongoose from "mongoose";

export const connectToMongoDb = (mongo)=>{
    mongoose.connect(mongo).then(()=>{console.log("conntected to mongoDB");}).catch((err)=>console.log(err))
}