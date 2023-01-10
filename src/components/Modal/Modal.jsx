import React, { useEffect, useState } from "react";
import { AiFillDelete, AiOutlineEdit } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
  addHistory,
  changeBucket,
  deleteVideo,
  selectCard,
  setCard,
  setModalClose,
} from "../../redux/video/videoSlice";
import Select from "react-select";

const options = [
  { value: "Entertainment", label: "Entertainment" },
  { value: "Education", label: "Education" },
  { value: "Technical", label: "Technical" },
];

function Modal() {
  const dispatch = useDispatch();
  const { name, videoId, id, bucket, link } = useSelector(selectCard);
  const [edit, setEdit] = useState(false);
  const [bucketEdit, setBucketEdit] = useState(bucket);

  const [value, setValue] = useState(() => ({
    value: bucket,
    label: bucket,
  }));

  const handleChangeBucket = () => {
    dispatch(changeBucket({ id, bucket: value.value }));
    setBucketEdit(value.value);
    setEdit(false);
  };

  const handleDelete = () => {
    dispatch(deleteVideo({ id }));
    dispatch(
      setCard({
        name: "",
        videoId: "",
        id: "",
      })
    );
    dispatch(setModalClose());
  };

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  useEffect(() => {
    let timer = setTimeout(() => {
      dispatch(
        addHistory({
          name,
          link,
          time: new Date().toLocaleString(),
        })
      );
    }, 1500);
    return () => clearTimeout(timer);
    // eslint-disable-next-line
  }, []);

  return (
    <div className="h-full w-full absolute top-0 left-0 z-10 bg-slate-400 bg-opacity-60 box-border ">
      <div className="m-[5%] bg-white h-[500px] w-[700px] mx-auto rounded-md">
        <iframe
          width="100%"
          height="70%"
          title="video"
          src={`https://www.youtube.com/embed/${videoId}`}
          className="rounded-md"
        ></iframe>
        <div className="p-4 relative">
          <h1 className="font-medium text-xl">{name}</h1>
          <div className="flex items-center gap-4 my-2">
            <span className="text-slate-500 text-sm">{bucketEdit}</span>
            {!edit && (
              <div onClick={() => setEdit(true)}>
                <AiOutlineEdit className="cursor-pointer" />
              </div>
            )}
          </div>
          <button
            className=" p-2 bg-slate-100 rounded-sm text-sm"
            onClick={() => dispatch(setModalClose())}
          >
            Close
          </button>
          {edit && (
            <div className="absolute right-[30%] top-[20px] w-[250px] ">
              <div className="flex flex-col gap-1 flex-[0.5] ">
                <label className="text-sm text-blue-900 mb-1">Bucket</label>
                <Select
                  options={options}
                  value={value}
                  onChange={(val) => setValue(val)}
                />
                <button
                  className="p-2 m-2 text-xs w-[100px] text-white bg-blue-600 rounded-md"
                  onClick={handleChangeBucket}
                >
                  Change
                </button>
              </div>
            </div>
          )}
          <div
            className="absolute right-5 bottom-5 cursor-pointer"
            onClick={handleDelete}
          >
            <AiFillDelete size={20} color="red" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
