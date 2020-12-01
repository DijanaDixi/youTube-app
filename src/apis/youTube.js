import axios from "axios"
const KEY= "AIzaSyCgIYPvzh9uec_au8V6oO3OXdkPhdQhv7U"

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3/',
    params:{
        part: "snippet",
        maxResault:10,
        key: KEY,
        // q: "adel",
        type: "video", 
    }
})