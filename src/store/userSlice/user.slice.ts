import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {UserState} from './user.slice.interface.ts';
import {User} from '../../shared/models/user/user.interface.ts';
import {deleteDataFromStorage, removeUserFromStorage} from '../storage.ts';

const initialState: UserState = {
  user: null,
}

export const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    removeUser: (state: UserState) => {
      removeUserFromStorage(state.user?.name);
      deleteDataFromStorage(state.user?.name);
      state.user = null;
    },
  },
});


export const userSliceAction = userSlice.actions;