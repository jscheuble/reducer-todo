import React, { useReducer, useState } from 'react';
import moment from 'moment';
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
        setInputText('');
    }

    const clearCompleted = e => {
        e.preventDefault();
        dispatch({ type: 'CLEAR_COMPLETED', payload: todos.completed});
    }

    let date = moment().calendar();

    return(
        <div>
            <section className='list'>
            {todos.map((e, i) => {
                return (
                    <p className='todo'
                        onClick={() => dispatch({ type: 'TOGGLE_COMPLETE', payload: e.id})}
                        key={i}>&#9786; <span className={e.completed ? 'completed' : ''}>{e.task}</span><br/>
                        <span className='timestamp'>{e.completed ? `Completed ${date}` : ''}</span>
                    </p>
                    );
            })}
            </section>

            <form>
                <input className='newTodo' name='newTodo' value={inputText} onChange={handleChange} placeholder='to do...'/>
                <button className='button' onClick={addTodo}>add new todo</button>
                <button className='button' onClick={clearCompleted}>clear completed</button>
            </form>
        </div>
    );
}

export default ToDoList;