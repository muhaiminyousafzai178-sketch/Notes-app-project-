import React from "react";

const App = () => {

 const submithandel =(e)=>{
  e.preventDefault()
  console.log( 'from submitted ')
 }





  return (
    <div className="h-screen text-white bg-black lg:flex">
      <form onSubmit={(e) =>{
       submithandel(e)
      }} className="flex p-15 pt-20 gap-5  w-150  flex-col items-start lg:w1/2  ">
        
          <input
            type="text"
            placeholder="Enter notes heading"
            className="px-5  py-2 border-2 rounded h-15 font-medium w-full outline-none "
          />
          <textarea
            type="text"
            placeholder="Write Details"
            className=" px-5 py-2 border-2 font-medium  rounded  h-32  flex items-start  w-full  outline-none  "
          />
          <button className="bg-white text-black px-5 py-2 rounded w-1/2 ">
            Add Notes{" "}
          </button>

        
      </form>
    <div className="  p-10  lg:w 1/2 w-170 border-l ">
      <h1 className="text-3xl font-bold">Your Notes</h1>
      <div className=" flex gap-5  p-5 ">
      <div className="w-52 h-62  rounded-2xl bg-white "></div>
      <div className="w-52 h-62  rounded-2xl bg-white "></div>
      <div className="w-52 h-62  rounded-2xl bg-white "></div>
      </div>
    </div>
    </div>
  );
};

export default App;
