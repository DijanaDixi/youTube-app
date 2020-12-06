/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
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
export default VideoList;
