import React, { useEffect, useState, useCallback } from "react";
import { debounce } from "lodash";
import youTube from "./apis/youTube"; //api
import Player from "./components/Player/Player";
import Search from "./components/Search/Search";
import VideoList from "./components/VideoList/VideoList";
import PreviouslyVisitedVideos from "./components/PreviouslyVisetedVideos/PreviouslyVisetedVideo";

function App() {
  const [videoPlayer, setVideoPlayer] = useState(null);
  const [value, getValue] = useState("");
  const [videos, setList] = useState([]);
  const [previouslyVideos, setPrevioslyVideos] = useState([]);

  // search value
  const handleValue = (val) => {
    getValue(val);
  };
  const handleFormSubmit = async () => {
    const response = await youTube.get("/search", {
      params: {
        q: value,
        maxResults: 10,
        
      },
    });
    setVideoPlayer(response.data.items[0]);
    setList(response.data.items.slice(1));
  };
  // debounce
  const delayedQuery = useCallback(debounce(handleFormSubmit, 2000), [value]);

  // delayed
  useEffect(() => {
    console.log("test");
    delayedQuery();
    return delayedQuery.cancel;
  }, [value, delayedQuery]);


  const selectedVideo = (item) => {
    const historyState = [videoPlayer, ...previouslyVideos];
    setVideoPlayer(item);
    const filter = [...historyState].filter((v) => v.id.videoId !== item.id.videoId);
    setPrevioslyVideos(filter);
  };

  return (
    <div className="container">
      <Search handleValue={handleValue} value={value} />
      <div className="row">
        <div className="col-md-8">
          {videos.length > 0 ? <Player video={videoPlayer} /> : null}
          <PreviouslyVisitedVideos
            previouslyVideos={previouslyVideos}
            selectedVideo={selectedVideo}
            videos={videos}
          />
        </div>

        <div className="col-md-4">
          <VideoList videos={videos} selectedVideo={selectedVideo} />
        </div>
      </div>
    </div>
  );
}
export default App;
