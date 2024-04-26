import trackModel from "../models/track.model.js";

export const getTracks = async (req, res) => {
  try {
    const tracks = await trackModel.find().populate("author");
    res.status(200).json(tracks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching tracks" });
  }
};

export const getTrack = async (req, res) => {
  try {
    const track = await trackModel.findById(req.params.id).populate("author");
    if (!track) {
      return res.status(404).json({ message: "Track not found" });
    }
    res.status(200).json(track);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching track" });
  }
};

export const deleteTrack = async (req, res) => {
  try {
    const deletedTrack = await trackModel.findByIdAndDelete(req.params.id);
    if (!deletedTrack) {
      return res.status(404).json({ message: "Track not found" });
    }
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error deleting track" });
  }
};

export const postTrack = async (req, res) => {
  try {
    const { name, length } = req.body;
    const newTrack = new trackModel({ name, length, author: req.user.id });
    const savedTrack = await newTrack.save();
    res.status(201).json(savedTrack);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error creating track" });
  }
};
