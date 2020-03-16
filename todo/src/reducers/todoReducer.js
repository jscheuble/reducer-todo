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

export const todoReducer = (state, action) => {
    switch (action.type) {
        case 'TOGGLE_COMPLETE':
            return {
                ...state,
                completed: true
            };
        default: 
            return state;
    }
}