/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import youTube from "./apis/youTube";
import Player from "./components/Player/Player";

import Search from "./components/Search/Search";
import VideoList from "./components/VideoList/VideoList";
import PreviouslyVisitedVideos from "./components/PreviouslyVisetedVideos/PreviouslyVisetedVideo";

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
    console.log(response.data.items)
    setVideo(response.data.items[0]);
    setList(response.data.items.slice(1));
  };

  const selectedVideo = (item) => {
    setVideo(item);
    const state = [...session, item]
    sessionStorage.setItem("previously", JSON.stringify(state));
    getExsistingVideo();
   
    anotherFunction(item)
  };
  const anotherFunction=(item)=>{
    let filter=session.filter((v)=>v.id.videoId !== item.id.videoId).reverse()
    setPrevioslyVideos(filter)
  }

  return (
    <div className="container">
      <Search handleFormSubmit={handleFormSubmit} />
      <div className="row">
        <div className="col-md-7">
          <Player video={video}/>
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
