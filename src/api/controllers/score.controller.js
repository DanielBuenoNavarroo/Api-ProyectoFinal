import scoreModel from "../models/score.model.js";

export const getScores = async (req, res) => {
  try {
    const scores = await scoreModel
      .find({
        track: req.params.trackId,
      })
      .populate("user")
      .populate("track");
    res.status(200).json(scores);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching scores" });
  }
};

export const getScore = async (req, res) => {
  try {
    const score = await scoreModel.findOne({
      user: req.params.id,
      track: req.params.trackId,
    });
    if (!score) {
      return res.status(404).json({ message: "Score not found" });
    }
    res.status(200).json(score);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching score" });
  }
};

export const getUserPosition = async (req, res) => {
  try {
    const trackId = req.params.trackId;
    const userId = req.params.id;
    const scores = await scoreModel.find({ track: trackId }).sort({ score: 1 });
    const userScoreIndex = scores.findIndex(score => score.user.toString() === userId);
    if (userScoreIndex === -1) {
      return res.status(404).json({ message: "User score not found" });
    }
    const userPosition = userScoreIndex + 1;
    res.status(200).json({ position: userPosition });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error retrieving user position" });
  }
};

export const postScore = async (req, res) => {
  try {
    const { score } = req.body;
    const newScore = new scoreModel({
      user: req.params.id,
      track: req.params.trackId,
      score,
    });
    const savedScore = await newScore.save();
    res.status(201).json(savedScore);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error creating score" });
  }
};

export const updateScore = async (req, res) => {
  try {
    const { score } = req.body;
    const updatedScore = await scoreModel.findOneAndUpdate(
      { user: req.params.id, track: req.params.trackId },
      { score },
      { new: true }
    );
    res.status(200).json(updatedScore);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error updating score" });
  }
};

export const deleteScore = async (req, res) => {
  try {
    const deletedScore = await scoreModel.findOneAndDelete({
      user: req.user.id,
      track: req.params.trackId,
    });
    if (!deletedScore) {
      return res.status(404).json({ message: "Score not found" });
    }
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error deleting score" });
  }
};

export const getTopScores = async (req, res) => {
  try {
    const topScores = await scoreModel
      .find({
        track: req.params.trackId,
      })
      .sort({ score: 1 })
      .limit(10)
      .populate("user")
      .populate("track");
    res.status(200).json(topScores);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching top scores" });
  }
};
