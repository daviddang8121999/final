// src/components/PropertyList.js
import React from "react";

const PropertyList = ({ properties = [], selectedType, selectedLocation }) => {
  // Filter properties based on selectedType and selectedLocation
  const filteredProperties = properties.filter((property) => {
    if (selectedType && property.type !== selectedType) {
      return false;
    }
    if (selectedLocation && property.location !== selectedLocation) {
      return false;
    }
    return true;
  });

  // If no filters applied, show all properties
  const displayProperties =
    selectedType || selectedLocation ? filteredProperties : properties;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Filtered Properties</h2>
      <ul>
        {displayProperties.map((property) => (
          <li key={property.id}>
            <strong>{property.name}</strong> - {property.type} -{" "}
            {property.location}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PropertyList;
