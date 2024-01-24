import { Router } from "express";
import { register } from "../controllers/auth.controller.js";

const authRouter = Router();

authRouter.route("/login").post(register);

export default authRouter;
