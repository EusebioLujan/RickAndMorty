import React from "react";
import styles from "./About.module.css"
const About = () => {
  return (
    <div className={styles.title}>
      <h1>About</h1>
      <div>
        <h2>Your Name</h2>
        <p>A little bit about yourself and your background</p>
        <p>A description of the application and its purpose</p>
        <p>Bienvenidos a la pagina de Rick and Morty donde puede buscar y agregar a tus
    personajes favoritos,donde podras ver su genero,specie,y si esta vivo en la serie!!!!</p>
      </div>
    </div>
  );
};

export default About;
