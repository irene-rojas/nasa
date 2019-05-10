import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import PhotoDay from "./components/PhotoDay/PhotoDay";

function App() {

    const [photoDay, setPhotoDay] = useState([]);
    const [neo, setNeo] = useState([]);

    // API calls
    useEffect(() => {
        // photo of day
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API}`)
        .then(res => {
            setPhotoDay(res.data);
            console.log(res.data);
        });
        // near-earth objects
        axios.get(`https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=${process.env.REACT_APP_NASA_API}`)
        .then(res => {
            setNeo(res.data);
            console.log(res.data);
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

        {/* only return data for first two array items */}
        {/* .slice(0,2) */}

        

    </div>
  );
}

export default App;
