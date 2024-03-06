import { createSlice } from "@reduxjs/toolkit";


type TTodo = {
    image: string;
    title: string;
    category: string;
    description: string;
    amount: string;
}

type TInitialState = {
    data: TTodo[];
}

const initialState: TInitialState = {
    data: []
}

const todoSlice = createSlice({
    name: "todo ",
    initialState,
    reducers: {

    }
})

//export const { addTodo, removeTodo, toggleComplete } = todoSlice.actions

export default todoSlice.reducer;