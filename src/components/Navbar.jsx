function Navbar() {
  return (
    <div className="flex p-4 justify-evenly items-center fixed top-0 left-0 w-full bg-transparent text-white z-50">
      <div>
        <h1 className="text-3xl font-bold">FitCenter</h1>
      </div>
      <div className="">
        <ul className="flex gap-6 cursor-pointer">
          <li><a>Home</a></li>
          <li><a>Trainer Profiles</a></li>
          <li><a>Membership Plans</a></li>
          <li><a>Services</a></li>
          <li><a>About Us</a></li>
          <li><a>Contact Us</a></li>
        </ul>
      </div>
      <div>
        <button className="p-1.5  hover:bg-gray-700 cursor-pointer bg-gray-900 rounded-lg text-white"><h4>Join Now</h4></button>
      </div>
    </div>
  );
}

export default Navbar;
