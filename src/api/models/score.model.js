import mongoose from "mongoose";

const scoreSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    track: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Track",
      required: true,
    },
    score: {
      type: Number,
      required: true,
      validate: {
        validator: function(value) {
          return !isNaN(value);
        },
        message: 'El campo "length" debe ser un número válido'
      }
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Score", scoreSchema);
