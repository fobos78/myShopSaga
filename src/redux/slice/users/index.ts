import { createSlice } from '@reduxjs/toolkit';

const initialState : any = {
  users: [],
};

const usersSlice = createSlice({
    name: 'userReducer',
    initialState,
    reducers: {
      
      loadUsers() {
      },
      getAllUsers(state, actions ) {
        state.users.push(actions.payload);
      },
    },
  },
);

export const {
  getAllUsers,
  loadUsers
} = usersSlice.actions;

export default usersSlice.reducer;