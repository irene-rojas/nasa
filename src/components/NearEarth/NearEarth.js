import React from 'react';

const NearEarth = (props) => {
    return (
        <div className="nearEarthInfo">

            <h3>Name: {props.name}</h3>
            <br/>
            Absolute magnitude: {props.magnitude}
            <br/>
            Hazardous: {props.hazardous}
            <br/>
            JPL URL: {props.jplUrl}
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