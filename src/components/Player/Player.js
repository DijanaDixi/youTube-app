/* eslint-disable react/prop-types */
import React from "react";
import ReactPlayer from "react-player";
import moment from "moment";
import styles from "./Player.module.css";

function Player({ video }) {
  
  const date = moment(video?.snippet?.publishedAt).format('LL');
  return (
    <>
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${video?.id?.videoId}`}
        className="react-player"
        playing
        width="100%"
        height="400px"
      />
      <div className={styles.details}>
        <h5>{video?.snippet?.title}</h5>
        <p>{`${date}`}</p>
        <hr />
        <img
          src={video?.snippet?.thumbnails?.default?.url}
          className={styles.imgDetails}
        />
        <span className="ml-1">{video?.snippet?.channelTitle} &#119136;</span>
      </div>
    </>
  );
}

export default Player;
