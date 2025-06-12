function Navbar() {
  return (
    <div className="flex p-4 justify-evenly items-center fixed top-0 left-0 w-full bg-transparent text-white z-50">
      <div>
        <h1 className="text-3xl font-bold cursor-pointer">
          {" "}
          <a href="#home">FitCenter</a>{" "}
        </h1>
      </div>
      <div className="">
        <ul className="flex gap-6 cursor-pointer">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#profile">Trainer Profiles</a>
          </li>
          <li>
            <a href="#plans">Membership Plans</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
        </ul>
      </div>
      <div>
        <button className="px-12 py-2 hover:bg-gray-600 cursor-pointer border border-white rounded-lg text-white">
          <h4>Join Now</h4>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
