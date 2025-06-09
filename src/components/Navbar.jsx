function Navbar() {
  return (
    <div className="flex p-4 justify-evenly items-center">
      <div>
        <h1 className="text-3xl font-bold">Seminar</h1>
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
        <button className="p-1.5 bg-red-500 rounded-lg text-white"><h4>Join Now</h4></button>
      </div>
    </div>
  );
}

export default Navbar;
