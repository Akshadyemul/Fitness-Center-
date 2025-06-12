import React from "react";
import CheckIcon from "../assets/check.png";

function MembershipPlans() {
  const plans = [
    {
      id: 1,
      plan: "Basic",
      image:
        "https://i.pinimg.com/736x/28/c4/91/28c4912c1b4f7497bd36decf10796361.jpg",
      includes: {
        access: "Gym Access",
        trainer: "No Personal Trainer",
        timing: "Limited Hours",
      },
      price: 1000,
    },
    {
      id: 2,
      plan: "Standard",
      image:
        "https://i.pinimg.com/736x/3c/45/f0/3c45f04dc28f2f61b3bcb1e9de5d4f99.jpg",
      includes: {
        access: "Full Gym Access",
        trainer: "Group Trainer",
        timing: "Flexible Hours",
      },
      price: 2000,
    },
    {
      id: 3,
      plan: "Premium",
      image:
        "https://i.pinimg.com/736x/1e/bf/3a/1ebf3a63c61e7fa14f2e5f43f4c9c9a0.jpg",
      includes: {
        access: "All Access",
        trainer: "Personal Trainer",
        timing: "Anytime Access",
      },
      price: 3000,
    },
    {
      id: 4,
      plan: "Elite",
      image:
        "https://i.pinimg.com/736x/3a/9f/b2/3a9fb2ad395a3d242e92ef9b2e55d7cd.jpg",
      includes: {
        access: "All Premium Services",
        trainer: "Dedicated Coach",
        timing: "24/7 Access",
      },
      price: 5000,
    },
  ];

  return (
    <div
      className="min-h-screen pt-16 bg-slate-900 text-gray-700 font-sans"
      id="plans"
    >
      <section className="max-w-7xl mx-auto text-center px-6 pt-5 pb-10">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mx-auto max-w-6xl leading-tight">
          The Perfect Plan for Your Needs
        </h1>
        <p className="text-gray-400 pt-2">
          Choose a plan that fits your fitness goals. Each plan is tailored to
          give you the best experience and results.
        </p>
      </section>
      <section className="max-w-7xl mx-auto px-8 pb-10 grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {plans.map((plan) => (
          <article
            key={plan.id}
            className="bg-slate-800 border border-gray-500 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-500 flex flex-col items-center p-6 space-y-3"
          >
            <h3 className="text-3xl font-semibold text-white">
              {plan.plan} Plan
            </h3>
            <p className="text-2xl text-gray-300 italic">₹{plan.price}</p>
            <div className="text-center text-gray-400 text-sm space-y-3">
              <p className="flex">
                {" "}
                <img className="w-5 aspect-square" src={CheckIcon} alt="" />
                <span className="block ml-2">{plan.includes.access}</span>
              </p>
              <p className="flex">
                {" "}
                <img
                  className="w-5 aspect-square"
                  src={CheckIcon}
                  alt=""
                />{" "}
                <span className="block ml-2">{plan.includes.trainer}</span>
              </p>
              <p className="flex">
                {" "}
                <img
                  className="w-5 aspect-square"
                  src={CheckIcon}
                  alt=""
                />{" "}
                <span className="block ml-2">{plan.includes.timing}</span>
              </p>
            </div>

            <button className="px-12 py-3 border text-white border-white rounded-lg font-semibold hover:bg-gray-600 transition-opacity">
              Get Started
            </button>
          </article>
        ))}
        <div className="col-span-full flex justify-center">
          <button className="px-12 py-3  border border-white rounded-lg text-white font-semibold hover:bg-gray-600 transition-opacity">
            Book Demo Class
          </button>
        </div>
      </section>

      <div className="max-w-7xl text-center px-6">
        <h1 className="text-2xl font-extrabold tracking-tight text-white mx-auto max-w-6xl leading-tight">
          We Have Over 1000 Satisfied And Happy Customers
        </h1>
      </div>
    </div>
  );
}

export default MembershipPlans;
