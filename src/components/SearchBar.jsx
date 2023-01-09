import { useState } from "react";

export default function SearchBar(props) {
  const [input,setInput]=useState("")
  const handlerInput=(event)=>{
setInput(event.target.value)
  }
const handlerSubmit=(event)=>{
  event.preventDefault()
  props.onSearch(input)
}

   return (
      <form onSubmit={handlerSubmit}>
        <input value={input} onChange={handlerInput} class="searchbarin" type="text" placeholder="Search..." />
        <button className="searchbarbut" type="submit">ADD</button>
      </form>
    );
}
