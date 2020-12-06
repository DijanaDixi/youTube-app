/* eslint-disable react/prop-types */
import React from "react";
import PreviouslyVisitedItem from "../PreviouslyVisetedItem/PreviouslyVisetedItem";

function PreviouslyVisitedVideos({ previouslyVideos, selectedVideo,videos }) {
  let history = previouslyVideos.map((item) => {
    return (
      <PreviouslyVisitedItem
        key={item.id.videoId}
        item={item}
        selectedVideo={selectedVideo}
      />
    );
  });
  return (
    <>
      {videos.length>0 ? (
        <div>
          <h5>Previouse</h5>
          <hr className="w-25" />
        </div>
      ) : null}
      {history}
    </>
  );
}

export default PreviouslyVisitedVideos;
