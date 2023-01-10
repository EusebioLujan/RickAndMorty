import { useState } from "react";

export default function SearchBar(props) {
  const [input,setInput]=useState("")
  const handlerInput=(event)=>{
setInput(event.target.value)
  }
const handlerSubmit=(event)=>{
  event.preventDefault()
  props.onSearch(input)
  setInput("")
}
const handlerClick=(event)=>{
  let min=1
  let max=826
  let randomNumber=Math.floor(Math.random()*(max-min+1)+min);
  console.log(randomNumber)
}



   return (
      <div className="ahoraestuproblema">
      <form onSubmit={handlerSubmit}>
        <input value={input} onChange={handlerInput} class="searchbarin" type="text" placeholder="Search ID..." />
        <button className="searchbarbut" type="submit">ADD</button>
      </form>
      <button className="searchbarbut" onClick={handlerClick}>RANDOM</button>
</div>

    );
}
