import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function Filter({ onFilterChange }) {
  const [filters, setFilters] = useState({
    restaurant: false,
    hotels: false,
    pub: false,
  });
  const [newItem, setNewItem] = useState("");

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFilters((prev) => {
      const updatedFilters = { ...prev, [name]: checked };
      onFilterChange(updatedFilters); // Notify parent of filter changes
      return updatedFilters;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newItem.trim()) {
      console.log("New item:", newItem); // Replace with actual logic
      setNewItem("");
    }
  };

  return (
    <div className="bg-white border-gray-200 border-2 shadow-lg rounded-lg p-4 w-full max-w-xs">
      <div className="flex justify-between items-center mb-4">
        <div className="flex flex-col">
          <h1 className="text-gray-800 font-bold">Create</h1>
          <span className="text-gray-400 text-sm">Today</span>
        </div>
        <span className="text-orange-400 hover:underline text-sm cursor-pointer">View all</span>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="flex justify-between items-center border-b border-gray-200 mb-4">
          <input
            type="text"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            placeholder="Create new"
            className="outline-none p-2 flex-1"
            aria-label="Create new item"
          />
          <button type="submit" aria-label="Add new item">
            <FontAwesomeIcon
              icon={faPlus}
              className="bg-gray-200 text-gray-400 p-2 rounded-lg"
            />
          </button>
        </div>
        {[
          { id: "restaurant", label: "Restaurant" },
          { id: "hotels", label: "Hotels" },
          { id: "pub", label: "Pub" },
        ].map(({ id, label }) => (
          <div
            key={id}
            className="flex justify-between items-center border-b border-gray-200 py-2"
          >
            <div className="flex items-center">
              <input
                type="checkbox"
                id={id}
                name={id}
                checked={filters[id]}
                onChange={handleCheckboxChange}
                className="mr-2"
              />
              <label htmlFor={id} className="text-gray-800">
                {label}
              </label>
            </div>
            <button
              type="button"
              className={`p-2 text-sm ${
                filters[id]
                  ? "bg-orange-400 text-white"
                  : "bg-gray-200 text-gray-500"
              } rounded`}
              onClick={() => {
                setFilters((prev) => ({
                  ...prev,
                  [id]: !prev[id],
                }));
                onFilterChange({ ...filters, [id]: !filters[id] });
              }}
            >
              {filters[id] ? "New" : "Default"}
            </button>
          </div>
        ))}
      </form>
    </div>
  );
}

export default Filter;