export const initialState = [
    {
        task: 'Brush Dog',
        id: 139243458934,
        completed: false
    },
    {
        task: 'Water Plants',
        id: 23902354939,
        completed: false
    }
]


export const todoReducer = (todos, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [...todos, { 
                task: action.payload,
                id: Date.now(),
                completed: false
            }];
        case 'TOGGLE_COMPLETE':
            return todos;
        default: 
            return todos;
    }
}