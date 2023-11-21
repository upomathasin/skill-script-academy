import React from "react";

export default function Header() {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img src="skill.jpg" className="max-w-lg rounded-lg shadow-2xl" />
          <div className="ml-12 text-center">
            <h1 className="text-5xl font-bold uppercase">
              Welcome to{" "}
              <span style={{ color: "#11cbd2" }}>Skill Script Academy</span>
            </h1>
            <p className="py-5 text-slate-900  ">
              Welcome to Skill Script Academy. An educational coding learning
              academy is driven by the desire to help people easily learn
              coding, preparing them for success in the tech-driven future. We
              strive to make coding education accessible, empowering individuals
              to innovate and thrive in a digital world.
            </p>
            <button className="btn btn-primary text-white font-bold">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
