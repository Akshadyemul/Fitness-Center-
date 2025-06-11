import React from 'react';

const TrainerModal = ({ trainer, onClose }) => {
  if (!trainer) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg w-4/5 max-w-4xl max-h-[90vh] overflow-y-auto relative">
        <button 
          className="absolute top-2 right-2 text-2xl bg-transparent border-none cursor-pointer text-gray-700"
          onClick={onClose}
        >
          ×
        </button>
        <div className="flex flex-col md:flex-row gap-5 p-5">
          <div className="md:w-1/3">
            <img 
              src={trainer.image} 
              alt={trainer.name} 
              className="w-full rounded"
            />
            <div className="bg-gray-100 px-3 py-1 rounded inline-block mt-2">
              Rating: {trainer.rating}/5
            </div>
          </div>
          <div className="md:w-2/3">
            <h2 className="text-2xl font-bold mb-3">{trainer.name}</h2>
            <p className="mb-2"><strong>Experience:</strong> {trainer.experience}</p>
            <p className="font-bold mb-1">Certifications:</p>
            <ul className="list-disc pl-5 mb-4">
              {trainer.certifications.map((cert, index) => (
                <li key={index}>{cert}</li>
              ))}
            </ul>
            <p className="font-bold mb-1">Availability:</p>
            <ul className="list-disc pl-5 mb-6">
              {trainer.availability.map((slot, index) => (
                <li key={index}>{slot}</li>
              ))}
            </ul>
            <button className="bg-red-500 text-white px-5 py-2 rounded hover:bg-red-600 transition-colors">
              Book Session
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainerModal;