import React from "react";

export default function Services() {
  const services = [
    {
      id: 1,
      title: "Personal Training",
      image:
        "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=800&q=80",
      description:
        "Get one-on-one attention and customized workouts from certified personal trainers who focus entirely on your goals.",
    },
    {
      id: 2,
      title: "Group Fitness Classes",
      image:
        "https://images.ctfassets.net/qw8ps43tg2ux/38aA6htT15qYWvXN4S6RtX/c2edd470338830dcf0d79773325edafe/group_exercise_instructor_mobile_hero_image_2x-min.jpg?fm=webp&w=1440&q=75",
      description:
        "Stay motivated with group energy! Join high-intensity, yoga, Zumba, or bootcamp classes led by expert instructors.",
    },
    {
      id: 3,
      title: "Nutrition Guidance",
      image:
        "https://media.istockphoto.com/id/1299421209/photo/diet-and-exercise-for-weight-loss.jpg?s=612x612&w=0&k=20&c=eaXOUJmICKlcSo7idrgCOBH6ZkPP3LX8IPHpeas50Rc=",
      description:
        "Fuel your fitness journey with personalized diet plans and professional nutritional advice tailored for your lifestyle.",
    },

  ];

  return (
    <div className="min-h-screen pt-16 bg-slate-900 text-gray-100 font-sans" id="services">
      <section className="max-w-7xl mx-auto text-center px-6 pt-5 pb-20">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-tight">
          Our Services to Fuel Your Fitness
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
          Explore our range of services designed to support every aspect of your health journey—from workouts and recovery to nutrition and online access.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-24 grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-slate-800 rounded-xl overflow-hidden shadow hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-2">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm">{service.description}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
