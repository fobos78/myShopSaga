import { combineReducers } from '@reduxjs/toolkit';
import usersSlice from "../slice/users";

const rootReducer = combineReducers({
  usersSlice,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>