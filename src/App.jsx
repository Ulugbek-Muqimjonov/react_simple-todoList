import "./App.css"
import React, { useState } from 'react'
import Form from './components/form/Form'
import List from './components/list/List'

function App() {
  const [todos,setTodos] = useState([
    {
      id:1,
      value:"Kitob o'qish",
      isComplated:false
    },
    {
      id:2,
      value:"Code yozish",
      isComplated:true
    },
    {
      id:3,
      value:"ovqatlanish",
      isComplated:true
    },
    
  ])
  return (
    <div className='app'>
       <h2 className="text-center">Create Todos</h2>
        <Form setTodos={setTodos}/>
        <List todos={todos} setTodos={setTodos}/>
    </div>
  )
}

export default App