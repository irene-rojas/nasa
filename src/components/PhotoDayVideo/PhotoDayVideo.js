import React from 'react';
import "./PhotoDayVideo.css";

const PhotoDayVideo = (props) => {
    return (

        <div className="photoInfo">
            <h1 className="photoTitle">Astronomy Picture of the Day</h1>
            Date: {props.date}
            <br/>
            <h3>{props.title}</h3>
            <br/>
            <iframe src={props.video}
                frameBorder='0'
                allow='encrypted-media'
                allowFullScreen
                title='video'
            />
            <br/>
            Copyright: {props.copyright}
            <br/>
            <br/>
            {props.explanation}
            <br/>
            <br/>
            <a href="https://apod.nasa.gov/apod/astropix.html" target="_blank" rel="noopener noreferrer">Official NASA APOD Page</a>
            <br/>
            <a href="https://apod.nasa.gov/apod/archivepix.html" target="_blank" rel="noopener noreferrer">Archive</a>
        </div>
        
    )
}

export default PhotoDayVideo;