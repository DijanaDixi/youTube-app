import React, { useState } from "react";
import "./App.css";
import youTube from "./apis/youTube";
import ReactPlayer from "react-player";
import Jumbotron from "./components/jumbotron/jumbotron";
import Search from "./components/jumbotron/Search/Search";
import VideoList from "./components/jumbotron/VideoList/VideoList";

function App() {
  const [video, setVideo] = useState([]);
  const [videos, setList] = useState([]);

  const handleFormSubmit = async (value) => {
    console.log(value);
    const response = await youTube.get("/search", {
      params: {
        q: value,
      },
    });
    setVideo(response.data.items[0]);
    setList(response.data.items.slice(1));
  };

  const selectedVideo=(video)=>{
      setVideo(video)
  }
  return (
    <div className="container">
      <Jumbotron />
      <Search handleFormSubmit={handleFormSubmit} />
      <div className="row">
        <div className="col-md-6">
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${video?.id?.videoId}`}
            className="react-player"
            playing
            width="100%"
            height="300px"
          />
         
        </div>
        <div className="col-md-4 offset-1">
          <VideoList videos={videos} selectedVideo={selectedVideo}/>
        </div>
      </div>
    </div>
  );
}

export default App;
