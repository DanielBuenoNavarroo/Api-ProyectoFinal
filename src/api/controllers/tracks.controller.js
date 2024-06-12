import trackModel from "../models/track.model.js";

export const getTracks = async (req, res) => {
  try {
    const page = req.params.page || 1;
    const limit = 9;
    const skip = (page - 1) * limit;
    const tracks = await trackModel
      .find()
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .select("-content")
      .populate({
        path: 'author',
        select: 'username'
      });
    res.status(200).json({ tracks });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching tracks" });
  }
};

export const getTrack = async (req, res) => {
  try {
    const track = await trackModel.findById(req.params.id).populate({
      path: 'author',
      select: 'username'
    });
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
    const { name, content } = req.body;
    const id = req.params.id;
    console.log(req.body);
    const newTrack = new trackModel({
      name: name,
      content: content,
      author: id,
    });
    const savedTrack = await newTrack.save();
    res.status(201).json(savedTrack);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error creating track" });
  }
};
