import axios from "axios"
const KEY= "AIzaSyA-rZyZ5d52Wpp_1XWcLwBm3ECKOk8KvOw"

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3/',
    params:{
        part: "snippet",
        maxResault:1,
        key: KEY,
        q: "adel",
        type: "video", 
    }
})