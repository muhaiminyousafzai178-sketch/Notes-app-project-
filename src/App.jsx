import React from "react";
import { useState } from "react";
import { X } from 'lucide';


const App = () => {
  const [title, settitle] = useState("");
  const [details, setDetails] = useState("");
  const [Task, setTask] = useState([]);

  const submithandel = (e) => {
    e.preventDefault();

    const copyTask = [...Task];
    copyTask.push({ title, details });
    setTask(copyTask);
    console.log(copyTask);

    settitle("");
    setDetails("");
  };

  return (
    <div className="h-200 text-white bg-black lg:flex ">
      <form
        onSubmit={(e) => {
          submithandel(e);
        }}
        className="flex p-15 pt-10 gap-5  w-150  flex-col items-start lg:w1/2  "
      >
        <h1 className="text-4xl font-bold">Add Notes</h1>
        {/* headin wala input */}
        <input
          type="text"
          placeholder="Enter notes heading"
          className="px-5  py-2 border-2 rounded h-15 font-medium w-full outline-none "
          value={title}
          onChange={(e) => {
            settitle(e.target.value);
          }}
        />
        {/* details wala input */}
        <textarea
          type="text"
          placeholder="Write Details"
          className=" px-5 py-2 border-2 font-medium  rounded  h-32  flex items-start  w-full  outline-none  "
          value={details}
          onChange={(e) => {
            setDetails(e.target.value);
          }}
        />

        <button className="bg-white text-black px-5 py-2 rounded w-1/2  active:bg-gray-400 ">
          Add Notes{" "}
        </button>
      </form>
      <div className="  p-10  lg:w 1/2 w-170 border-l  ">
        <h1 className="text-4xl font-bold">Your Notes</h1>
        <div className=" overflow-auto flex gap-5  p-5 flex-wrap  ">
          {Task.map((elem, idx) => {
            return (
              <div
                key={idx}
                className="relative h-52 p-5   w-42 rounded-xl text-black bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF_1sp-G-5Or_Wvr4m2788FPM-CneleVyVjQ&s')] leading-tight "
              >
                <h1><X /></h1>
                <h1 className="font-bold p-2">{elem.title} </h1>
                <p className=" p-2"> {elem.details} </p>

              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
