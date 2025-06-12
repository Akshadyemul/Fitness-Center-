import React from "react";
import intro from "../assets/home.mp4";

function Home() {
  return (
    <div className="h-screen w-full relative" id="home">
      <video
        src={intro}
        autoPlay
        loop
        muted
        className="w-full h-full"
        style={{ objectFit: "cover" }}
      >
      </video>
      <div className="absolute bottom-20 left-0 w-full h-full flex items-center text-white p-4">
      <section className="max-w-7xl px-6 pt-18 pb-20">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-white max-w-4xl leading-tight">
          Build Your Strength. Find Your Balance. Transform Your Life.
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-3xl border-gray-400">
          Join FitCenter today and train with expert personal trainers who will
          guide you every step of the way.
        </p>
        <a
          href="#signup"
          className="inline-block mt-10 hover:bg-gray-600 border border-white text-white px-10 py-3 rounded-lg text-lg font-semibold transition duration-300"
        >
          Get Started
        </a>
      </section>
      </div>
    </div>
  );
}

export default Home;
