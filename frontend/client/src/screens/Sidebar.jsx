import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    fa0,
  faAward,
  faCreditCardAlt,
  faGear,
  faIdBadge,
  faPieChart,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

function Sidebar() {
  return (
    <div className="bg-orange-400 h-screen w-1/4 text-gray-600 flex flex-col">
      {/* Header */}
      <div className="bg-black w-full py-4">
        <h1 className="text-xl font-bold text-orange-400 text-center">
          Supa<span className="text-white">Menu</span>
        </h1>
      </div>

      {/* Menu Items */}
      <div className="flex flex-col gap-4 bg-black">
        <div
          className="flex items-center gap-4 cursor-pointer hover:text-white h-[40px] p-2 w-full hover:border-l-2 hover:border-white transition-all duration-300 ease-in-out"
          tabIndex={0}
          role="button"
        >
          <FontAwesomeIcon icon={faCreditCardAlt} className="text-gray-700 hover:text-white" />
          <span className="text-sm font-semibold">Overview</span>
        </div>

        <div
          className="flex items-center gap-4 cursor-pointer hover:text-white h-[40px] p-2 w-full hover:border-l-2 hover:border-white transition-all duration-300 ease-in-out"
          tabIndex={0}
          role="button"
        >
          <FontAwesomeIcon icon={faPieChart} className="text-gray-700 hover:text-white" />
          <span className="text-sm font-semibold">Clients</span>
        </div>

        <div
          className="flex items-center gap-4 cursor-pointer hover:text-white h-[40px] p-2 w-full hover:border-l-2 hover:border-white transition-all duration-300 ease-in-out"
          tabIndex={0}
          role="button"
        >
          <FontAwesomeIcon icon={faUsers} className="text-gray-700 hover:text-white" />
          <span className="text-sm font-semibold">Users</span>
        </div>
      </div>
      <div className="h-[17em] w-full bg-black flex items-center justify-center" />
      <div
        className="flex items-center gap-4 bg-black cursor-pointer hover:text-white h-[40px] p-2 w-full hover:border-l-2 hover:border-white transition-all duration-300 ease-in-out"
        tabIndex={0}
        role="button"
      >
        <FontAwesomeIcon icon={faGear} className="text-gray-700 hover:text-white" />
        <span className="text-sm font-semibold">Settings</span>
      </div>
      <div
        className="flex items-center gap-4 bg-black cursor-pointer hover:text-white h-[40px] p-2 w-full hover:border-l-2 hover:border-white transition-all duration-300 ease-in-out"
        tabIndex={0}
        role="button"
      >
        <FontAwesomeIcon icon={faAward} className="text-gray-700 hover:text-white" />
        <span className="text-sm font-semibold">My Account</span>
      </div>
    </div>
  );
}

export default Sidebar;
