import React from "react";

const Form = ({ type, setType, setInputText, todos, setTodos, inputText }) => {
    //Write javascriipt code/function
    const typeHandler = (e) => {
        //console.log(e.target.value) this prints out nw/se/etc
        setType(e.target.value)
    }
    const inputTextHandler = (e) => {
        setInputText(e.target.value)
    }
    const submitTodoHandler = (e) => {
        e.preventDefault()
        setTodos([
            ...todos,
            {
                text: inputText,
                completed: false,
                id: Math.random() * 1000, //use a package for unique id
                //need a type for eisenhower
                type: type
            }
        ])
        setInputText('')
    }
    return (
        <form>
            <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
            <button onClick={submitTodoHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select onChange={typeHandler} name="type" className="filter-todo">
                    <option value="nw">Urgent&Important</option>
                    <option value="ne">NotUrgent&Important</option>
                    <option value="sw">Urgent&NotImportant</option>
                    <option value="se">NotUrgent&NotImportant</option>
                </select>
            </div>
        </form>
    )
}

export default Form