import express from "express";
import {
  addCandidate,
  deleteCandidate,
  getCandidate,
  getCandidates,
  updateCandidate,
} from "../controller/candidate.controller";
import { auth,role } from "../middleware/auth.middleware";

const router = express.Router();

router.post("/candidates", auth, role("admin"), addCandidate);
router.get("/candidates", auth, role("user","admin"), getCandidates);
router.get("/candidates/:id", auth, role("admin"), getCandidate);
router.put("/candidates/:id", auth, role("admin"), updateCandidate);
router.delete("/candidates/:id", auth, role("admin"), deleteCandidate);
export default router;
