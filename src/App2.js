import React, { useEffect, useState } from "react";
import "./App.css";
import axios from 'axios';
import ReactPlayer from "react-player"
function App() {
  const [video, setVideo] = useState([]);
 
  useEffect(() => {
    getVideo();
  }, []);

  const getVideo = () => {
    // var params = {
    //   part: "snippet",
    //   key: "AIzaSyA-rZyZ5d52Wpp_1XWcLwBm3ECKOk8KvOw",
    //   q: "adel",
    //   type: "video",
    // };

    axios.get('https://www.googleapis.com/youtube/v3/search?',{params:params})
      .then(res => {
        const persons = res.data;
       console.log(persons.items)
       setVideo(persons.items[0])
      })
  };
console.log(video)
  return (
    <div className="container">
      <h1>hello</h1>
      <div>
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${video?.id?.videoId}`}
      />
    </div>
    </div>
  );
}

export default App;
