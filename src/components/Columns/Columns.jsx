import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { useSelector } from "react-redux";
import { selectColor } from "../../redux/video/videoSlice";
import { getId } from "../../Utility/utility";
import Card from "../Card/Card";

function Columnns({ name, id, addCard, data }) {
  const [add, setAdd] = useState(false);
  const color = useSelector(selectColor);

  const [value, setValue] = useState({
    name: "",
    link: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!add) {
      setAdd(true);
      return;
    }
    if (value.name === "" || value.link === "") return;
    addCard({ ...value, videoId: getId(value.link) }, name);
    setValue({
      name: "",
      link: "",
    });
    setAdd(false);
  };

  const handleChange = (e) => {
    setValue((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <div
      className="flex-[0.3] min-h-[450px] rounded-md shadow-md p-4 text-sm flex flex-col gap-4"
      style={{ background: color + "1A" }}
      key={id}
    >
      <div className="flex justify-between ">
        <span className="font-medium">{name}</span>
        <div
          className="h-7 w-7 rounded-full  p-1 text-center "
          style={{ background: color + "1A", color }}
        >
          {data.length}
        </div>
      </div>
      <button
        className="w-[100%] p-2 grid place-content-center rounded"
        onClick={handleSubmit}
        style={{ background: color + "1A", color }}
      >
        {add ? "Add Video" : <AiOutlinePlus size={20} />}
      </button>
      {add && (
        <form className="w-[100%] p-3 flex flex-col gap-1 bg-white rounded-md">
          <input
            type="text"
            name="name"
            className="w-[100%] text-base placeholder:text-[#A4ABB3 p-2 outline-none"
            placeholder="Give your video a name"
            value={value.name}
            onChange={handleChange}
          />
          <textarea
            type="text"
            name="link"
            className="w-[100%] text-[12px] min-h-[70px] leading-4 font-light text-[ #6B6B6B] placeholder:text-[#A4ABB3 p-2 outline-none"
            placeholder="link..."
            value={value.link}
            onChange={handleChange}
          />
          <img
            src="https://cdn.icon-icons.com/icons2/1736/PNG/512/4043260-avatar-male-man-portrait_113269.png"
            alt="avatar"
            className="h-5 w-5"
          />
        </form>
      )}
      {data.map((video) => (
        <Card video={video} />
      ))}
    </div>
  );
}

export default Columnns;
