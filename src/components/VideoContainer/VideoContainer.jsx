import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectModalOpen, selectVideos } from "../../redux/video/videoSlice";
import Colors from "../Color/Color";
import Columnns from "../Columns/Columns";
import { guidGenerator } from "../../Utility/utility";
import { addVideo } from "../../redux/video/videoSlice";
import Modal from "../Modal/Modal";

function VideoContainer() {
  const videos = useSelector(selectVideos);
  const dispatch = useDispatch();
  const modalOpen = useSelector(selectModalOpen);

  console.log(videos);
  const [buckets, setBuckets] = useState({
    Entertainment: [],
    Education: [],
    Technical: [],
  });

  const addCard = (data, bucket) => {
    const video = {
      ...data,
      id: guidGenerator(),
      bucket,
    };
    dispatch(addVideo({ video }));
  };
  useEffect(() => {
    const data = {
      Entertainment: [],
      Education: [],
      Technical: [],
    };
    videos?.forEach((item) => {
      data[item.bucket].push(item);
    });
    setBuckets(data);
  }, [videos]);
  return (
    <div className="p-10 ">
      {modalOpen && <Modal />}
      <div className="flex flex-col  mb-4 gap-5">
        <div className="flex gap-2 items-center">
          <h1 className="text-2xl font-semibold  cursor-pointer">Cards</h1>
          <Colors />
        </div>
        <div className="flex justify-between  w-full">
          <Columnns
            name="Entertainment"
            id={0}
            data={buckets.Entertainment}
            addCard={addCard}
          />
          <Columnns
            name="Education"
            id={1}
            data={buckets.Education}
            addCard={addCard}
          />
          <Columnns
            name="Technical"
            id={2}
            data={buckets.Technical}
            addCard={addCard}
          />
        </div>
      </div>
    </div>
  );
}

export default VideoContainer;
