import mongoose from "mongoose";

const trackSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
    unique: false,
  },
  content: {
    type: Object,
    required: true,
  }
}, {
    timestamps: true,
});

export default mongoose.model("Track", trackSchema);
