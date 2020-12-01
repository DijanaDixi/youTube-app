/* eslint-disable react/prop-types */
import React from "react";
import PreviouslyVisitedItem from "../PreviouslyVisetedItem/PreviouslyVisetedItem";

function PreviouslyVisitedVideos({ previouslyVideos,selectedVideo}) {

  let videos=previouslyVideos.map((item)=>{
    return(
      <PreviouslyVisitedItem
       key={item.id.videoId} 
       item={item} 
       selectedVideo={selectedVideo}
      
       />
    )
  })
  return (
    <>
   {videos}
   </>
  );
}

export default PreviouslyVisitedVideos;
