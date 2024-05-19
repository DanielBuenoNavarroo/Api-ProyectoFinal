import jwt from "jsonwebtoken";
import { tokenS } from "../config.js";

export const authAutenticator = (req, res, next) => {
  try {
    const { token } = req.cookies;

    if (!token) {
      console.log("No token, authorization denied");
      return res
        .status(401)
        .json({ message: "No token, authorization denied" });
    }

    jwt.verify(token, tokenS, (error, user) => {
      if (error) {
        console.log("Token is not valid");
        return res.status(401).json({ message: "Token is not valid" });
      }
      req.user = user;
      next();
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};

export const authAutenticatorUnreal = (req, res, next) => {
  try {
    const token = req.headers["token"];

    if (!token) {
      console.log("No token, authorization denied");
      return res
        .status(401)
        .json({ message: "No token, authorization denied" });
    }

    jwt.verify(token, tokenS, (error, user) => {
      if (error) {
        console.log("Token is not valid");
        return res.status(401).json({ message: "Token is not valid" });
      }
      req.user = user;
      next();
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  } 
};
