import React from "react";

// create an component
const Type = ({ setInputText, todos, setTodos, inputText }) => {
    return (
        <div className="select">
            <select name="type" className="filter-todo">
                <option value="nw">Urgent&Important</option>
                <option value="ne">NotUrgent&Important</option>
                <option value="sw">Urgent&NotImportant</option>
                <option value="se">NotUrgent&NotImportant</option>
            </select>
        </div>
    )
}

export default Type