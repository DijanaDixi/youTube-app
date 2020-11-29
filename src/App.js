import React, { useEffect, useState } from "react";
import "./App.css";
import youTube from "./apis/youTube";
import ReactPlayer from "react-player";
import Jumbotron from "./components/jumbotron/jumbotron";
import Search from "./components/jumbotron/Search/Search";

function App() {
  const [video, setVideo] = useState([]);

  useEffect(() => {
    getVideo();
  }, []);

  const getVideo = async () => {
    const response = await youTube.get("/search");
    setVideo(response.data.items[0]);
  };
  console.log(video);
  return (
    <div className="container">
      <Jumbotron />
      <Search/>
      <div className="row">
        <div className="col-md-6">
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${video?.id?.videoId}`}
            className='react-player'
            playing
            width='100%'
            height='300px'
          />
        </div>
        <div className="col-md-6">
            <h1>lista</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
