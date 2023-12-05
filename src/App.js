// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import FilterButtons from './Components/FilterButtons';
import PropertyList from './Components/PropertyList';
import ImageUpload from './Components/ImageUpload';

const App = () => {
  const [properties, setProperties] = useState([
    { id: 1, name: 'Property 1', type: 'Townhouse', location: 'VIC', description: 'Lorem ipsum...' },
    { id: 2, name: 'Property 2', type: 'Apartment', location: 'NSW', description: 'Lorem ipsum...' },
    // Add more properties as needed
  ]);

  const [selectedType, setSelectedType] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);

  const handleFilterChange = (type, location) => {
    setSelectedType(type);
    setSelectedLocation(location);
  };

  return (
    <Router>
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-8">Property App</h1>
        <Routes>
          <Route path="/" element={<Home properties={properties} selectedType={selectedType} selectedLocation={selectedLocation} handleFilterChange={handleFilterChange} />} />
          <Route path="/property/:id" element={<PropertyDetails properties={properties} />} />
          <Route path="/upload" element={<ImageUpload />} />
        </Routes>
      </div>
    </Router>
  );
};

const Home = ({ properties, selectedType, selectedLocation, handleFilterChange }) => (
  <>
    <FilterButtons onFilterChange={handleFilterChange} selectedType={selectedType} selectedLocation={selectedLocation} />
    <PropertyList properties={properties} selectedType={selectedType} selectedLocation={selectedLocation} />
  </>
);

const PropertyDetails = ({ properties }) => (
  <div>
    {properties.map(property => (
      <div key={property.id}>
        <h2 className="text-2xl font-bold mb-4">{property.name}</h2>
        <p>{property.description}</p>
        <Link to="/">Back to Properties</Link>
      </div>
    ))}
  </div>
);

export default App;
