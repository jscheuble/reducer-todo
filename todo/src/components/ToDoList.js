import React, { useReducer } from 'react';
import { todoReducer, initialState } from '../reducers/todoReducer';


const ToDoList = () => {
    const [state, dispatch] = useReducer(todoReducer, initialState);

    return(
        <div>
            {state.map((e, i) => {
                return <p key={i}>&#9733; {e.task}</p>
            })}
        </div>
    );
}

export default ToDoList;