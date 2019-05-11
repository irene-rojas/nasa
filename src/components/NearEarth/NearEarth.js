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
            JPL URL: <a href={props.jplUrl}>{props.jplUrl}</a>
            <br/>
            Estimated diameter (max): {props.diameterMilesMax} miles
            <br/>
            Estimated diameter (min): {props.diameterMilesMin} miles 
            <br/>
            Estimated diameter (max): {props.diameterKiloMax} kilometers
            <br/>
            Estimated diameter (min): {props.diameterKiloMin} kilometers
            <br/>
            First observed: {props.firstDate}
            <br/>
            Last observed: {props.lastDate}

        </div>
    )
}

export default NearEarth;