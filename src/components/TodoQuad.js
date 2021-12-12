import React from "react";
import Todo from "./Todo";

const TodoQuad = ({ quad, todos, setTodos }) => {

    return (
        <div className="todo-container" >
            <ul className="todo-list">
                {todos.filter(todo => todo.type === quad).map(todo => (
                    <Todo
                        setTodos={setTodos}
                        todos={todos}
                        todo={todo}
                        todoText={todo.text} u
                        key={todo.id}
                    />
                ))}
            </ul>
        </div>
    )
}

export default TodoQuad