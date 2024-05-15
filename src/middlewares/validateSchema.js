import mongoose from "mongoose";
import userModel from "../api/models/user.model.js";

export const validateSchema = (schema) => (req, res, next) => {
  const errors = [];
  try {
    for (const field of Object.keys(schema)) {
      const fieldValue = req.body[field];
      const validationError = schema[field].validate(fieldValue);
      if (validationError) {
        errors.push(validationError);
      }
    }
    if (errors.length !== 0) {
      res.status(400).json({ errors });
    } else {
      next();
    }
  } catch (error) {
    res.status(500).json({ message: "Error validating schema" });
  }
};
