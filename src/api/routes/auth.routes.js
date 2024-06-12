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
import { validateSchema } from "../../middlewares/validateSchema.js";
import { loginSchema, registerSchema } from "../../schemas/auth.schema.js";

const router = Router();

router.post("/register", validateSchema(registerSchema), register);
router.post("/login", validateSchema(loginSchema), login); 
router.post("/logout", logout);
router.get("/profile", authAutenticator, profile);
router.get("/unreal/profile", authAutenticatorUnreal, profile);

export default router;