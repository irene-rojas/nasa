import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
// import PhotoDay from "./components/PhotoDay/PhotoDay";
// import NearEarth from "./components/NearEarth/NearEarth";

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
            setNeo(res.data.near_earth_objects.slice(0,3));
            console.log(res.data.near_earth_objects.slice(0,3));
            // endpoint testing
            console.log(res.data.near_earth_objects[0].is_potentially_hazardous_asteroid);
        });
    }, []);
    // [] tells it to run just once


  return (
    <div className="App">

        <div className="header">
            <h1>Exploring the NASA Open API Universe</h1>
        </div>

        {/* <div className="photoDayDiv">
            <PhotoDay 
                copyright={photoDay.copyright}
                date={photoDay.date}
                explanation={photoDay.explanation}
                img={photoDay.hdurl}
                title={photoDay.title}
            />
        </div> */}

        <br/>
        {/* in NearEarth, also works: hazardous={object.is_potentially_hazardous_asteroid ? "true" : "false"} */}
        <br/>

        {/* <div className="nearEarthDiv">
            <h1 className="neoTitle">Near-Earth Objects</h1>
            {neo.map((object, index) => {
                return (
                    <div className={`neoDiv${index}`} key={object.designation}>
                        <NearEarth 
                            key={object.designation}
                            name={object.name}
                            magnitude={object.absolute_magnitude_h}
                            hazardous={object.is_potentially_hazardous_asteroid.toString().toUpperCase()}
                            jplUrl={object.nasa_jpl_url}
                            diameterMilesMax={object.estimated_diameter.miles.estimated_diameter_max}
                            diameterMilesMin={object.estimated_diameter.miles.estimated_diameter_min}
                            diameterKiloMax={object.estimated_diameter.kilometers.estimated_diameter_max}
                            diameterKiloMin={object.estimated_diameter.kilometers.estimated_diameter_min}
                            firstDate={object.orbital_data.first_observation_date}
                            lastDate={object.orbital_data.last_observation_date}
                        />
                    </div>
                )
            })}
        </div> */}

    </div>
  );
}

export default App;
