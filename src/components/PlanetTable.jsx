// PlanetTable.js
import React from "react";
import "./planettable.css";

const PlanetTable = ({ planets }) => (
  <div className="front">
    <div className="planet-table">
      {planets.map((planet, index) => (
        <div key={index} className="planet-card">
          <h2>{planet.name}</h2>
          <p>
            <strong>Climate:</strong> {planet.climate}
          </p>
          <p>
            <strong>Population:</strong> {planet.population}
          </p>
          <p>
            <strong>Terrain:</strong> {planet.terrain}
          </p>
        </div>
      ))}
    </div>
  </div>
);

export default PlanetTable;
