import {createBrowserRouter, redirect} from 'react-router-dom';
import Layout from '../components/Layout/Layout.tsx';
import {getMovieInfoById} from '../api/helperApi.tsx';
import Loader from '../shared/components/Loader/Loader.tsx';
import {lazy, Suspense} from 'react';

const Login = lazy(() => import('../components/Login/Login.tsx'));
const SearchMoviesPage = lazy(() => import('../components/SearchMoviesPage/SearchMoviesPage.tsx'));
const MoviePage = lazy(() => import('../components/MoviePage/MoviePage.tsx'));
const FavoriteMoviesPage = lazy(() => import('../components/FavoriteMoviesPage/FavoriteMoviesPage.tsx'));

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
        element: <Suspense fallback={<Loader/>}>
          <Login/>
        </Suspense>
      },
      {
        path: '/search-movies',
        element: <Suspense fallback={<Loader/>}>
          <SearchMoviesPage/>
        </Suspense>,
      },
      {
        path: '/movie/:id',
        element: <Suspense fallback={<Loader/>}>
          <MoviePage/>
        </Suspense>,
        errorElement: <Loader/>,
        loader: async ({params}) => {
          return await getMovieInfoById(`${params.id}`);
          // return { data: await getMovieInfoById(`${params.id}`) };
        }
      },
      {
        path: '/favorite-movies',
        element: <FavoriteMoviesPage/>
      }
    ]
  }
])