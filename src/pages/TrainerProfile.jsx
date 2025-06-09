import React, { useState } from "react";
import { trainers } from "../../../learn/src/seminar/data/trainers";
import TrainerCard from "../../../learn/src/seminar/TrainerCard";
import TrainerModal from "../../../learn/src/seminar/TrainerModal";

function TrainerProfile() {
  const [filter, setFilter] = useState("all");
  const [selectedTrainer, setSelectedTrainer] = useState(null);

  const handleViewProfile = (trainer) => {
    setSelectedTrainer(trainer);
  };

  const handleCloseModal = () => {
    setSelectedTrainer(null);
  };

  const filteredTrainers =
    filter === "all"
      ? trainers
      : trainers.filter((trainer) => trainer.specialties.includes(filter));

  return (
    <div className="h-screen items-center">
      <h1>Trainer Profile</h1>

      <section>
        <h2>Find Your Perfect Trainer</h2>

        <div>
          <button onClick={() => setFilter("all")}>All Trainers</button>

          <button onClick={() => setFilter("weight loss")}>Weight Loss</button>

          <button onClick={() => setFilter("strength training")}>
            Strength
          </button>
          <button onClick={() => setFilter("yoga")}>Yoga</button>
        </div>
      </section>

      <section>
        {filteredTrainers.map((trainer) => (
          <TrainerCard
            key={trainer.id}
            trainer={trainer}
            onViewProfile={handleViewProfile}
          />
        ))}
      </section>

      <TrainerModal trainer={selectedTrainer} onClose={handleCloseModal} />
    </div>
  );
}

export default TrainerProfile;
