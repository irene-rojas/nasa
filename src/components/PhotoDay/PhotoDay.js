import React from 'react';
import "./PhotoDay.css";

const PhotoDay = (props) => {
    return (
        <div className="photoInfo">

            <h1>NASA Astronomy Picture of the Day</h1>
            <br/>
            {props.date}
            <br/>
            <h3>{props.title}</h3>
            <br/>
            <img src={props.img} alt={props.title} width="300px"/>
            <br/>
            Copyright: {props.copyright}
            <br/>
            <br/>
            {props.explanation}
            <br/>
            <br/>
            <a href="https://apod.nasa.gov/apod/archivepix.html" target="_blank" rel="noopener noreferrer">Archive</a>
        </div>
    )
}



export default PhotoDay;