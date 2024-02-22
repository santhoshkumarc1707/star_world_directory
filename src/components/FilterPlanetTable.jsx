// FilteredPlanetTable.js
import React from 'react';
import PlanetTable from './PlanetTable'

const FilteredPlanetTable = ({ planets, selectedPlanet }) => {
  const filteredPlanets = selectedPlanet
    ? planets.filter(planet => planet.name === selectedPlanet)
    : planets;

  return <PlanetTable planets={filteredPlanets} />;
};

export default FilteredPlanetTable;
