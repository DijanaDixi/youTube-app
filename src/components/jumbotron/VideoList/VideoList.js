/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import VideoItem from "../VideoItem/VideoItem"



function VideoList({videos,selectedVideo}){

    const list=videos.map((video)=>{
        return(
            <VideoItem video={video} selectedVideo={selectedVideo} />
        )
    })
    return(
        <>
          {list}
          </>
   
    )
}
export default VideoList;