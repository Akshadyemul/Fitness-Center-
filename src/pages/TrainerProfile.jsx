import React from "react";
import { useState } from "react";
import { trainers } from "../data/trainers";

export default function TrainerProfile() {
  const [selectedTrainer, setSelectedTrainer] = useState(null);
  return (
    <div
      className="min-h-screen pt-16 bg-slate-900 text-gray-700 font-sans"
      id="profile"
    >
      <section className="max-w-7xl mx-auto text-center px-6 pt-8 pb-20">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-tight">
          Meet Your Transformation Experts
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-500 max-w-3xl mx-auto border-gray-400">
          Discover our certified trainers, each dedicated to helping you unlock
          your full potential. From strength training to holistic wellness,
          they’re here to shape your journey.
        </p>
      </section>

      <section
        id="trainers"
        className="max-w-7xl mx-auto px-6 pb-24 grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
      >
        {trainers.map((trainer) => (
          <article
            key={trainer.id}
            className="bg-slate-800 border border-gray-500 rounded-xl shadow-sm hover:shadow-lg transition-all duration-500 flex flex-col items-center p-6"
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
            <button
              onClick={() => setSelectedTrainer(trainer)}
              className="px-12 py-3 mt-5 border cursor-pointer text-white border-white rounded-lg font-semibold hover:bg-gray-600 transition-opacity"
            >
              View Profile
            </button>
          </article>
        ))}
      </section>
      {selectedTrainer && (
        <div className="fixed inset-0 bg-slate-900 bg-opacity-70 z-50 flex justify-center items-center">
          <div className="bg-slate-800 rounded-lg p-6 max-w-md w-full relative text-black">
            <button
              className="absolute top-2 right-3 text-white text-2xl"
              onClick={() => setSelectedTrainer(null)}
            >
              &times;
            </button>
            <img
              src={selectedTrainer.image}
              alt={selectedTrainer.name}
              className="w-30 h-30 rounded-full object-cover mx-auto mb-4"
            />
            <h2 className="text-2xl font-bold text-center text-white mb-2">
              {selectedTrainer.name}
            </h2>
            <p className="text-center text-sm text-gray-300 italic mb-2">
              {selectedTrainer.specialty}
            </p>
            <p className="text-sm text-gray-300">{selectedTrainer.bio}</p>
            <p className="text-sm mt-4 text-gray-300">
              <strong>Experience:</strong>{" "}
              {selectedTrainer.experience || "3+ years"}
            </p>
            <p className="text-sm text-gray-300">
              <strong>Certifications:</strong>{" "}
              {selectedTrainer.certifications || "Certified Trainer"}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
