import React from 'react';

function AddClients() {
  return (
    <div className="bg-white min-h-screen flex items-center justify-center p-6">
      <div className="flex justify-center items-center w-full max-w-3xl">
        <form className="flex flex-col gap-4 w-full p-8 shadow-lg rounded-lg bg-white">
          <h1 className="text-2xl font-bold text-center mb-6">Add Client</h1>

          {/* Client Input */}
          <label htmlFor="client" className="text-gray-400 font-semibold text-sm">Client</label>
          <input
            type="text"
            id="client"
            className="border-b-2 border-gray-400 text-sm p-2 focus:outline-none"
            placeholder="Client Name"
            required
          />

          {/* Category Input */}
          <label htmlFor="category" className="text-gray-400 font-semibold text-sm">Category</label>
          <input
            type="text"
            id="category"
            className="border-b-2 border-gray-400 text-sm p-2 focus:outline-none"
            placeholder="Choose Category"
            required
          />

          {/* Representative Input */}
          <label htmlFor="representative" className="text-gray-400 font-semibold text-sm">Representative</label>
          <input
            type="text"
            id="representative"
            className="border-b-2 border-gray-400 text-sm p-2 focus:outline-none"
            placeholder="Representative Name"
            required
          />

          {/* Date of Creation Input */}
          <label htmlFor="dateOfCreation" className="text-gray-400 font-semibold text-sm">Date of Creation</label>
          <input
            type="date"
            id="dateOfCreation"
            className="border-b-2 border-gray-400 text-sm p-2 focus:outline-none"
            required
          />

          {/* Address Input */}
          <label htmlFor="address" className="text-gray-400 font-semibold text-sm">Address</label>
          <input
            type="text"
            id="address"
            className="border-b-2 border-gray-400 text-sm p-2 focus:outline-none"
            placeholder="Address"
            required
          />

          {/* Email Input */}
          <label htmlFor="email" className="text-gray-400 font-semibold text-sm">Email</label>
          <input
            type="email"
            id="email"
            className="border-b-2 border-gray-400 text-sm p-2 focus:outline-none"
            placeholder="Email"
            required
          />

          {/* Phone Input */}
          <label htmlFor="phone" className="text-gray-400 font-semibold text-sm">Phone</label>
          <input
            type="tel"
            id="phone"
            className="border-b-2 border-gray-400 text-sm p-2 focus:outline-none"
            placeholder="Phone Number"
            required
          />

          {/* Bank Account Input */}
          <label htmlFor="bankAccount" className="text-gray-400 font-semibold text-sm">Bank Account (IBAN)</label>
          <input
            type="text"
            id="bankAccount"
            className="border-b-2 border-gray-400 text-sm p-2 focus:outline-none"
            placeholder="Bank Account (IBAN)"
            required
          />

          {/* Submit Button */}
          <button className="bg-orange-400 text-white font-semibold rounded-lg p-2 px-4 hover:bg-orange-500 hover:cursor-pointer w-full mt-4" onClick={()=>{window.location.href='restoProfile'}}>
            Add Client
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddClients;
