import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import PhotoDay from "./components/PhotoDay/PhotoDay";
import NearEarth from "./components/NearEarth/NearEarth";
// import ImageSearch from "./components/ImageSearch/ImageSearch";

function App() {

    // photo of day
    const [photoDay, setPhotoDay] = useState([]);
    // near earth objects
    const [neo, setNeo] = useState([]);
    // image search
    const [query, setQuery] = useState("");
    const [data, setData] = useState([
        {
            "id": "",
            "title": "",
            "date": "",
            "description": "",
            "src": ""
        }
    ]);

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
            // only save first 3 items in array
            setNeo(res.data.near_earth_objects.slice(0,3));
            console.log(res.data.near_earth_objects.slice(0,3));
        });
    }, []);
    // [] tells it to run just once

    const imageSearch = () => {
        axios.get(`https://images-api.nasa.gov/search?q=${query}`)
        .then(res => {
            setData(transformImgSearch(res.data.collection.items.slice(0,6)));
            console.log(res.data.collection.items.slice(0,6));
            // endpoint testing
            // console.log(res.data.collection.items[0].links[0].href);
        });
    };

    // filter image results to remove no photos
    function transformImgSearch(props) {
        props.filter(prop => 
            prop.links !== null).map(prop => 
                [
                    {
                        "id": prop.data[0].nasa_id,
                        "title": prop.data[0].title,
                        "date": prop.data[0].date_created,
                        "description": prop.data[0].description,
                        "src": prop.links[0].href
                    }
                ]);
            console.log(data);
    }


  return (
    <div className="App">

        <div className="header">
            <h1>Exploring the NASA Open API Universe</h1>
        </div>

        <div className="photoDayDiv">
            <PhotoDay 
                copyright={photoDay.copyright}
                date={photoDay.date}
                explanation={photoDay.explanation}
                img={photoDay.hdurl}
                title={photoDay.title}
            />
        </div>

        <div className="nearEarthDiv">
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
        </div>

        <div className="imageSearchDiv">
            <h1 className="searchTitle">Search the NASA Image Archive</h1>

            <form onSubmit={event => {
                event.preventDefault();
                imageSearch();}}>
                <input 
                    value={query}
                    onChange={event => {
                        event.preventDefault();
                        setQuery(event.target.value);
                        }}
                /> 
                <button>Search</button>
            </form>

            {/* {data.map(image => {
                return (
                    <ImageSearch 
                        key={image.id}
                        title={image.title}
                        date={image.date}
                        description={image.description}
                        id={image.id}
                        src={image.href}
                    />
                )
            })} */}

        </div>

    </div>
  );
}

export default App;
