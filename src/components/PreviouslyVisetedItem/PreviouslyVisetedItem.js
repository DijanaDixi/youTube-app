/* eslint-disable react/prop-types */
import React from "react";
import styles from "./PreviouslyVisetedVideo.module.css";

function PreviouslyVisetedItem({ item, selectedVideo }) {
  return (
    <>
      <div className={styles.videoCard} onClick={() => selectedVideo(item)}>
        <div className={styles.image}>
          <img src={item.snippet.thumbnails.medium.url} />
        </div>
        <div className={styles.about}>
          <h6>{item.snippet.title.substring(0,40)}</h6>
          <p className="mt-1 ml-1">{item?.snippet?.channelTitle} &#119136;</p>
        </div>
      </div>
    </>
  );
}

export default PreviouslyVisetedItem;
