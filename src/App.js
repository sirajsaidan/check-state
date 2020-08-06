import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { v4 as uuidv4 } from 'uuid';
import { useState } from "react";

export default function App() {
  const [text, setText] = useState("");
  const [list, setListe] = useState([ ]);
  const [edit, setEdit] = useState(false);
  const deleteElement = ( task ) => {
    var newTasks = list.filter(el => el != task)
    setListe(newTasks)
    
  }

  

  const Update = (taskToUpdate) => {
    setText(taskToUpdate)
    setEdit(null)
  }
  const setUpdate=(x)=>{setText(x.text);setEdit(x)}

  const handleClick = () => {
    if(edit) {
       let newLists=list.map(el=> el.id === edit.id?{...el,text}:el); setEdit(null)
     setListe(newLists)
     setText("")
    } else {
      setListe([...list,{ text , id : uuidv4() }])
      setText("")
    }
  }
  return (
    <div>
      <label>
        task:
        <input type="text" value={text} onChange={(event) => setText(event.target.value)} />
        <input
          type="button"
          value={edit ? "update" : "add"}
          onClick={handleClick}
        />
      </label>

      <ul>
        {list.map((e) => (
          <li>
            <h2>{e.text}</h2>
            <button className="btn btn-primary" onClick={()=>deleteElement(e)}>supprimer</button>
            <button  onClick={()=>setUpdate (e)}>edit</button>
            


          </li>
        ))}
      </ul>
    </div>
  );
}
