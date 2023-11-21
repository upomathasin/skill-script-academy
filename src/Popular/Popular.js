import React, { useEffect, useState } from "react";
import Service from "../Service/Service";

export default function Popular() {
  const [popular, setPopular] = useState([]);

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
        <h1 className=" text-red-400 text-5xl uppercase">Services</h1>
        <h1 className="text-black-400">
          ---Here is our most demanding courses---
        </h1>
      </div>
      <div className="grid grid-cols-4  gap-8 ">
        {popular.map((course) => {
          return <Service course={course}></Service>;
        })}
      </div>
    </div>
  );
}
