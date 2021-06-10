import React from 'react'
import {TodoItems} from "../MyComponents/TodoItems";

export const Todos = (props) => {
    return (
        <div className="container">
            <h3 className="text-center my-3">Todo list</h3>
            {props.todos.length===0? "No todos to display":
            props.todos.map((todo)=> {
                return <TodoItems todo={todo} key={todo.sno} onDelete={props.onDelete}/>
            })
            }
            
            
        </div>
    )
}
