// src/components/FilterButtons.js
import React, { useState } from "react";

const FilterButtons = ({ onFilterChange }) => {
  const [selectedType, setSelectedType] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);

  const handleTypeClick = (type) => {
    setSelectedType((prevType) => (prevType === type ? null : type));
    onFilterChange(selectedType === type ? null : type, selectedLocation);
  };

  const handleLocationClick = (location) => {
    setSelectedLocation((prevLocation) =>
      prevLocation === location ? null : location
    );
    onFilterChange(
      selectedType,
      selectedLocation === location ? null : location
    );
  };

  const isTypeSelected = (type) => selectedType === type;
  const isLocationSelected = (location) => selectedLocation === location;

  return (
    <div className="flex flex-col space-y-4">
      <div className="flex flex-wrap space-x-2">
        <p className="font-bold mb-2">Type:</p>
        <button
          className={`bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out focus:outline-none focus:shadow-outline transform hover:scale-110 ${
            isTypeSelected("Townhouse") ? "bg-red-700" : ""
          }`}
          onClick={() => handleTypeClick("Townhouse")}
        >
          Townhouse
        </button>
        <button
          className={`bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out focus:outline-none focus:shadow-outline transform hover:scale-110 ${
            isTypeSelected("Apartment") ? "bg-pink-700" : ""
          }`}
          onClick={() => handleTypeClick("Apartment")}
        >
          Apartment
        </button>
      </div>
      <div className="flex flex-wrap space-x-2">
        <p className="font-bold mb-2">Location:</p>
        <button
          className={`bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out focus:outline-none focus:shadow-outline transform hover:scale-110 ${
            isLocationSelected("VIC") ? "bg-pink-700" : ""
          }`}
          onClick={() => handleLocationClick("VIC")}
        >
          VIC
        </button>
        <button
          className={`bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out focus:outline-none focus:shadow-outline transform hover:scale-110 ${
            isLocationSelected("NSW") ? "bg-red-700" : ""
          }`}
          onClick={() => handleLocationClick("NSW")}
        >
          NSW
        </button>
      </div>
    </div>
  );
};

export default FilterButtons;
