import { registerUser } from "../services/auth.service.js";
import wrapAsync from "../utils/tryCatchWrapper.js";
import { cookieOptions } from "../config/config.js";
import { loginUser } from "../services/auth.service.js";


export const register_user = wrapAsync(async (req, res)=> {
    const { name, email, password } = req.body;
    const {token,user} = await registerUser(name, email, password);

    req.user = user;
    res.cookie("accessToken", token, cookieOptions);
    res.status(200).json({message:"Registration successful"})
});

export const login_user = wrapAsync(async (req, res) => {
    const { email, password } = req.body;
    const {token,user} = await loginUser(email, password);
    
    req.user = user;
    res.cookie("accessToken", token, cookieOptions);
    res.status(200).json({user:user,message:"Login successful"})
});

export const logout_user = wrapAsync(async (req, res) => {
    res.clearCookie("accessToken", cookieOptions);
    res.status(200).json({ message: "Logout successful" });
}); 

export const get_current_user = wrapAsync(async (req, res) => {
    res.status(200).json({ user: req.user });
});