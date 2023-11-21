import React from "react";

export default function ({ course }) {
  return (
    <div>
      <div class="card  w-80  glass">
        <figure>
          <img src={course.picture} alt="" className=" h-60  p-3" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">{course.title}</h2>
          <p className=" font-bold  rounded">
            Price :
            <span className=" text-black bg-red-400 rounded-lg">
              {" "}
              {course.price}
            </span>
          </p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary text-white">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}
