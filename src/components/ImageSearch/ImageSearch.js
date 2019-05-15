import React from 'react';
import "./ImageSearch.css";

const ImageSearch = (props) => {
    return (

        <div className="imageResultsDiv">
            Title: {props.title}
            <br/>
            <a href={props.src} target="_blank" rel="noopener noreferrer"><img src={props.src} alt={props.title} width="300px"/></a>
            <br/>
            Description: {props.description}
            <br/>
            Date created: {props.date}

        </div>

    )
}

export default ImageSearch;