import React from "react";
import PropTypes from "prop-types";
import VideoItem from "../VideoItem/VideoItem";
import styles from "./VideoList.module.css";

function VideoList({ videos, selectedVideo }) {
  const list = videos.map((video) => {
    return (
      <VideoItem
        video={video}
        selectedVideo={selectedVideo}
        key={video.id.videoId}
      />
    );
  });
  return (
    <>
      {videos.length ? (
        <div>
          <p className={styles.next}>Next</p>
          <hr />
        </div>
      ) : null}
      {list}
    </>
  );
}

VideoList.propTypes = {
  videos: PropTypes.array,
  selectedVideo: PropTypes.func.isRequired,
};
export default VideoList;
