/* eslint-disable react/prop-types */
import React from "react";
import styles from "./VideoItem.module.css"

function VideoItem({ video,selectedVideo }) {
  return (
    
    <div className={` card ${styles.videoItemCard}`} onClick={()=>selectedVideo(video)}>
      <img src={video.snippet.thumbnails.medium.url} />
      <div className="card-body">
          <h5 className="card-title">{video.snippet.title}</h5>
      </div>
    </div>
    
  );
}

export default VideoItem;
