// App.js
import React, { useEffect, useState } from 'react';
import PlanetDropdown from './components/PlanetDropDown';
import FilteredPlanetTable from './components/FilterPlanetTable';

const App = () => {
  const [planets, setPlanets] = useState([]);
  const [selectedPlanet, setSelectedPlanet] = useState('');

  useEffect(() => {
    const fetchPlanetData = async () => {
      try {
        const response = await fetch('https://swapi.dev/api/planets/?format=json');
        const data = await response.json();
        setPlanets(data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchPlanetData();
  }, []);

  const handlePlanetChange = (event) => {
    setSelectedPlanet(event.target.value);
  };

  return (
    <div>
      <PlanetDropdown
        planets={planets}
        selectedPlanet={selectedPlanet}
        onPlanetChange={handlePlanetChange}
      />

      <FilteredPlanetTable planets={planets} selectedPlanet={selectedPlanet} />
    </div>
  );
};

export default App;
