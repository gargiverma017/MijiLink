import shortUrl from "../models/short_url.model.js";
import urlSchema from "../models/short_url.model.js"
import { ConflictError } from "../utils/errorhandler.js";

export const saveShortUrl =async(shortUrl, longUrl, userId)=>{
    console.log(longUrl)
    try{
        const newUrl = new urlSchema({
        full_url:longUrl,
        short_url:shortUrl,
        })

        if(userId){
            newUrl.user=userId
        }

        await newUrl.save();
    }
    catch(err){
        if(err.code==11000){
            throw new ConflictError("Short Url already exists")
        }
        throw new Error (err)
    }
}

//this come in dao
//if i want to change from mongodb i can just change this much part


export const getShortUrl = async(shortUrl)=>{
    return await urlSchema.findOneAndUpdate({ short_url: shortUrl},{$inc:{clicks:1}});
}

export const getCustomShortUrl = async(slug)=>{
    return await urlSchema.findOne({ short_url: slug});
}