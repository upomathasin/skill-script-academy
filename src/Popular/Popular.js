import React, { useEffect, useState } from "react";
import Service from "../Service/Service";

export default function Popular() {
  const [popular, setPopular] = useState([]);
  //Fetching Data of courses from json file
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => {
        const p = data.filter((d) => d.popular);
        setPopular(p);
      });
  }, []);

  return (
    <div className=" min-h-screen  p-10   ">
      <div className=" tab-bordered mx-auto w-4/12 py-4 text-center   my-10">
        <h1 className=" text-red-400  text-5xl uppercase">Services</h1>
        <h1 className="text-black-400">
          ---Here is our most demanding courses---
        </h1>
      </div>
      <div className="grid justify-center items-center sm:grid-cols-1  md:grid-cols-4  gap-5 ">
        {popular.map((course) => {
          return <Service course={course}></Service>;
        })}
      </div>
    </div>
  );
}
