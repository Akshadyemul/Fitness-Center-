import React from "react";

function Home() {
  return (
    <div className="relative h-screen w-full" id="home">
      <img
        className="absolute inset-0 w-full h-full object-cover"
        src="https://media.istockphoto.com/id/1277242852/photo/holding-weight-and-sitting.jpg?s=612x612&w=0&k=20&c=3sy-VVhUYjABpNEMI2aoruXQuOVb__-AUR6BzOHoSJg="
        alt="Fitness Background"
      />

      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 flex items-center justify-center h-full px-6">
        <section className="text-center max-w-4xl text-white">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
            Build Your Strength. <br />
            Find Your Balance. <br />
            Transform Your Life.
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-200">
            Join <span className="font-semibold text-white">FitCenter</span> today and train with expert personal
            trainers who will guide you every step of the way.
          </p>
          <a
            href="#signup"
            className="inline-block mt-10 px-10 py-3 bg-transparent border border-white text-white text-lg font-semibold rounded-lg hover:bg-white hover:text-black transition duration-300"
          >
            Get Started
          </a>
        </section>
      </div>
    </div>
  );
}

export default Home;
