import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import Button from 'react-bootstrap/Button';

const Player = (props) => {
    const {image, name, role, salary, country}=props.player;
    const handleAddPlayer=props.handleAddPlayer;
    const playerStyle = { margin:'10px', padding:'5px'}
    const imgStyle ={height:'150px'}
    return (
        <div style={playerStyle}>
            <img style={imgStyle} src={image} alt=""/>
            <h2>Name: {name}</h2>
            <h3>Country: {country}</h3>
            <p>Role: {role}</p>
            <p>Salary: ${salary}</p>
            <Button variant="success" onClick={()=>handleAddPlayer(props.player)}><FontAwesomeIcon icon={faUser} /> Add me</Button>
        </div>
    );
};

export default Player;