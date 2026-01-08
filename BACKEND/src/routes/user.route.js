import express from "express";
import { authMiddleware } from "../middleware/auth.middleware.js";
import { getAllUserUrls } from "../controller/user.controller.js";
import { register_user } from "../controller/auth.controller.js";

const router = express.Router();

router.post("/urls",authMiddleware,getAllUserUrls);


export default router;