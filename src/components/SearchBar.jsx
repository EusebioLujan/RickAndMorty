import { useState } from "react";
import styles from "./SearchBar.module.css"


export default function SearchBar(props) {
  const [input,setInput]=useState("")
  const [randomNumber, setRandomNumber] = useState(null);
  const handlerInput=(event)=>{
setInput(event.target.value)
  }
const handlerSubmit=(event)=>{
  event.preventDefault()
  props.onSearch(input)
  setInput("")
}
const handleClick = () => {
  let min = 1;
  let max = 826;
  let randomNum = Math.floor(Math.random() * (max - min + 1) + min);
  
  props.onSearch(randomNum)
};



   return (
      <div className={styles.ahoraestuproblema}>
      <form onSubmit={handlerSubmit}>
        <input value={input} onChange={handlerInput} className={styles.searchbarin} type="text" placeholder="Search ID..." />
        <button className={styles.searchbarbut} type="submit">ADD</button>
      </form>
      <button className={styles.searchbarbut} onClick={handleClick}>RANDOM ID</button>
        {randomNumber && <h1>{randomNumber}</h1>}
</div>

    );
}
