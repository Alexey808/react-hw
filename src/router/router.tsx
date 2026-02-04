import {createBrowserRouter, redirect} from 'react-router-dom';
import Layout from '../components/Layout/Layout.tsx';
import {getMovieInfoById} from '../api/helperApi.tsx';
import Loader from '../shared/components/Loader/Loader.tsx';
import {lazy, Suspense} from 'react';
import {AuthGuard} from '../components/Layout/components/AuthGuard.tsx';

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
        element:
          <Suspense fallback={<Loader/>}>
            <Login/>
          </Suspense>
      },
      {
        path: '/search-movies',
        element:
          <AuthGuard>
            <Suspense fallback={<Loader/>}>
              <SearchMoviesPage/>
            </Suspense>
          </AuthGuard>,
      },
      {
        path: '/movie/:id',
        element:
          <AuthGuard>
            <Suspense fallback={<Loader/>}>
              <MoviePage/>
            </Suspense>
          </AuthGuard>,
        errorElement: <Loader/>,
        loader: async ({params}) => {
          return await getMovieInfoById(`${params.id}`);
        }
      },
      {
        path: '/favorite-movies',
        errorElement: <Loader/>,
        element:
          <AuthGuard>
            <Suspense fallback={<Loader/>}>
              <FavoriteMoviesPage/>
            </Suspense>
          </AuthGuard>,
      }
    ]
  }
])