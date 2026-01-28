import {createBrowserRouter, redirect} from 'react-router-dom';
import Login from '../components/Login/Login.tsx';
import Layout from '../components/Layout/Layout.tsx';
import MoviePage from '../components/MoviePage/MoviePage.tsx';
import SearchMoviesPage from '../components/SearchMoviesPage/SearchMoviesPage.tsx';
import FavoriteMoviesPage from '../components/FavoriteMoviesPage/FavoriteMoviesPage.tsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        index: true,
        loader: () => redirect('/search-movies'),
      },
      {
        path: '/login',
        element: <Login/>
      },
      {
        path: '/search-movies',
        element: <SearchMoviesPage/>,
      },
      {
        path: '/movie/:id',
        element: <MoviePage/>
      },
      {
        path: '/favorite-movies',
        element: <FavoriteMoviesPage/>
      }
    ]
  }
])