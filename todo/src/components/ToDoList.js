import React, { useReducer, useState } from 'react';
import { todoReducer, initialState } from '../reducers/todoReducer';


const ToDoList = () => {
    const [todos, dispatch] = useReducer(todoReducer, initialState);
    const [inputText, setInputText] = useState('');

    console.log(todos);

    const handleChange = e => {
        setInputText(e.target.value);
    }

    const addTodo = e => {
        e.preventDefault();
        dispatch({ type: 'ADD_TODO', payload: inputText });
    }

    const clearCompleted = e => {
        e.preventDefault();
        dispatch({ type: 'CLEAR_COMPLETED', payload: todos.completed});
    }

    return(
        <div>
            {todos.map((e, i) => {
                return (
                    <p className={e.completed ? 'completed' : ''}
                    onClick={() => dispatch({ type: 'TOGGLE_COMPLETE', payload: e.id})}
                    key={i}>&#9733; {e.task}</p>
                    );
            })}

            <form>
                <input name='newTodo' value={inputText} onChange={handleChange}/>
                <button onClick={addTodo}>add new todo</button>
                <button onClick={clearCompleted}>clear completed</button>
            </form>
        </div>
    );
}

export default ToDoList;