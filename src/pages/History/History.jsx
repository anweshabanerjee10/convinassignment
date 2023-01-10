import React from "react";
import { useSelector } from "react-redux";
import { selectHistory } from "../../redux/video/videoSlice";

function History() {
  const history = useSelector(selectHistory);
  return (
    <div className="w-full min-h-screen pt-[100px] px-8">
      <h1 className="font-semibold text-2xl">History</h1>
      <div className="h-full w-full">
        <div className="h-full">
          {history.length > 0 ? (
            <div className="flex flex-col  py-5">
              {history.map((hist, id) => {
                return (
                  <div
                    key={id}
                    className={`flex py-2 gap-5 px-5 rounded-md items-center hover:bg-[#ececec] transition-all`}
                    style={{ background: id % 2 === 0 && "#f9f9f9" }}
                  >
                    <h1 className="text-xl w-[200px] mr-4">{hist.name}</h1>
                    <span className="italic">{hist.link}</span>
                    <p className="w-[180px] ml-auto font-sans text-sm">
                      {hist.time}
                    </p>
                  </div>
                );
              })}
            </div>
          ) : (
            <div> No History </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default History;
