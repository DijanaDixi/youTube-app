import React from "react";
import PropTypes from "prop-types"
import PreviouslyVisitedItem from "../PreviouslyVisetedItem/PreviouslyVisetedItem";
function PreviouslyVisitedVideos({ previouslyVideos, selectedVideo, videos }) {

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
      {videos.length > 0 ? (
        <div>
          <h5>Previouse</h5>
          <hr className="w-25" />
        </div>
      ) : null}
      {history}
    </>
  );
}

PreviouslyVisitedVideos.propTypes={
previouslyVideos:PropTypes.array,
selectedVideo:PropTypes.func,
videos:PropTypes.array.isRequired

}
export default PreviouslyVisitedVideos;
