import React from 'react';
import "./PhotoDayVideo.css";

const PhotoDayVideo = (props) => {
    return (

        <figure className="videoInfo">
            <br/>
            <iframe src={props.video}
                frameBorder='0'
                allow='encrypted-media'
                allowFullScreen
                title='video'
            />
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

export default PhotoDayVideo;