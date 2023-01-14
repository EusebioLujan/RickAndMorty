import { Link } from "react-router-dom";
import React from 'react';
import styles from "./styles/Card.module.css"

const Card = (props) => {
    return (
        <div className={styles.cardcontainer}>
            <div>
                <button className={styles.cardbutton} onClick={props.onClose}>
                    X
                </button>
            </div>
            <Link to={`/detail/${props.id}`}><div className={styles.cardimage}>
                <div className={styles.divimg}>
                    
                    <img className={styles.img} src={props.image} alt={props.name} />
                    <p className={styles.ids}>ID:{props.id}</p>
                </div>
                <div className={styles.cardinfo}>
                        <p className={styles.cardname}>{props.name}</p>
                    <div className={styles.cardspeandgen}>
                        <p>Specie: {props.species}</p>
                        <p>Gender: {props.gender}</p>
                        
                    </div>
                </div>
            </div></Link>
        </div>
    );
};

export default Card;


