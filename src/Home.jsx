import React, { useState } from 'react'
import Create from './Create'

const Home = () => {

    const [todos, setTodos] = useState([])


    const  addTodo = (newTodo)=>{
        setTodos([...todos, newTodo])
    }

  return (
    <div>
       <h2>Todo App</h2>
        <Create addTodo={addTodo} />

     {

        todos.length === 0 ? <h1>No Todos</h1>:
        todos.map((todo, index)=>{
            return <li key={index}>{todo}</li>
        })
     }

    </div>
  )
}

export default Home
