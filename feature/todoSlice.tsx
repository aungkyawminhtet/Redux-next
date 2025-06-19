import { createSlice } from "@reduxjs/toolkit"

interface Props{
    count: number
    lists: any[]
}

const initialState: Props = {
    count : 0,
    lists: []
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increase: (state, action) => {
            state.count = state.count + action.payload.id;
        },
        addList: (state,action) => {
            return{
                ...state, lists: [...state.lists,action.payload]
            }
        },
        remove: (state, action) => {
           return {
            ...state, lists: state.lists.filter(item => item.id !== action.payload.id)
           }
        }

    }
});

// export const counterSlice;
export const {increase, addList, remove} = counterSlice.actions;
export default counterSlice.reducer;