import React from 'react';
import "./NearEarth.css";

const NearEarth = (props) => {
    return (
        <div className="nearEarthInfo">

            <h3>Name: {props.name}</h3>

            Hazardous: {props.hazardous}
            <br/>
            Absolute magnitude: {props.magnitude}
            <br/>
            <br/>
            Estimated diameter (Miles)
            <br/>
            (Max): {props.diameterMilesMax} miles
            <br/>
            (Min): {props.diameterMilesMin} miles 
            <br/>
            <br/>
            Estimated diameter (Kilometers)
            <br/>
            (Max): {props.diameterKiloMax} kilometers
            <br/>
            (Min): {props.diameterKiloMin} kilometers
            <br/>
            <br/>
            First observed: {props.firstDate}
            <br/>
            Last observed: {props.lastDate}
            <br/>
            <br/>
            JPL URL: <a href={props.jplUrl} target="_blank" rel="noopener noreferrer">{props.jplUrl}</a>

        </div>
    )
}

export default NearEarth;