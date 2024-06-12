import newsModel from "../models/news.model.js";

export const postNews = async (req, res) => {
  try {
    const { title, subtitle, content, src } = req.body;
    const leng = req.params.leng;
    const newNews = new newsModel({
      title,
      subtitle,
      content,
      leng,
      src,
    });
    const savedNews = await newNews.save();
    res.status(200).json(savedNews);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error creating news" });
  }
};

export const getNews = async (req, res) => {
  try {
    const page = req.params.page || 1;
    const limit = 5;
    const skip = (page - 1) * limit;
    const news = await newsModel
      .find()
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);
    res.status(200).json(news);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching news" });
  }
};

export const getNew = async (req, res) => {
  try {
    const news = await newsModel.findById(req.params.id);
    res.status(200).json(news);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching news" });
  }
};

export const deleteNew = async (req, res) => {
  try {
    const news = await newsModel.findByIdAndDelete(req.params.id);
    res.status(200).json(news);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error deleting news" });
  }
};
