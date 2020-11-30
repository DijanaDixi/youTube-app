import axios from "axios"
const KEY= "AIzaSyC4C8gUaMgqwunhVMXmHzcIKTz0Toer0zQ"

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