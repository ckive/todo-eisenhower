import React, { useEffect, useState } from 'react';
import './App.css';
//importing components
import Form from "./components/Form"
import TodoList from "./components/TodoList"

// Thank you for reference: https://www.youtube.com/watch?v=pCA4qpQDZD8&list=PLDyQo7g0_nsVHmyZZpVJyFn5ojlboVEhE&index=10

function App() {
  const [inputText, setInputText] = useState("")
  const [todos, setTodos] = useState([])
  const [type, setType] = useState("nw")

  //run once when app starts (use effect)
  useEffect(() => {
    getLocalTodos()
  }, [])

  //use effect
  useEffect(() => {
    saveLocalTodos()
  }, [todos])

  //save to local
  const saveLocalTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }
  //get from local
  const getLocalTodos = () => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]))
    } else {
      // get
      let todoFromLocal = JSON.parse(localStorage.getItem('todos'))
      //set state to local (stored) todos
      setTodos(todoFromLocal)
    }
  }

  return (
    <div className="App">
      <header>
        <h1>Eisenhower Matrix Todo List</h1>
      </header>
      <Form
        type={type}
        setType={setType}
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
      />
      <TodoList
        type={type}
        todos={todos}
        setTodos={setTodos}
      />
    </div>
  );
}

export default App;
