import React from "react";
import Sidebar from "../screens/Sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faMagnifyingGlass,
  faAdd,
  faFilter,
  faArrowUpWideShort,
  faE,
  faEye,
  faEllipsisVertical,
  faChevronDown,
  faChevronLeft,
  faChevronRight,
  faSortDown,
} from "@fortawesome/free-solid-svg-icons";

function Dashboard() {
  const showSearch = () => {
    const input = document.querySelector('input[type="text"]');
    if (input) {
      input.classList.toggle("hidden");
      input.focus();
    }
    const icon = document.querySelector(".fa-magnifying-glass");
    if (icon) {
      icon.classList.toggle("hidden");
    }
    const bellIcon = document.querySelector(".fa-bell");
    if (bellIcon) {
      bellIcon.classList.toggle("hidden");
    }
    const navbar = document.getElementById("navbar");
    if (navbar) {
      navbar.classList.toggle("w-full");
      navbar.classList.toggle("h-20");
    }
  };
  return (
    <div className="bg-gray-100 h-[4em] w-screen text-black flex">
      <Sidebar />
      <div className="bg-white h-screen w-full text-black flex flex-col">
        <div className="bg-white w-full flex justify-between items-center p-4">
          <h1 className="text-xl p-2 font-bold text-center text-gray-500">
            Overview
          </h1>
          <div className="flex items-center gap-4">
            <input
              type="text"
              placeholder="Search"
              className="hidden border border-gray-800 text-black rounded-4xl p-2 w-80"
            />
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="text-gray-400"
              size="x"
              onClick={showSearch}
            />
            <FontAwesomeIcon icon={faBell} className="text-gray-400" size="x" />
            <span className="text-gray-400">|</span>
            <span className="text-gray-400 font-light text-sm">
              Jacques Kagabo
            </span>
            <img
              src="https://i.pinimg.com/736x/a4/0c/91/a40c9137f94d7fa20fba408c5d871171.jpg"
              className="rounded-full w-[30px] h-[30px]"
            />
          </div>
        </div>
        <div className="justify-center items-center flex flex-col gap-4 p-4 w-full">
          <h2 className="text-xl text-gray-600">New Client</h2>
          <div className="flex items-center justify-between gap-4 bg-white p-2 w-[20em] border-b-2 border-gray-400">
            <input
              className="text-gray-400 font-semibold text-sm outline-none text-left w-[80%]"
              placeholder="Add a new Client"
            />
            <button
              type="button"
              className="text-white  hover:cursor-pointer flex items-center gap-2"
            >
              <FontAwesomeIcon
                icon={faAdd}
                className="text-gray-400 bg-gray-200 rounded-[100%] p-[2px]"
                size="x"
              />
            </button>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-lg w-[98%] m-2  gap-4">
          <div className="flex justify-between items-center">
            <h1 className="text-black font-bold">All Clients</h1>
            <div className="flex items-center gap-2">
              <FontAwesomeIcon
                icon={faArrowUpWideShort}
                className="text-gray-400"
                size="x"
              />
              <span className="text-gray-400 font-semibold text-sm">Sort</span>
              <FontAwesomeIcon
                icon={faFilter}
                className="text-gray-400"
                size="x"
              />
              <span className="text-gray-400 font-semibold text-sm">
                Filter
              </span>
            </div>
          </div>
          <div className="overflow-x-auto mt-10">
            <table className="w-full table-auto text-center">
              <thead className="text-gray-200 border-b-2 border-gray-400">
                <tr className="text-center text-gray-500">
                  <th className="p-2 text-sm">Client details</th>
                  <th className="p-2 text-sm">Sales</th>
                  <th className="p-2 text-sm">Detailed report</th>
                  <th className="p-2 text-sm">Category</th>
                  <th className="p-2 text-sm"></th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b-2 border-gray-400 hover:bg-gray-200 hover:cursor-pointer transition-all duration-300 ease-in-out">
                  <td className="p-2 text-sm">
                    <div className="flex flex-col gap-1">
                      <span className="font-bold text-sm">Soy Restaurant</span>
                      <span className="text-gray-400 text-[10px]">
                        Updated 1 day ago
                      </span>
                    </div>
                  </td>
                  <td className="p-2 text-sm">
                    <div className="flex flex-col gap-1">
                      <span className="font-bold text-sm">2345678 Frw</span>
                      <span className="text-gray-400 text-[10px]">
                        on 24/05/2025
                      </span>
                    </div>
                  </td>
                  <td className="text-sm ">
                    <button className="text-center">
                      <FontAwesomeIcon
                        icon={faEye}
                        className="text-orange-400"
                      />
                    </button>
                  </td>
                  <td className="p-2 text-sm">
                    <button className="bg-gray-400 text-white rounded-lg hover:bg-gray-500 hover:cursor-pointer">
                      Resto
                    </button>
                  </td>
                  <td>
                    <button className="text-center">
                      <FontAwesomeIcon
                        icon={faEllipsisVertical}
                        className="text-gray-400"
                      />
                    </button>
                  </td>
                </tr>
                <tr className="border-b-2 border-gray-400 hover:bg-gray-200 hover:cursor-pointer transition-all duration-300 ease-in-out">
                  <td className="p-2 text-sm">
                    <div className="flex flex-col gap-1">
                      <span className="font-bold text-sm">Soy Restaurant</span>
                      <span className="text-gray-400 text-[10px]">
                        Updated 1 day ago
                      </span>
                    </div>
                  </td>
                  <td className="p-2 text-sm">
                    <div className="flex flex-col gap-1">
                      <span className="font-bold text-sm">2345678 Frw</span>
                      <span className="text-gray-400 text-[10px]">
                        on 24/05/2025
                      </span>
                    </div>
                  </td>
                  <td className="text-sm ">
                    <button className="text-center">
                      <FontAwesomeIcon
                        icon={faEye}
                        className="text-orange-400"
                      />
                    </button>
                  </td>
                  <td className="p-2 text-sm">
                    <button className="bg-gray-400 text-white rounded-lg hover:bg-gray-500 hover:cursor-pointer">
                      Resto
                    </button>
                  </td>
                  <td>
                    <button className="text-center">
                      <FontAwesomeIcon
                        icon={faEllipsisVertical}
                        className="text-gray-400"
                      />
                    </button>
                  </td>
                </tr>
                <tr className="border-b-2 border-gray-400 hover:bg-gray-200 hover:cursor-pointer transition-all duration-300 ease-in-out">
                  <td className="p-2 text-sm">
                    <div className="flex flex-col gap-1">
                      <span className="font-bold text-sm">Soy Restaurant</span>
                      <span className="text-gray-400 text-[10px]">
                        Updated 1 day ago
                      </span>
                    </div>
                  </td>
                  <td className="p-2 text-sm">
                    <div className="flex flex-col gap-1">
                      <span className="font-bold text-sm">2345678 Frw</span>
                      <span className="text-gray-400 text-[10px]">
                        on 24/05/2025
                      </span>
                    </div>
                  </td>
                  <td className="text-sm ">
                    <button className="text-center">
                      <FontAwesomeIcon
                        icon={faEye}
                        className="text-orange-400"
                      />
                    </button>
                  </td>
                  <td className="p-2 text-sm">
                    <button className="bg-gray-400 text-white rounded-lg hover:bg-gray-500 hover:cursor-pointer">
                      Resto
                    </button>
                  </td>
                  <td>
                    <button className="text-center">
                      <FontAwesomeIcon
                        icon={faEllipsisVertical}
                        className="text-gray-400"
                      />
                    </button>
                  </td>
                </tr>
                <tr className="border-b-2 border-gray-400 hover:bg-gray-200 hover:cursor-pointer transition-all duration-300 ease-in-out">
                  <td className="p-2 text-sm">
                    <div className="flex flex-col gap-1">
                      <span className="font-bold text-sm">Soy Restaurant</span>
                      <span className="text-gray-400 text-[10px]">
                        Updated 1 day ago
                      </span>
                    </div>
                  </td>
                  <td className="p-2 text-sm">
                    <div className="flex flex-col gap-1">
                      <span className="font-bold text-sm">2345678 Frw</span>
                      <span className="text-gray-400 text-[10px]">
                        on 24/05/2025
                      </span>
                    </div>
                  </td>
                  <td className="text-sm ">
                    <button className="text-center">
                      <FontAwesomeIcon
                        icon={faEye}
                        className="text-orange-400"
                      />
                    </button>
                  </td>
                  <td className="p-2 text-sm">
                    <button className="bg-gray-400 text-white rounded-lg hover:bg-gray-500 hover:cursor-pointer">
                      Resto
                    </button>
                  </td>
                  <td>
                    <button className="text-center">
                      <FontAwesomeIcon
                        icon={faEllipsisVertical}
                        className="text-gray-400"
                      />
                    </button>
                  </td>
                </tr>
                <tr className="border-b-2 border-gray-400 hover:bg-gray-200 hover:cursor-pointer transition-all duration-300 ease-in-out">
                  <td className="p-2 text-sm">
                    <div className="flex flex-col gap-1">
                      <span className="font-bold text-sm">Soy Restaurant</span>
                      <span className="text-gray-400 text-[10px]">
                        Updated 1 day ago
                      </span>
                    </div>
                  </td>
                  <td className="p-2 text-sm">
                    <div className="flex flex-col gap-1">
                      <span className="font-bold text-sm">2345678 Frw</span>
                      <span className="text-gray-400 text-[10px]">
                        on 24/05/2025
                      </span>
                    </div>
                  </td>
                  <td className="text-sm ">
                    <button className="text-center">
                      <FontAwesomeIcon
                        icon={faEye}
                        className="text-orange-400"
                      />
                    </button>
                  </td>
                  <td className="p-2 text-sm">
                    <button className="bg-gray-400 text-white rounded-lg hover:bg-gray-500 hover:cursor-pointer">
                      Resto
                    </button>
                  </td>
                  <td>
                    <button className="text-center">
                      <FontAwesomeIcon
                        icon={faEllipsisVertical}
                        className="text-gray-400"
                      />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex justify-between items-center bg-white w-[98%] mx-4">
          <span className="text-gray-400 font-semibold text-sm flex items-center justify-between gap-2">
            Rows per page: 6 <FontAwesomeIcon icon={faSortDown} className="mb-2" />
          </span>
          <span className="text-gray-400 font-semibold text-sm">
            1-6 of 100
          </span>
          <div className="flex items-center gap-2">
            <button className="text-gray-400 rounded-lg hover:bg-gray-500 hover:cursor-pointer p-2 px-4">
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <button className="text-gray-400 rounded-lg hover:bg-gray-500 hover:cursor-pointer p-2 px-4">
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
