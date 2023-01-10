import React, { useState } from "react";
import { AiFillFileAdd } from "react-icons/ai";
import Select from "react-select";
import { useDispatch } from "react-redux";
import { addVideo } from "../../redux/video/videoSlice";
import { getId, guidGenerator } from "../../Utility/utility";

const options = [
  { value: "Entertainment", label: "Entertainment" },
  { value: "Education", label: "Education" },
  { value: "Technical", label: "Technical" },
];

const INITIAL_STATE = {
  name: "",
  bucket: "",
  link: "",
};

function CreateContainer() {
  const dispatch = useDispatch();
  const [state, setState] = useState(INITIAL_STATE);
  const handleChange = (e) => {
    setState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSelection = ({ value }) => {
    setState((prev) => ({
      ...prev,
      bucket: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !state.name ||
      state.bucket === "Select..." ||
      !state.bucket ||
      !state.link
    )
      return;
    const video = {
      id: guidGenerator(),
      name: state.name,
      bucket: state.bucket,
      link: state.link,
      videoId: getId(state.link),
    };
    dispatch(addVideo({ video }));
    setState(INITIAL_STATE);
  };
  return (
    <div className="h-[250px] w-[95%] video-create-container shadow-md">
      <div className="flex-[0.4] flex justify-center items-center">
        <div className="text-white flex gap-2 cursor-pointer">
          <AiFillFileAdd size={28} />
          <span className="font-bold text-2xl">Create A Card</span>
        </div>
      </div>
      <div className="flex-[0.6] h-[110%] shadow-md bg-white rounded-lg -translate-y-5 pt-5">
        <form className="p-5 flex flex-col gap-4">
          <div className="flex w-full gap-3">
            <div className="flex flex-col gap-1 flex-[0.5] ">
              <label className="text-sm text-blue-900">Name</label>
              <input
                type="text"
                value={state.name}
                name="name"
                onChange={handleChange}
                className="formInput"
              />
            </div>
            <div className="flex flex-col gap-1 flex-[0.5]">
              <label className="text-sm text-blue-900 mb-2">Type</label>
              <Select options={options} onChange={handleSelection} />
            </div>
          </div>
          <div className="flex flex-col gap-1 flex-[0.5]">
            <label className="text-sm text-blue-900">Link</label>
            <input
              type="text"
              value={state.link}
              name="link"
              onChange={handleChange}
              className="formInput"
            />
          </div>
          <button
            className="w-[50%] rounded-md mx-auto text-white font-semibold p-3"
            onClick={handleSubmit}
            style={{ background: "red" }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateContainer;
