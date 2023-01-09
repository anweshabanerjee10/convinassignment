import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeColor } from "../../redux/video/videoSlice";
import { selectColor } from "../../redux/video/videoSlice";

const pallete = [
  "#329C89",
  "#5BB318",
  "#850E35",
  "#1C3879",
  "#B9005B",
  "#1A3C40",
  "#A85CF9",
];
function Colors() {
  const color = useSelector(selectColor);
  const dispatch = useDispatch();
  return (
    <div className="flex gap-2 mx-2 bg-white">
      {pallete.map((clr, index) => {
        return (
          <div
            className="p-[1px] rounded-full "
            style={{ border: color === clr ? `1px solid ${color}` : "none" }}
            onClick={() => dispatch(changeColor(clr))}
            key={index}
          >
            <div
              key={index}
              className=" h-6 w-6 rounded-full cursor-pointer hover:scale-105 transition-all"
              style={{
                background: clr,
              }}
            ></div>
          </div>
        );
      })}
    </div>
  );
}

export default Colors;
