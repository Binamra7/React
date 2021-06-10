import './App.css';
import Header from "./MyComponents/Header";
import {Footer} from "./MyComponents/Footer";
import {Todos} from "./MyComponents/Todos";
import React, { useState } from 'react';



function App() {
  const onDelete = (todo) => {
    console.log("i am ondelete of todo", todo);
  
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }))
  }

  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "GO to the market",
      desc: "You need to buy groceries"

    },
    {
      sno: 2,
      title: "GO to the mall",
      desc: "You need to buy clothers"

    },
    {
      sno: 3,
      title: "Do your homework",
      desc: "You need to finish hlw"

    }
  ]);

  return (
    <>
      <Header title="My Todos List" searchBar={true}/>
      <Todos todos={todos} onDelete={onDelete}/>
      <Footer/>
    </>
  );
}

export default App;
