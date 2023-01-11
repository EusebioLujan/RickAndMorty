import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Detail.module.css";

export default function Detail(){
    const {id}=useParams();
    const [character, setCharacter] = useState({});
    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
            .then((response) => response.json())
            .then((char) => {
                if (char.name) {
                    setCharacter(char);
                } else {
                    window.alert("No hay personajes con ese ID");
                }
            })
            .catch((err) => {
                window.alert("No hay personajes con ese ID");
            });
      }, []);
    
    return(
        <>
        
    <div className={styles.div}>
    

    <div className={styles.fotoid}>
        <div className={styles.auximg}><img src={character.image} alt={character.id}/></div>
        
        <h2>ID de Identificación: {character.id}</h2>
    </div>

    <div className={styles.info}>
        <h1 className={styles.name}>{character.name}</h1>
    <div>

         <h2>Especie: {character.species}</h2>
         <h2>Género: {character.gender}</h2>
         <h2>Origen: {character.origin?.name}</h2> 
         <h2>Localización: {character.location?.name}</h2>
    
    </div>

    <div className={styles.botonverde}>
    {character.status==="Alive"? <h2>Status: {character.status} 🟢</h2>:<h2>Status: {character.status} 🔴</h2>} 
         {/* <img  src={"https://i.imgur.com/NvaLTnq.png"} alt="Status Boton"/> */}
    </div>
         
    </div>
    
        
        
    </div>
        </>
    )
}
