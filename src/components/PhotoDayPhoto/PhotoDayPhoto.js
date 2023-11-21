import React from 'react';
import "./PhotoDayPhoto.css";

const PhotoDayPhoto = (props) => {
    return (

        <figure className="photoInfo">
            <br/>
            <a href={props.img} target="_blank" rel="noopener noreferrer">
                <img className="apodImg" src={props.img} alt={props.title}/>
            </a>
            <br/>
            <h3>{props.title}</h3>
            Date: {props.date}
            <br/>
            <br/>
            {props.explanation}
            <br/>
            <br/>
            Copyright: {props.copyright}
            <br/>
            <br/>
            <a href="https://apod.nasa.gov/apod/astropix.html" target="_blank" rel="noopener noreferrer">Official NASA APOD Page</a>
            <br/>
            <a href="https://apod.nasa.gov/apod/archivepix.html" target="_blank" rel="noopener noreferrer">Archive</a>
        </figure>
        
    )
}

export default PhotoDayPhoto;