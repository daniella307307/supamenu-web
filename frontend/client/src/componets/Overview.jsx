import React, { useState, useRef, useEffect } from "react";
import Sidebar from "../screens/Sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Chart from "../screens/Chart";

function Overview() {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState(""); // Add search state
  const searchInputRef = useRef(null);

  const toggleSearch = () => {
    setIsSearchVisible((prev) => !prev);
    if (isSearchVisible) setSearchQuery(""); // Clear search when hiding
  };

  useEffect(() => {
    if (isSearchVisible && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchVisible]);

  // Mock dynamic data (replace with API call)
  const metrics = {
    clients: 60,
    revenues: 38234000,
    orders: 67569,
    items: 54567,
    ordersPerHour: 4560,
  };

  // Dynamic date
  const currentDate = new Date().toLocaleString("en-US", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  return (
    <div className="h-screen w-screen flex overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col gap-4 p-4">
        <div
          id="navbar"
          className={`bg-white flex justify-between items-center p-4 transition-all duration-300 ${
            isSearchVisible ? "h-20" : "h-16"
          }`}
        >
          <h1 className="text-xl font-bold text-gray-500">Overview</h1>
          <div className="flex gap-4 items-center">
            <input
              ref={searchInputRef}
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)} // Handle search input
              className={`border border-gray-800 text-black rounded-full p-2 w-full max-w-[20rem] transition-opacity duration-300 ${
                isSearchVisible ? "opacity-100" : "opacity-0 hidden"
              }`}
              aria-label="Search"
            />
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className={`text-gray-400 cursor-pointer ${
                isSearchVisible ? "hidden" : ""
              }`}
              size="sm"
              onClick={toggleSearch}
              aria-label="Toggle search"
            />
            <FontAwesomeIcon
              icon={faBell}
              className={`text-gray-400 ${isSearchVisible ? "hidden" : ""}`}
              size="sm"
              aria-label="Notifications"
            />
            <span className="text-gray-400">|</span>
            <span className="text-gray-400 font-light text-sm">
              Jacques Kagabo
            </span>
            <img
              src="https://i.pinimg.com/736x/a4/0c/91/a40c9137f94d7fa20fba408c5d871171.jpg"
              alt="User profile picture"
              className="rounded-full w-[30px] h-[30px]"
            />
          </div>
        </div>
        <div className="flex-1 overflow-auto">
          <div className="flex flex-wrap gap-4">
            {[
              { label: "Clients", value: metrics.clients },
              { label: "Revenues (FRW)", value: metrics.revenues.toLocaleString() },
              { label: "Orders", value: metrics.orders.toLocaleString() },
            ].map(({ label, value }) => (
              <div
                key={label}
                className="flex flex-col items-center justify-center border-orange-400 w-[10rem] max-h-[8rem] shadow-lg border-2 rounded-lg p-4"
              >
                <span className="text-gray-400 text-lg font-semibold">
                  {label}
                </span>
                <span className="text-gray-800 text-lg font-semibold">
                  {value}
                </span>
              </div>
            ))}
          </div>
          <div className="bg-white border-gray-200 border-2 shadow-lg rounded-lg w-full min-h-[300px] mt-4">
            <div className="flex flex-col md:flex-row">
              <div className="p-4 flex-1">
                <h1 className="text-gray-800 font-bold">Today's trends</h1>
                <span className="text-gray-400 text-xs">
                  as of {currentDate}
                </span>
                <Chart />
              </div>
              <div className="flex flex-col justify-between gap-4 border-l border-gray-400 p-4">
                {[
                  { label: "Orders", value: metrics.orders.toLocaleString() },
                  { label: "Items", value: metrics.items.toLocaleString() },
                  { label: "Order/hour", value: metrics.ordersPerHour.toLocaleString() },
                  { label: "Clients", value: metrics.clients },
                ].map(({ label, value }, index) => (
                  <div key={label} className="flex flex-col items-center">
                    <span className="text-gray-800 font-bold">{label}</span>
                    <span className="text-gray-500">{value}</span>
                    {index < 3 && <div className="w-full h-px bg-gray-400 my-2" />}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Overview;