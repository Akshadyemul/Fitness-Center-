import React from "react";

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-gray-400 pt-10 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        
        <div>
          <h3 className="text-white font-bold text-xl mb-3">FitCenter</h3>
          <p className="text-sm">
            Empowering you to lead a healthier and stronger life with professional trainers and modern facilities.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#home" className="hover:text-white">Home</a></li>
            <li><a href="#services" className="hover:text-white">Services</a></li>
            <li><a href="#membership" className="hover:text-white">Membership Plans</a></li>
            <li><a href="#trainers" className="hover:text-white">Our Trainers</a></li>
            <li><a href="#about" className="hover:text-white">About Us</a></li>
            <li><a href="#contac" className="hover:text-white">Contact Us</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Contact Us</h4>
          <ul className="text-sm space-y-1">
            <li>Email: fitcenter.com</li>
            <li>Phone: 0123456789</li>
            <li>Location: Solapur, Maharashtra</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white">Instagrom</a>
            <a href="#" className="hover:text-white">Facebook</a>
            <a href="#" className="hover:text-white">Twitter</a>
          </div>
        </div>
      </div>

      <div className="text-center mt-10 text-sm text-gray-500 border-t border-slate-700 pt-4">
        © {new Date().getFullYear()} FitCenter. All rights reserved.
      </div>
    </footer>
  );
}