import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearBuffer,
  deleteVideo,
  selectBuffer,
  selectColor,
  selectModalOpen,
  selectSelection,
  selectVideos,
} from "../../redux/video/videoSlice";
import { setSelectionOff, setSelectionOn } from "../../redux/video/videoSlice";
import Colors from "../Color/Color";
import Columnns from "../Columns/Columns";
import { guidGenerator } from "../../Utility/utility";
import { addVideo } from "../../redux/video/videoSlice";
import Modal from "../Modal/Modal";
import { AiFillDelete, AiOutlineSelect } from "react-icons/ai";

function VideoContainer() {
  const videos = useSelector(selectVideos);
  const color = useSelector(selectColor);
  const dispatch = useDispatch();
  const modalOpen = useSelector(selectModalOpen);
  const selection = useSelector(selectSelection);
  const bufferCards = useSelector(selectBuffer);

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

  const handleDeleteMultiple = () => {
    for (let id of bufferCards) {
      dispatch(deleteVideo({ id }));
    }
    dispatch(clearBuffer());
    dispatch(setSelectionOff());
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
          <div className="ml-auto">
            {!selection ? (
              <div
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => dispatch(setSelectionOn())}
              >
                <AiOutlineSelect size={24} color={color} />
                <span className="font-semibold text-[18px]">Select</span>
              </div>
            ) : (
              <div className="cursor-pointer">
                <span className="italic">
                  You have selected {bufferCards.length} cards
                </span>
                <div className="flex">
                  <div onClick={handleDeleteMultiple}>
                    <AiFillDelete size={20} color="red" />
                  </div>
                  <button
                    className="text-sm ml-auto text-green-600 "
                    onClick={() => dispatch(setSelectionOff())}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </div>
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
