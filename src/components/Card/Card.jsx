import React, { useState } from "react";
import { AiFillEye } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCard,
  setModalOpen,
  addCardToBuffer,
  selectSelection,
  removeCardFromBuffer,
} from "../../redux/video/videoSlice";
import { setCard } from "../../redux/video/videoSlice";

function Card({ video }) {
  const { name, link } = video;
  const dispatch = useDispatch();
  const selection = useSelector(selectSelection);
  const [checked, setChecked] = useState(false);

  const handleChecks = () => {
    if (!checked) dispatch(addCardToBuffer(video.id));
    else dispatch(removeCardFromBuffer(video.id));
    setChecked(!checked);
  };
  const handleClick = () => {
    dispatch(setCard(video));
    dispatch(setModalOpen());
  };

  return (
    <div
      className="w-[100%] p-3 flex flex-col gap-2 bg-white rounded-md cursor-pointer relative"
      key={video.id}
    >
      <h1 className="font-medium">{name}</h1>
      {selection && (
        <div className="absolute top-5 right-5">
          <input
            type="checkbox"
            checked={checked}
            className="h-4 w-4 cursor-pointer"
            onChange={handleChecks}
          />
        </div>
      )}
      <p className="text-[12px] leading-4 font-light text-[ #6B6B6B] mb-2">
        {link}
      </p>
      <div className="flex justify-between items-center">
        <img
          src="https://previews.123rf.com/images/gmast3r/gmast3r1411/gmast3r141100280/33645487-profile-icon-male-avatar-portrait-casual-person.jpg"
          alt="profile"
          className="w-6 h-6"
        />
        <div className="border-[#6B6B6B] border-l px-1" onClick={handleClick}>
          <AiFillEye size={16} color={"#6B6B6B"} />
        </div>
      </div>
    </div>
  );
}

export default Card;
