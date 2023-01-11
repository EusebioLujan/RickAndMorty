import { Link } from "react-router-dom";
import React from 'react';
import './Styles.css';

const Card = (props) => {
    return (
        <div className="card-container">
            <div>
                <button className="card-button" onClick={props.onClose}>
                    X
                </button>
            </div>
            <Link to={`/detail/${props.id}`}><div className="card-image">
                <img className="img"src={props.image} alt={props.name} />
                <div className="card-info">
                        <p className="card-name">{props.name}</p>
                    <div className="card-speandgen">
                        <p>Specie: {props.species}</p>
                        <p>Gender: {props.gender}</p>
                    </div>
                </div>
            </div></Link>
        </div>
    );
};

export default Card;


