import React from 'react';

function RestoProfile() {
  return (
    <div className="flex flex-col gap-6 bg-gray-50 p-6 rounded-2xl shadow-lg w-full max-w-3xl mx-auto">
      <h2 className="text-xl text-orange-400 font-bold">Restaurant Profile</h2>

      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Restaurant name"
          className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
        <input
          type="text"
          placeholder="Restaurant address"
          className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-orange-400"
        />

        <div>
          <label htmlFor="restaurantNumber" className="block text-gray-700 font-semibold mb-1">
            Contact number @Restaurant
          </label>
          <input
            type="tel"
            placeholder="Mobile Number"
            className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        <div>
          <label htmlFor="ownerNumber" className="block text-gray-700 font-semibold mb-1">
            Contact number @Owner
          </label>
          <input
            type="tel"
            placeholder="Mobile Number"
            className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="Owner name"
            className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <input
            type="email"
            placeholder="Restaurant Owner email"
            className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>
      </form>
    </div>
  );
}

export default RestoProfile;
