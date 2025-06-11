import React from "react";
import CheckIcon from '../assets/check.png'

function MembershipPlans() {
  const plans = [
    {
      id: 1,
      plan: "Basic",
      image: "https://i.pinimg.com/736x/28/c4/91/28c4912c1b4f7497bd36decf10796361.jpg",
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
      image: "https://i.pinimg.com/736x/3c/45/f0/3c45f04dc28f2f61b3bcb1e9de5d4f99.jpg",
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
      image: "https://i.pinimg.com/736x/1e/bf/3a/1ebf3a63c61e7fa14f2e5f43f4c9c9a0.jpg",
      includes: {
        access: "All Access + Spa",
        trainer: "Personal Trainer",
        timing: "Anytime Access",
      },
      price: 3000,
    },
    {
      id: 4,
      plan: "Elite",
      image: "https://i.pinimg.com/736x/3a/9f/b2/3a9fb2ad395a3d242e92ef9b2e55d7cd.jpg",
      includes: {
        access: "All Premium Services",
        trainer: "Dedicated Coach",
        timing: "24/7 Access",
      },
      price: 5000,
    },
  ]

 return (
    <div className='min-h-screen pt-16 bg-slate-900 text-gray-700 font-sans'>
      <section className='max-w-7xl mx-auto text-center px-6 pt-5 pb-20'>
        <h1 className='text-4xl md:text-6xl font-extrabold tracking-tight text-white mx-auto max-w-6xl leading-tight'>
          The Perfect Plan for Your Needs
        </h1>
        <p className='text-gray-400 pt-5'>
          Choose a plan that fits your fitness goals. Each plan is tailored to give you the best experience and results.
        </p>
      </section>

      <section className='max-w-7xl mx-auto px-6 pb-24 grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'>
        {plans.map((plan) => (
          <article
            key={plan.id}
            className='bg-slate-800 border border-gray-500 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-500 flex flex-col items-center p-6'
          >
            <img
              src={plan.image}
              alt={plan.plan}
              className='w-32 h-32 rounded-full object-cover mb-4 shadow-md'
            />
            <h3 className='text-xl font-semibold text-white'>{plan.plan} Plan</h3>
            <p className='text-sm text-gray-300 mb-2 italic'>₹{plan.price}</p>
            <div className='text-center text-gray-400 text-sm space-y-1'>
              <p> {} {plan.includes.access}</p>
              <p>{plan.includes.trainer}</p>
              <p>{plan.includes.timing}</p>
            </div>
          </article>
        ))}
      </section>
    </div>
  )
}

export default MembershipPlans;
