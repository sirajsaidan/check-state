import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

export default function App(){
  const[text,setText]=useState("")
   const [list,setListe]=useState([])
  return (
    <div>
      <label>
    task:
    <input type="text" onChange={event => setText(event.target.value)}/>
    <input  type="button" value='click' onClick={()=>setListe([...list , text])}/> 
  </label>

  <div>{list.map(e=>e.list)}</div>
    </div>
  );
}


