import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {

    const [photoDay, setPhotoDay] = useState([]);

    useEffect(() => {
        // this code returns data
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API}`)
        .then(res => {
            const result = res.data;
            console.log(result);
        });
    }, []);

    // useEffect(() => {
    //     const result = axios.get(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API}`);
    //     setPhotoDay(result.data);
    //     console.log(result.data);
    // }, []);


  return (
    <div className="App">

        {/* <div>
            { photoDay }
        </div> */}


    </div>
  );
}

export default App;
