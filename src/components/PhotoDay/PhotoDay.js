import React from 'react';
import "./PhotoDay.css";

const PhotoDay = (props) => {
    return (
        <div className="photoInfo">

            <h1>Irene Astronomy Picture of the Day</h1>
            <br/>
            Date: {props.date}
            <br/>
            <h3>{props.title}</h3>
            <br/>
            <a href={props.img}><img src={props.img} alt={props.title} width="500px"/></a>
            <br/>
            Copyright: {props.copyright}
            <br/>
            <br/>
            {props.explanation}
            <br/>
            <br/>
            <a href="https://apod.nasa.gov/apod/astropix.html">Office NASA APOD Page</a>
            <br/>
            <a href="https://apod.nasa.gov/apod/archivepix.html" target="_blank" rel="noopener noreferrer">Archive</a>
        </div>
    )
}



export default PhotoDay;