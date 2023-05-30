import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchTerm } from '../actions';
import RocketBox from './RocketBox';
import falcon from '../images/falcon1.png';
import falcon9 from '../images/falcon 9.png';
import falconheavy from '../images/falcon-heavy.png';
import starship from '../images/starship.png';

function Rocket() {
  const dispatch = useDispatch();
  const { data, filteredData, searchTerm } = useSelector((state) => state);

  useEffect(() => {
    // Fetch data from SpaceX API and update the state
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost/spacex-api.php');
        const jsonData = await response.json();
        dispatch({ type: 'SET_DATA', payload: jsonData });
      } catch (error) {
        console.error('Error fetching SpaceX data:', error);
      }
    };

    fetchData();
  }, [dispatch]);

  const handleSearch = (e) => {
    const value = e.target.value;
    dispatch(setSearchTerm(value));

    const filteredResults = data.filter((rocket) =>
      rocket.rocket_name.toLowerCase().includes(value.toLowerCase())
    );
    dispatch({ type: 'SET_FILTERED_DATA', payload: filteredResults });
  };

  // Check if data is empty or null before rendering
  if (!data || data.length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <div id="features">
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search by rocket name"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <div className="a-container">
        {filteredData.map((rocket) => (
          <RocketBox
            key={rocket.rocket_id}
            image={getImageByRocketId(rocket.rocket_id)}
            title={rocket.rocket_name}
            desc={rocket.description}
            country = {rocket.country}
            firstflight = {rocket.first_flight}
          />
        ))}
      </div>
    </div>
  );
}

function getImageByRocketId(rocketId) {
  switch (rocketId) {
    case 'falcon1':
      return falcon;
    case 'falcon9':
      return falcon9;
    case 'falconheavy':
      return falconheavy;
    case 'starship':
      return starship;
    default:
      return null;
  }
}

export default Rocket;
