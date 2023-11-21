import React, { useEffect, useState } from "react";

export default function Team() {
  const [teachers, setTeachers] = useState([]); //set data in state

  //fetching data
  useEffect(() => {
    fetch("teachers.json")
      .then((res) => res.json())
      .then((data) => setTeachers(data));
  }, []);

  return (
    <div className="min-h-min p-10">
      <div className=" tab-bordered mx-auto w-4/12 py-4 text-center   my-10">
        <h1 className=" text-blue-400 text-5xl uppercase">Team</h1>
        <h1 className="text-black-400">---Meet with our Team Members---</h1>
      </div>
      <div className="carousel w-full  ">
        {teachers.map((teacher, index) => {
          return (
            <div id={`item${index + 1}`} className="carousel-item">
              <div className=" flex-col  text-center">
                <img src={teacher.picture} className="w-96" />
                <h1>{teacher.name}</h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-xs">
          4
        </a>
        <a href="#item5" className="btn btn-xs">
          5
        </a>
        <a href="#item6" className="btn btn-xs">
          6
        </a>
      </div>
    </div>
  );
}
