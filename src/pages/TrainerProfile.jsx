import React from "react";
import { trainers } from '../data/trainers'; 

export default function TrainerProfile() {
  return (
    <div className="min-h-screen pt-16 bg-slate-900 text-gray-700 font-sans">
      <section className="max-w-7xl mx-auto text-center px-6 pt-18 pb-20">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-tight">
          Build Your Strength. Find Your Balance. Transform Your Life.
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-500 max-w-3xl mx-auto border-gray-400">
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

      {/* Trainer Profiles */}
      <section
        id="trainers"
        className="max-w-7xl mx-auto px-6 pb-24 grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
      >
        {trainers.map((trainer) => (
          <article
            key={trainer.id}
            className="bg-slate-800 border border-gray-500 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-500 flex flex-col items-center p-6"
          >
            <img
              src={trainer.image}
              alt={trainer.name}
              className="w-32 h-32 rounded-full object-cover mb-4 shadow-md"
            />
            <h3 className="text-xl font-semibold text-white">{trainer.name}</h3>
            <p className="text-sm text-gray-300 mb-2 italic">
              {trainer.specialty}
            </p>
            <p className="text-center text-gray-400">{trainer.bio}</p>
          </article>
        ))}
      </section>
    </div>
  );
}
