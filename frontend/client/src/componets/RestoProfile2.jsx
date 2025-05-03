import React from 'react';

function RestoProfile2() {
  return (
    <div className="flex flex-col justify-between gap-6 bg-gray-50 p-6 rounded-2xl shadow-lg w-full max-w-3xl mx-auto">
      <h2 className="text-xl text-orange-400 font-bold">Restaurant Profile</h2>

      <form className="flex flex-col gap-4">
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Restaurant Type
          </label>
          <select className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400">
            <option>Restaurant</option>
            <option>Pub</option>
            <option>Hotel</option>
            <option>Coffeshop</option>
            <option>Other</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">Cuisine Type</label>
          <select className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400">
            <option>African</option>
            <option>Western</option>
            <option>Chinese</option>
            <option>Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="openingHour" className="block text-gray-700 font-medium mb-1">
            Opening Hours
          </label>
          <div className="flex gap-4">
            <input
              type="time"
              name="openingHour"
              className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <input
              type="time"
              className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>
        </div>

        <div>
          <label htmlFor="image" className="block text-gray-700 font-medium mb-1">
            Upload Images (pictures or logo)
          </label>
          <input
            type="file"
            className="w-full border border-gray-300 rounded-md p-2 bg-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-orange-400 file:text-white hover:file:bg-orange-500"
          />
        </div>
      </form>
    </div>
  );
}

export default RestoProfile2;
