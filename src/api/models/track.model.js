import mongoose from "mongoose";

const trackSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  length: {
    type: Number,
    required: true,
    validate: {
      validator: function(value) {
        return !isNaN(value);
      },
      message: 'El campo "length" debe ser un número válido'
    }
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
}, {
    timestamps: true,
});

export default mongoose.model("Track", trackSchema);
