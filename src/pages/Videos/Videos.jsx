import React from "react";
import { useSelector } from "react-redux";
import CreateContainer from "../../components/CreateContainer/CreateContainer";
import VideoContainer from "../../components/VideoContainer/VideoContainer";
import { selectVideos } from "../../redux/video/videoSlice";
import "./videos.css";

function Videos() {
  const videos = useSelector(selectVideos);
  console.log(videos);
  return (
    <div className="w-full min-h-screen pt-[70px]">
      <CreateContainer />
      <VideoContainer />
    </div>
  );
}

export default Videos;
