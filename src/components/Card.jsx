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
      <div className="card-image">
        <img src={props.image} alt={props.name} />
        <div className="card-info">
          <p className="card-name">{props.name}</p>
          <div class="card-speandgen">
            <p>Specie: {props.species}</p>
          <p>Gender: {props.gender}</p></div>
        </div>
      </div>
    </div>
  );
};

export default Card;

