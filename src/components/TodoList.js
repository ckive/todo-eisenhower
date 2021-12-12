import React from "react";
import TodoQuad from "./TodoQuad";

const TodoList = ({ type, todos, setTodos }) => {
    //JVS here
    const quadrants = ["nw", "ne", "sw", "se"]
    return (
        <div className="grid">
            <div></div>
            <div className="matrix-headers">Urgent</div>
            <div className="matrix-headers">Not Urgent</div>
            <div className="matrix-headers">Important</div>
            <TodoQuad quad={quadrants[0]} todos={todos} setTodos={setTodos} />
            <TodoQuad quad={quadrants[1]} todos={todos} setTodos={setTodos} />
            <div className="matrix-headers">Not Important</div>
            <TodoQuad quad={quadrants[2]} todos={todos} setTodos={setTodos} />
            <TodoQuad quad={quadrants[3]} todos={todos} setTodos={setTodos} />
        </div>

    )
}

export default TodoList