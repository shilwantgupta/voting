import express from "express";
import {
  getProfile,
  getUsers,
  login,
  signUp,
} from "../controller/user.controller";
import { auth, role } from "../middleware/auth.middleware";

const router = express.Router();

router.post("/sign-up", signUp);
router.post("/login", login);
router.get("/users", auth, role("admin"), getUsers);
router.get("/profile", auth, getProfile);

export default router;
