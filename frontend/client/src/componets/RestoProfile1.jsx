import React, { useState } from "react";
import Navbar from "./Navbar";
import RestoProfile from "./RestoProfile";
import RestoProfile2 from "./RestoProfile2";
import RestoProfile3 from "./RestoProfile3";

function RestoProfile1() {
  const [form, setForm] = useState("one");

  const steps = [
    {
      id: "one",
      title: "Restaurant information",
      description: "Restaurant name, address, details, owner details",
    },
    {
      id: "two",
      title: "Restaurant type & Timings",
      description: "Establishments & cuisine type, opening hours",
    },
    {
      id: "three",
      title: "Create menu",
      description: "Menu restaurant, food images",
    },
  ];

  // Render the correct form component based on current step
  const renderFormComponent = () => {
    switch (form) {
      case "one":
        return <RestoProfile/>;
      case "two":
        return <RestoProfile2/>;
      case "three":
        return <RestoProfile3 />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen w-screen text-black">
      <Navbar />
      <div className="p-4 flex gap-4 bg-gray-50">
        {/* Sidebar Navigation */}
        <div className="flex flex-col gap-4 bg-white p-4 text-center rounded-lg shadow-lg w-[400px]">
          <h2 className="text-black font-bold text-center p-2">
            1. Create your restaurant profile
          </h2>

          {steps.map((step, index) => (
            <div
              key={step.id}
              onClick={() => setForm(step.id)}
              className={`flex flex-col justify-between hover:cursor-pointer p-4 transition duration-300 ease-in-out 
                ${form === step.id ? "border-l-4 border-orange-400 bg-orange-50" : "hover:border-l-2 hover:border-orange-400"}
              `}
            >
              <p className="flex items-center gap-2 font-semibold text-md">
                <span className={`rounded-full w-[30px] h-[30px] flex items-center justify-center text-white ${form === step.id ? "bg-orange-400" : "bg-gray-400"}`}>
                  {index + 1}
                </span>
                <h2 className="text-gray-800 font-semibold">{step.title}</h2>
              </p>
              <p className="px-10">
                <span className="text-gray-400 text-sm">{step.description}</span>
              </p>
            </div>
          ))}
        </div>

        {/* Main Form Area */}
        <div className="flex-1">
          {renderFormComponent()}
        </div>
      </div>
    </div>
  );
}

export default RestoProfile1;
