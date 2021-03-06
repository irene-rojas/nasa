import React from 'react';
import "./Mars.css";

const Mars = (props) => {
    return (

        <figure className="marsInfo">
            <img className="marsPhoto" src={props.img} alt={props.id}/>
            <br/>
            Rover: {props.rover}
            <br/>
            Taken: {props.date}
            <br/>
            Sol: {props.sol}
            <br/>
            Camera: {props.camera}
        </figure>

    )
}


export default Mars;