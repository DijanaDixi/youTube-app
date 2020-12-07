import axios from "axios"
const KEY= 'AIzaSyC4C8gUaMgqwunhVMXmHzcIKTz0Toer0zQ'

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3/',
    params:{
        part: "snippet",
        key: KEY,
        type: "video", 
    }
})