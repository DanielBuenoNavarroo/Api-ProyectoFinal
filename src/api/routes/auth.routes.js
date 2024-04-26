import { Router } from "express";
import { login, logout, profile, register } from "../controllers/auth.controller.js";
import { authAutenticator } from "../../middlewares/validateToken.js";

const router = Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout)
router.get("/profile", authAutenticator, profile)

export default router;
