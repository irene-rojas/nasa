import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import PhotoDay from "./components/PhotoDay/PhotoDay";
import NearEarth from "./components/NearEarth/NearEarth";

function App() {

    const [photoDay, setPhotoDay] = useState([]);
    const [neo, setNeo] = useState([]);

    // API calls
    useEffect(() => {
        // photo of day
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API}`)
        .then(res => {
            setPhotoDay(res.data);
            // console.log(res.data);
        });
        // near-earth objects
        axios.get(`https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=${process.env.REACT_APP_NASA_API}`)
        .then(res => {
            // only save first two items in array
            setNeo(res.data.near_earth_objects.slice(0,2));
            console.log(res.data.near_earth_objects.slice(0,2));
            // endpoint testing
            console.log(res.data.near_earth_objects[0].is_potentially_hazardous_asteroid);
        });
        // [] tells it to run just once
    }, []);


  return (
    <div className="App">

        <h1>Visual interpretations of NASA Open APIs</h1>

        {/* <PhotoDay 
            copyright={photoDay.copyright}
            date={photoDay.date}
            explanation={photoDay.explanation}
            img={photoDay.hdurl}
            title={photoDay.title}
        /> */}

        {neo.map((object, index) => {
            return (
                <NearEarth 
                    key={index}
                    name={object.name}
                    magnitude={object.absolute_magnitude_h}
                    hazardous={object.is_potentially_hazardous_asteroid}
                    jplUrl={object.nasa_jpl_url}
                    diameterMilesMax={object.estimated_diameter.miles.estimated_diameter_max}
                    diameterMilesMin={object.estimated_diameter.miles.estimated_diameter_min}
                    diameterKiloMax={object.estimated_diameter.kilometers.estimated_diameter_max}
                    diameterKiloMin={object.estimated_diameter.kilometers.estimated_diameter_min}
                    firstDate={object.orbital_data.first_observation_date}
                    lastDate={object.orbital_data.last_observation_date}
                />
            )
        })}
        

    </div>
  );
}

export default App;
