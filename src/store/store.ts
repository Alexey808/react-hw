import {configureStore} from '@reduxjs/toolkit';
import {favoriteSlice} from './favoriteSlice/favorite.slice.ts';
import {moviesSlice} from './moviesSlice/movies.slice.ts';
import {userSlice} from './userSlice/user.slice.ts';
import {loadDataFromStorage, loadDataToStorage} from './store.helper.ts';


export const appStore = configureStore({
  reducer: {
    favoritesStore: favoriteSlice.reducer,
    moviesStore: moviesSlice.reducer,
    userStore: userSlice.reducer,
  },
  preloadedState: loadDataFromStorage()
});

appStore.subscribe(() => {
  loadDataToStorage();
});

export type AppStore = ReturnType<typeof appStore.getState>;
export type AppDispatch = typeof appStore.dispatch;
