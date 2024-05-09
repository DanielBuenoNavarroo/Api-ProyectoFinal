import { Router } from "express";
import {
  login,
  logout,
  profile,
  register,
} from "../controllers/auth.controller.js";
import {
  authAutenticator,
  authAutenticatorUnreal,
} from "../../middlewares/validateToken.js";

const router = Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.get("/profile", authAutenticator, profile);
router.get("/unreal/profile", authAutenticatorUnreal, profile);

export default router;
