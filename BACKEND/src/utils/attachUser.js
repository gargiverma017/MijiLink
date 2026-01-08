import { findUserById } from "../dao/user.dao.js";
import { verifyToken } from "./helper.js";

export const attachUser = async (req, res, next) => {
  const token = req.cookies.accessToken;
  if (!token) {
    return next();
  }
  try {
    const decoded = verifyToken(token);
    const user = await findUserById(decoded);
    if(!user){
        return next();
    }
    req.user = user; 
    next();
  } catch (err) {
    return next();
  }
};
//This middleware silently checks if a user is logged in and, if yes, attaches the user to req.user.
//We do this so that every request automatically “knows” who the user is (if logged in), without forcing login.
