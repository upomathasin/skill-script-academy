import React, { useEffect, useState } from "react";
import Service from "../Service/Service";

export default function Services() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div className=" p-12 ">
      <div className="text-center  ">
        <h1 className="uppercase my-8 text-4xl text-primary    ">
          {" "}
          Our Services
        </h1>
      </div>
      <div className="grid justify-center items-center sm:grid-cols-1  md:grid-cols-4  gap-5">
        {courses.map((course) => {
          return <Service course={course}></Service>;
        })}
      </div>
    </div>
  );
}
