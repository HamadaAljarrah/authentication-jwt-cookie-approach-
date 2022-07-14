import dotenv from "dotenv"
if(process.env.NODE_ENV !== "producation") dotenv.config();
import express, { urlencoded } from "express"
import { router as authRouter } from "./routes/authRoutes.js";
import { connectToMongoDb } from "./config/mongodb-config.js";
import cookieParser from "cookie-parser"
const app = express();
app.set("views", "src/views")
app.set("view-engine", "ejs")

app.use(express.json());
app.use(cookieParser());
app.use(urlencoded({extended: false}))
app.use(express.static("./public"));
connectToMongoDb(process.env.MONGO_URL)

app.use("/", authRouter)


const port = process.env.PORT || 3000
app.listen(port, ()=>console.log("listning to port *" + port))

//res.cookie(cookie name, value, options)
//req.cookie(name)