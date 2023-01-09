import React from "react";
import { useSelector } from "react-redux";
import CreateContainer from "../../components/CreateContainer/CreateContainer";
import { selectVideos } from "../../redux/video/videoSlice";
import "./videos.css";

function Videos() {
  const videos = useSelector(selectVideos);
  console.log(videos);
  return (
    <div className="w-full min-h-screen pt-[70px]">
      <CreateContainer />
      {videos.map((video) => {
        return (
          <div key={video.id}>
            <h1>{video.name}</h1>
            <pre>{video.bucket}</pre>
            <code>{video.link}</code>
          </div>
        );
      })}
    </div>
  );
}

export default Videos;
