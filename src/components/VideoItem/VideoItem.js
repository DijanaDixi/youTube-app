/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import styles from "./VideoItem.module.css";

function VideoItem({ video, selectedVideo }) {
  return (
    // <div className={` card w-65 ${styles.videoItemCard}`} onClick={()=>selectedVideo(video)}>
    //   <img src={video.snippet.thumbnails.medium.url} className="h-25"/>
    //   <div className="card-body p-3">
    //       <h6 >{video.snippet.title}</h6>
    //   </div>
    // </div>
    <div className="row">
    <div className={styles.videoCard}>
      <div className={styles.image}>
        <img src={video.snippet.thumbnails.medium.url} />
      </div>
      <div className={styles.about}>
        <h6>{video.snippet.title}</h6>
        <p className="mt-1 ml-1">{video?.snippet?.channelTitle} &#119136;</p>
      </div>
    </div>
    </div>
  );
}

export default VideoItem;
