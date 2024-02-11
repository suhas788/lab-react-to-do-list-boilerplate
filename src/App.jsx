import { useState } from "react"
import './App.css'

function App(){
  const [divs,setDivs]=useState([])
  const [inputValue,setInputValue]=useState()

  const passInputValue=(e)=>{
    setInputValue(e.target.value)}

  const DeleteItem=(id)=>{
    setDivs(prev=>(prev.filter((item)=>item.id!==id)))
  }

  const create=()=>{
    if(inputValue){
    let newDiv = {id:divs.length,
                 inputvalue:inputValue,
                }
    setDivs((divs)=>[...divs,newDiv])
    setInputValue('')}
  }
  return (
    <div>
      <input type="text" placeholder="Type here" onChange={passInputValue} value={inputValue} /> 
      <button onClick={create}>AddItem</button>
      <p>{inputValue}</p>
      <div>
        {divs.map((div)=>(
          <div key={div.id}>
            <input type="text" defaultValue={div.inputvalue}/>
            <button onClick={()=>{DeleteItem(div.id)}}>DeleteItem</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App