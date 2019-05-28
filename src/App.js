import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import PhotoDayPhoto from "./components/PhotoDayPhoto/PhotoDayPhoto";
import PhotoDayVideo from "./components/PhotoDayVideo/PhotoDayVideo";
import NearEarth from "./components/NearEarth/NearEarth";
import ImageSearch from "./components/ImageSearch/ImageSearch";
import Mars from "./components/Mars/Mars";

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
    // mars photos
    const [marsPhotos, setMarsPhotos] = useState([]);
    const [rover, setRover] = useState("");
    const [sol, setSol] = useState("");
    const [maxSol, setMaxSol] = useState("");
    const [camera, setCamera] = useState("");
    const [marsError, setMarsError] = useState(false);

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
            // console.log(res.data.near_earth_objects.slice(0,3));
        });
    }, []);
    // [] tells it to run just once

    // image search function
    const imageSearch = () => {
        axios.get(`https://images-api.nasa.gov/search?q=${query}`)
        .then(res => {
            setData(transformImgSearch(res.data.collection.items.slice(0,6)));
            // console.log(res.data.collection.items.slice(0,6));
        });
    };

    // filter image search results to remove no photos
    function transformImgSearch(props) {
        return (
        props.filter(prop => 
            prop.links).map(prop => 
                (
                    {
                        "id": prop.data[0].nasa_id,
                        "title": prop.data[0].title,
                        "date": prop.data[0].date_created,
                        "description": prop.data[0].description,
                        "src": prop.links[0].href
                    }
                )
            )
        );
    }

    // mars photos
    const marsSearch = () => {
        axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=${sol}&camera=${camera}&api_key=${process.env.REACT_APP_NASA_API}`)
        .then(res => {
            setMarsPhotos(res.data.photos.slice(0,24));
            // console.log(res.data.photos.slice(0,24));
            if (!marsPhotos.length > 0) {
                setMarsError(true);
            }
        });
    };

    // this needs to run before marsSearch
    function findMaxSol() {
        axios.get(`https://api.nasa.gov/mars-photos/api/v1/manifests/${rover}?&api_key=${process.env.REACT_APP_NASA_API}`)
        .then(res => {
            setMaxSol(res.data.photo_manifest.max_sol);
            // console.log(res.data.photo_manifest.max_sol);
        })
    }


  return (
    <div className="App" id="top">

        <div className="header">
            <h1 className="masterTitle"><a href="#top">Exploring the NASA Open API Universe</a></h1>
            <div className="poweredBy">Powered by <a href="https://api.nasa.gov/index.html" target="_blank" rel="noopener noreferrer">NASA APIs</a></div>
        </div>

        {/* photo of day */}
        <div className="photoDayDiv" id="photoDayDiv">

            {photoDay.media_type === "image" && 
            <PhotoDayPhoto 
                copyright={photoDay.copyright}
                date={photoDay.date}
                explanation={photoDay.explanation}
                img={photoDay.hdurl}
                title={photoDay.title}
            />
            }

            {photoDay.media_type === "video" && 
            <PhotoDayVideo 
                copyright={photoDay.copyright}
                date={photoDay.date}
                explanation={photoDay.explanation}
                video={photoDay.url}
                title={photoDay.title}
            />
            }
        </div>

        {/* near earth objects */}
        <div className="nearEarthDiv" id="nearEarthDiv">
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

        {/* image search */}
        <div className="imageSearchDiv" id="imageSearchDiv">
            <h1 className="searchTitle">Search the NASA Image Archive</h1>

            <form 
                className="imageSearchForm"
                onSubmit={event => {
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
                <br/>
                Returns 6 results if available
            </form>

            {query &&
                data.map(image => {
                return (
                    <ImageSearch 
                        key={image.id}
                        title={image.title}
                        date={image.date}
                        description={image.description}
                        id={image.id}
                        src={image.src}
                    />
                )
            })}

        </div>

        {/* mars search */}
        <div className="marsDiv" id="marsDiv">
            <h1 className="marsTitle">Mars Rover Image Search</h1>

            <div className="marsForm">
                <form 
                    className="selectMarsPhotos"
                    onSubmit={event => {
                        event.preventDefault();
                        marsSearch();}}>

                    <div>
                        <select 
                            className="roverDropdown" 
                            value={rover}
                            onChange={event => {
                                event.preventDefault();
                                setRover(event.target.value);
                                setMaxSol("");
                            }}>
                                <option>Select a rover</option>
                                <option value="curiosity">Curiosity</option>
                                <option value="opportunity">Opportunity</option>
                                <option value="spirit">Spirit</option>
                        </select>
                    </div>

                    {rover === "curiosity" &&
                        <div>
                            <select 
                                className="cameraDropdown" 
                                id="curiosityCameras"
                                value={camera}
                                onChange={event => {
                                    event.preventDefault();
                                    setCamera(event.target.value);
                                    findMaxSol();
                                }}>
                                    <option>Select a camera</option>
                                    <option value="FHAZ">Front Hazard Avoidance Camera</option>
                                    <option value="RHAZ">Rear Hazard Avoidance Camera</option>
                                    <option value="MAST">Mast Camera (Takes time to load)</option>
                                    <option value="CHEMCAM">Chemistry and Camera Complex</option>
                                    <option value="NAVCAM">Navigation Camera</option>
                            </select>
                        </div>
                    }
                    {/* create loading animation for mast camera */}

                    {rover === "opportunity" &&
                        <div>
                            <select 
                                className="cameraDropdown" 
                                id="opportunityCameras"
                                value={camera}
                                onChange={event => {
                                    event.preventDefault();
                                    setCamera(event.target.value);
                                    findMaxSol();
                                }}>
                                    <option>Select a camera</option>
                                    <option value="PANCAM">Panoramic Camera</option>
                                    <option value="NAVCAM">Navigation Camera</option>
                            </select>
                        </div>
                    }

                    {rover === "spirit" &&
                        <div>
                            <select 
                                className="cameraDropdown" 
                                id="spiritCameras"
                                value={camera}
                                onChange={event => {
                                    event.preventDefault();
                                    setCamera(event.target.value);
                                    findMaxSol();
                                }}>
                                    <option>Select a camera</option>
                                    <option value="NAVCAM">Panoramic Camera</option>
                                    <option value="PANCAM">Navigation Camera</option>
                            </select>
                        </div>
                    }

                    {maxSol !== "" && rover &&
                        <div>
                        Enter sol (Mars mission date) between 0 and {maxSol}:
                        <br/>
                        <input 
                            type="text"
                            onChange={event => {
                            event.preventDefault();
                            setSol(event.target.value);
                            }}
                            >
                        </input>
                        <br/>
                        <button>Search</button>

                    </div>
                    }



                </form>

                {marsPhotos.length === 0 && marsError === true && 
                    <div className="noPhotos">No data available for that sol date. Please enter another sol date.</div>
                }

            </div>

            {marsPhotos.map((photo, index) => {
                return (
                        <Mars 
                            className={`mars${index}`}
                            img={photo.img_src}
                            rover={photo.rover.name}
                            key={photo.id}
                            date={photo.earth_date}
                            sol={photo.sol}
                            camera={photo.camera.full_name}
                        />
                    )
                })
            }

        </div>

    </div>
  );
}

export default App;
