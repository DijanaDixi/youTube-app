import axios from "axios"
const KEY= "AIzaSyDicIArzG2Tljs13oj_U_q2iwBG9ggqBbk"

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3/',
    params:{
        part: "snippet",
        key: KEY,
        type: "video", 
    }
})