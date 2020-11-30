/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "./App.css";
import youTube from "./apis/youTube";
import ReactPlayer from "react-player";
import Jumbotron from "./components/jumbotron/jumbotron";
import Search from "./components/jumbotron/Search/Search";
import VideoList from "./components/jumbotron/VideoList/VideoList";
import PreviouslyVisitedVideos from "./components/jumbotron/PreviouslyVisetedVideos/PreviouslyVisetedVideo";

function App() {
  const [video, setVideo] = useState([]);
  const [videos, setList] = useState([]);
  const [session, setSession] = useState([]);
  const [previouslyVideos, setPrevioslyVideos] = useState([]);

  useEffect(() => {
    getExsistingVideo();
  }, []);


  const getExsistingVideo = () => {
    if (sessionStorage.getItem("previously")) {
      let videos = JSON.parse(sessionStorage.getItem("previously"));
      let unique=videos.filter((v,i,a)=>a.findIndex(t=>(JSON.stringify(t) === JSON.stringify(v)))===i)
      setSession(unique);
    }
  };

  const handleFormSubmit = async (value) => {
    const response = await youTube.get("/search", {
      params: {
        q: value,
      },
    });
    setVideo(response.data.items[0]);
    setList(response.data.items.slice(1));
  };

  const selectedVideo = (item) => {
    const state = [...session, item]
    sessionStorage.setItem("previously", JSON.stringify(state));
    getExsistingVideo();

    setVideo(item);
    let filter=session.filter((v)=>v.id.videoId !== item.id.videoId).reverse()
    setPrevioslyVideos(filter)
  };

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
          <PreviouslyVisitedVideos
            previouslyVideos={previouslyVideos}
            selectedVideo={selectedVideo}
          />
        </div>

        <div className="col-md-4 offset-1">
          <VideoList videos={videos} selectedVideo={selectedVideo} />
        </div>
      </div>
    </div>
  );
}

export default App;
