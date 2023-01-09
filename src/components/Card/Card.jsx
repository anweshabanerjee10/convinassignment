import React from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { setModalOpen } from "../../redux/video/videoSlice";
import { setCard } from "../../redux/video/videoSlice";

function Card({ video }) {
  const { name, link } = video;
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(setCard(video));
    dispatch(setModalOpen());
  };
  return (
    <div
      className="w-[100%] p-3 flex flex-col gap-2 bg-white rounded-md cursor-pointer"
      key={video.id}
      onClick={handleClick}
    >
      <h1 className="font-medium">{name}</h1>
      <p className="text-[12px] leading-4 font-light text-[ #6B6B6B] mb-2">
        {link}
      </p>
      <div className="flex justify-between items-center">
        <img
          src="https://previews.123rf.com/images/gmast3r/gmast3r1411/gmast3r141100280/33645487-profile-icon-male-avatar-portrait-casual-person.jpg"
          alt="profile"
          className="w-6 h-6"
        />
        <div className="border-[#6B6B6B] border-l px-1">
          <AiOutlineEdit size={16} color={"#6B6B6B"} />
        </div>
      </div>
    </div>
  );
}

export default Card;
