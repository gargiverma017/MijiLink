import { saveShortUrl,getCustomShortUrl } from "../dao/short_url.dao.js"
import urlSchema from "../models/short_url.model.js"
import { generateNanoId } from "../utils/helper.js"

export const createShortUrlServiceWithoutUser= async(url)=>{
    const shortUrl= generateNanoId(7)
    if(!shortUrl) throw new Error("Short Url not generated")
    await saveShortUrl(shortUrl,url)
    return shortUrl;
}

export const createShortUrlServiceWithUser= async(url,userId,slug=null)=>{ //slug is optional->only created when user exists
    const shortUrl= slug|| generateNanoId(7)
    const exists=await getCustomShortUrl(slug)
    if(exists) throw new Error("This custom url already exists")
    await saveShortUrl(shortUrl,url,userId)
    return shortUrl;
}


