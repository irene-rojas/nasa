import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import PhotoDay from "./components/PhotoDay/PhotoDay";

function App() {

    const [photoDay, setPhotoDay] = useState([]);
    const [neo, setNeo] = useState([]);

    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API}`)
        .then(res => {
            setPhotoDay(res.data);
            // console.log(res.data);
        });
    }, []);

    useEffect(() => {
        axios.get(`https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=${process.env.REACT_APP_NASA_API}`)
            .then(res => {
                setNeo(res.data);
                console.log(res.data);
            })
    }, []);


  return (
    <div className="App">

        {/* <PhotoDay 
            copyright={photoDay.copyright}
            date={photoDay.date}
            explanation={photoDay.explanation}
            img={photoDay.hdurl}
            title={photoDay.title}
            /> */}

    </div>
  );
}

export default App;
