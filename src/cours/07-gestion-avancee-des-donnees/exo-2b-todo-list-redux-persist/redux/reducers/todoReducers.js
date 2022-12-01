import {createSlice} from '@reduxjs/toolkit';

// le slice va créer le reducer et les actions pour nous
const slice = createSlice({
  name: 'todo',
  initialState: {
    data: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.data.push(action.payload);
    },
    removeTodo: (state, action) => {
      state.data = state.data.filter(o => o.id !== action.payload.id);
    },
  },
});

const {reducer, actions} = slice;

export {reducer, actions};
