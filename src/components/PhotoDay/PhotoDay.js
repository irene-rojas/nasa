import React from 'react';
import "./PhotoDay.css";

const PhotoDay = (props) => {
    return (
        <div className="photoInfo">

            <h1 className="photoTitle">Astronomy Picture of the Day</h1>
            Date: {props.date}
            <br/>
            <h3>{props.title}</h3>
            <br/>
            <a href={props.img} target="_blank" rel="noopener noreferrer"><img src={props.img} alt={props.title}/></a>
            <br/>
            Copyright: {props.copyright}
            <br/>
            <br/>
            {props.explanation}
            <br/>
            <br/>
            <a href="https://apod.nasa.gov/apod/astropix.html" target="_blank" rel="noopener noreferrer">Office NASA APOD Page</a>
            <br/>
            <a href="https://apod.nasa.gov/apod/archivepix.html" target="_blank" rel="noopener noreferrer">Archive</a>
        </div>
    )
}

export default PhotoDay;