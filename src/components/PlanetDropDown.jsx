// PlanetDropdown.js
import React from 'react';
import './planetdropdown.css'

const PlanetDropdown = ({ planets, selectedPlanet, onPlanetChange }) => (
  <div className='planet'>
    <label htmlFor="planetSelect">Select a planet:</label>
    <select id="planetSelect" value={selectedPlanet} onChange={onPlanetChange}>
      <option value="">All Planets</option>
      {planets.map((planet, index) => (
        <option key={index} value={planet.name}>{planet.name}</option>
      ))}
    </select>
  </div>
);

export default PlanetDropdown;
