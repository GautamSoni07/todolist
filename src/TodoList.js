import React, { useState } from "react";
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import  ListCom from "./ListCom";

const TodoList = () => {
  const [item, setItem] = useState("")
  const [newItem, setNewItem] = useState([]);

const itemEvent = (event) =>{

  setItem(event.target.value)
};
const listOfItems = () =>{
  setNewItem((prevValue) => {
    return [...prevValue, item]
  });
  setItem("");
};


 return(
    <>
      <div className="main_div">
      <div className="center_div">
          <br />
          <h1>ToDoList</h1>
          <br />
          <input 
           type="text" 
           value={item} 
           placeholder="Add an Items" 
           onChange={itemEvent} />

          <Button className="newBtn" onClick={listOfItems}>
            <AddIcon />
          </Button>
          <br />
          <ol>
           {newItem.map((val, index) => {
                return <ListCom key={index} text= {val}/> ;
              })}
          </ol>
          <br />
      </div>
      </div>
    </>
 );  
  }
export default TodoList