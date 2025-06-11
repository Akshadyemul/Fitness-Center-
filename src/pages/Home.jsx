import React from "react";
import intro from "../assets/home.mp4";

function Home() {
  return (
    <div className="h-screen w-full relative ">
      <video
        src={intro}
        autoPlay
        loop
        muted
        className="w-full h-full"
        style={{ objectFit: "cover" }}
      >
      </video>
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white p-4">


      <section className="max-w-7xl mx-auto text-center px-6 pt-18 pb-20">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-tight">
          Build Your Strength. Find Your Balance. Transform Your Life.
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-3xl mx-auto border-gray-400">
          Join FitCenter today and train with expert personal trainers who will
          guide you every step of the way.
        </p>
        <a
          href="#signup"
          className="inline-block mt-10 bg-gray-900 text-white px-10 py-3 rounded-lg text-lg font-semibold hover:bg-gray-700 transition duration-300"
        >
          Get Started
        </a>
      </section>



        {/* <h1 className="text-4xl md:text-6xl font-bold text-center drop-shadow-lg">
          KEEP BODY
        </h1>
        <h1 className="text-4xl md:text-6xl font-bold text-center drop-shadow-lg">
          FIT & STRONG
        </h1>
        <p className="mt-4 text-lg md:text-xl text-center max-w-2xl drop-shadow-md">
          Ready to change your body,
          Stronger everyday, Fitter Forever
        </p>
        <button className="mt-8 px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition duration-300">
          Learn More
        </button> */}
      </div>
    </div>
  );
}

export default Home;
