import express from "express";
import { doVote, votes } from "../controller/vote.controller";
import { auth, role } from "../middleware/auth.middleware";

const router = express.Router();

router.post("/vote", auth, role("user"), doVote);
router.get("/votes", auth, role("admin"), votes);

export default router;
