import { Router } from "express";

import {
  getTracks,
  getTrack,
  postTrack,
  deleteTrack,
} from "../controllers/tracks.controller.js";

import {
  getScores,
  postScore,
  updateScore,
  deleteScore,
  getTopScores
} from "../controllers/score.controller.js";

import { authAutenticator } from "../../middlewares/validateToken.js";

const router = Router();

router.get("/tracks", getTracks);
router.get("/tracks/:id", getTrack);
router.post("/tracks", authAutenticator, postTrack);
router.delete("/tracks/:id", authAutenticator, deleteTrack);

router.get("/scores/:trackId", getScores);
router.post("/scores/:trackId", authAutenticator, postScore);
router.put("/scores/:trackId", authAutenticator, updateScore);
router.delete("/scores/:trackId", authAutenticator, deleteScore);
router.get("/scores/topscores/:trackId", getTopScores);

export default router;
