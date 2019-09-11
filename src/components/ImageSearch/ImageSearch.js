import React from 'react';
import "./ImageSearch.css";

const ImageSearch = (props) => {
    return (

        <figure className="imageResultsDiv">
            <strong>{props.title}</strong>
            <br/>
            <br/>
            <a href={props.src} target="_blank" rel="noopener noreferrer"><img src={props.src} alt={props.title} className="image"/></a>
            <br/>
            Description: {props.description}
            <br/>
            Date created: {props.date}
            <br/>
            NASA ID: {props.id}
        </figure>

    )
}

export default ImageSearch;