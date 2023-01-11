import React from "react";
import styles from "./Cardempty.module.css"


export default function Cardempty(){
return(
    <><div className={styles.title}>
<h1 >¿Como puedo buscar Personajes?</h1>
<h2>La funcionalidad de busqueda es mediante "ID",lo unico que debes hacer es colocar un numero en el Search ID
y Clickear en "ADD"
</h2>
<h2>¿Para que sirve RandomID?</h2>
<h2>Te mostraremos un personaje random para ti si no sabes que ID buscar. </h2>
<h2>¿Cuantos Personajes Tiene?</h2>
<h2>Tenemos 826 personajes a tu disposición</h2>
</div>
    </>
)

}