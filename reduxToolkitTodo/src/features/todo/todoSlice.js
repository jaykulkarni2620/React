import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

//initial state store starting me kaise dikhega 

const initialState = {
    todos: [{
        id: 1,
        text: "Hello World"
    }]
};


//slice ek reducer hai jo ke function hai

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    // reducer madhe apan function pass karto (function madhe aplyala nehmi “state” & “action” bhetnar).
    //State: state aplyala previous ‘initialvalues’ cha access deto(Current Situation sangto).
    //Action: aaplyla retun kahi value havya astat for example - suppose aplyala todo delete karaycha asel tar aaplyla la id lagnar tar id aaplyla la “action” madhun milnar
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            };

            // added value in state (pushed)
            state.todos.push(todo);
        },
        removeTodo: (state, action) => {
            // filter use kela so prtyek sepreate value cha access milala 
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },

        //extra work 
        updateTodo: (state, action) => {
           const { id, text } = action.payload;
           const todo = state.todos.find((todo) => todo.id === id)
           if (todo) {
            todo.text = text;
            }
        }
    }
});

export const {addTodo, removeTodo, updateTodo    } = todoSlice.actions
export default todoSlice.reducer