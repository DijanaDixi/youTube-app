/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import styles from "./VideoItem.module.css";

function VideoItem({ video, selectedVideo }) {
  return (
   
    <div className={styles.videoCard} onClick={()=>selectedVideo(video)}>
      <div className={styles.image}>
        <img src={video.snippet.thumbnails.medium.url} />
      </div>
      <div className={styles.about}>
        <h6>{video.snippet.title.substring(0,40)}</h6>
        <p className="mt-1 ml-1">{video?.snippet?.channelTitle} &#119136;</p>
      </div>
    </div>
   
  );
}

export default VideoItem;
