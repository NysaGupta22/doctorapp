import React from 'react';
import { useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets';

const Home = () => {
  const navigate = useNavigate();

  return (
    <section className="max-w-6xl mx-auto px-6 py-20 text-black">
      <div className="text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-semibold font-poppins leading-snug">
          Your Health, <span className="text-gray-500">Our Priority</span>
        </h1>

        <p className="text-base md:text-lg text-gray-600 max-w-xl mx-auto">
          Book appointments with trusted professionals in just a few clicks. No waiting rooms. No stress.
        </p>

        <div>
          <button
            onClick={() => navigate('/doctors')}
            className="px-6 py-3 rounded-full border border-black hover:bg-black hover:text-white transition"
          >
            Browse Doctors
          </button>
        </div>
      </div>

     {/* Optional visual touch */}
<section className="mt-24 px-4">
  <h2 className="text-center text-3xl font-semibold text-black mb-2">
    How it works
  </h2>
  <div className="w-16 h-1 bg-black mx-auto mb-12 rounded-full"></div>

  <div className="grid md:grid-cols-3 gap-10 text-center">
    <div className="transition hover:scale-105 duration-300">
      <div className="w-14 h-14 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
        1
      </div>
      <h3 className="text-xl font-semibold mb-2">Search</h3>
      <p className="text-gray-600 text-sm">
        Find doctors by specialty, location, or name.
      </p>
    </div>

    <div className="transition hover:scale-105 duration-300">
      <div className="w-14 h-14 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
        2
      </div>
      <h3 className="text-xl font-semibold mb-2">Book</h3>
      <p className="text-gray-600 text-sm">
        Choose your time slot and book online instantly.
      </p>
    </div>

    <div className="transition hover:scale-105 duration-300">
      <div className="w-14 h-14 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
        3
      </div>
      <h3 className="text-xl font-semibold mb-2">Consult</h3>
      <p className="text-gray-600 text-sm">
        Visit your doctor or consult virtually.
      </p>
    </div>
  </div>
</section>

    </section>
  );
};

export default Home;
