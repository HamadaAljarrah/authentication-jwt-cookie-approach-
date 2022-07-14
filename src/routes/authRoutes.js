import express from "express"
const router = express.Router()
import * as authControllers from "../controllers/authControllers.js"
import { allowIfLoggedIn, allowIfNotLoggedIn } from "../middleware/verifyToken.js";


router.get("/", allowIfNotLoggedIn, authControllers.renderHome);
router.get("/register", allowIfNotLoggedIn, authControllers.renderRegister);
router.get("/login", allowIfNotLoggedIn, authControllers.renderLogin);
router.get("/profile", allowIfLoggedIn,  authControllers.renderProfile);
router.post("/register", allowIfNotLoggedIn, authControllers.registerUser);
router.post("/login", allowIfNotLoggedIn, authControllers.loginUser);
router.post("/logout", authControllers.logoutUser);



export {router};
