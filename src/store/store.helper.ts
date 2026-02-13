import {getDataFromStorage, setDataToStorage} from './storage.ts';
import {User} from '../shared/models/user/user.interface.ts';
import {Movie} from '../shared/models/movie/movie.interface.ts';
import {appStore} from './store.ts';

export function loadDataFromStorage() {
  const users = getDataFromStorage<User[]>('users') || [];
  const activeUser = users.find((user: User) => user.isLogined) || null;
  const favoriteMovies = getDataFromStorage<Movie[]>(activeUser?.name) || [];

  return {
    favoritesStore: {
      favoriteMovies,
    },
    moviesStore: {
      movies: [],
    },
    userStore: {
      user: activeUser,
    }
  }
}

export function loadDataToStorage(): void {
  const favoriteMovies = appStore.getState().favoritesStore.favoriteMovies;
  const activeUserName = appStore.getState().userStore.user?.name;
  if (activeUserName && favoriteMovies) {
    setDataToStorage(favoriteMovies, activeUserName);
  }
}