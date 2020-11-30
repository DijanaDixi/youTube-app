/* eslint-disable react/prop-types */
import React from "react";
import styles from "./PreviouslyVisetedVideo.module.css"
function PreviouslyVisetedItem({item,selectedVideo}){

    return(
        <>
        <div className={` card ${styles.videoItemCard}`} onClick={()=>selectedVideo(item)} >
        <img src={item?.snippet?.thumbnails?.medium?.url} />
        <div className="card-body">
            <h5 className="card-title">{item?.snippet?.title}</h5>
        </div>
      </div>
</>
    )
}

export default PreviouslyVisetedItem;