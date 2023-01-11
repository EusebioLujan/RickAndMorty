import React from "react";
import SearchBar from "./SearchBar"
import styles from "./Nav.module.css"
import { NavLink } from "react-router-dom";

export default function Nav(props) {
    
    
    
    return (
        <>
            <div className={styles.div}>
                <NavLink to="/"><img src="https://logos-world.net/wp-content/uploads/2022/01/Rick-And-Morty-Logo.png" alt="Logo" className={styles.img} /></NavLink>
                
              
                <div className={styles.sbar}>
                <SearchBar onSearch={props.onSearch} />
                </div> 
               
            </div>
            
        </>
    )
}