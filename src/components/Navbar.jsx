import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex p-4 justify-evenly items-center fixed top-0 left-0 w-full bg-transparent text-white z-50">
      <div>
        <h1 className="text-3xl font-bold cursor-pointer">
          {" "}
          <a href="#home">FitCenter</a>{" "}
        </h1>
      </div>

      <ul className="hidden md:flex gap-6 cursor-pointer">
        <li>
          <a href="#home" className="hover:text-gray-400">
            Home
          </a>
        </li>
        <li>
          <a href="#profile" className="hover:text-gray-400">
            Trainer Profiles
          </a>
        </li>
        <li>
          <a href="#plans" className="hover:text-gray-400">
            Membership Plans
          </a>
        </li>
        <li>
          <a href="#services" className="hover:text-gray-400">
            Services
          </a>
        </li>
      </ul>
      <div className="hidden md:block">
        <button className="px-12 py-2 hover:bg-gray-600 cursor-pointer border border-white rounded-lg text-white">
          <h4>Join Now</h4>
        </button>
      </div>

      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>
    </div>


  );
}

export default Navbar;
