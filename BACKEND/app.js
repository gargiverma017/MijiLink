import express from "express"
import {nanoid} from "nanoid"
import dotenv from "dotenv"

import connectDB from "./src/config/mongo.config.js"
import short_url from "./src/routes/short_url.route.js"
import auth_routes from "./src/routes/auth.route.js"
import user_routes from "./src/routes/user.route.js"
import { redirectFromShortUrl } from "./src/controller/short_url.controller.js"
import { errorHandler } from "./src/utils/errorhandler.js"
dotenv.config("./.env")

import cors from "cors"
import { attachUser } from "./src/utils/attachUser.js"
import cookieParser from "cookie-parser"




const app=express();

//important for cookies to set in browser
app.use(
  cors({
    origin: 'http://localhost:5173', // your React app
    credentials: true, // this allows cookies to be sent
  })
);

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
app.use(attachUser)

app.use("/api/user",user_routes)
app.use("/api/auth",auth_routes)
app.use("/api/create",short_url) //will go to routes folder


app.get("/:id", redirectFromShortUrl);


//in last
app.use(errorHandler)

app.listen(3000,()=>{
    connectDB()
    console.log("server is running on port 3000 http://localhost:3000")
})