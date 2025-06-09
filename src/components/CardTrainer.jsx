import React from "react";

function CardTrainer({ trainer, onViewProfile }) {
  return (
    <div className="border p-5 w-80 shadow-md transition-transform border-gray-300 rounded-lg hover:-translate-y-1">
      <img
        src={trainer.image}
        alt="trainer.name"
        className="w-full h-64 object-cover rounded mb-4"
      />
      <h3>{trainer.name}</h3>
      <p>
        <strong>Specialties:</strong>
      </p>
      <div className="bg-orange-500 text-white p-1 rounded-2xl text-2xl  mr-2 mb-2 inline-block">
        {trainer.specialties.map((specialties, index) => (
          <span key={index}>specialty</span>
        ))}
      </div>
      <p>{trainer.bio}</p>
      <button
        className="bg-slate-700 text-white border-none p-3.5 rounded-md cursor-pointer mt-2.5 transition hover:bg-orange-700"
        onClick={() => onViewProfile(trainer)}
      >
        View Profile
      </button>
    </div>
  );
}

export default CardTrainer;
