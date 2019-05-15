import React from 'react';
import "./ImageSearch.css";

const ImageSearch = (props) => {
    return (

        <div className="imageResultsDiv">
            Title: <strong>{props.title}</strong>
            <br/>
            <a href={props.src} target="_blank" rel="noopener noreferrer"><img src={props.src} alt={props.title} width="300px"/></a>
            <br/>
            Description: {props.description}
            <br/>
            Date created: {props.date}
            <br/>
            NASA ID: {props.id}

        </div>

    )
}

export default ImageSearch;