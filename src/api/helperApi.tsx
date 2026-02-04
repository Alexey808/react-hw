import axios from 'axios';
import {SearchMoviesRes} from '../components/SearchMoviesPage/SerachMoviesPage.interface.ts';
import {BASE_API_URL} from './apiBaseUrl.ts';
import {Movie} from '../shared/models/movie/movie.interface.ts';
import {ShortMovieInfoResponse} from '../components/MoviePage/MoviePage.interface.ts';
import {ShortMovieInfo} from '../shared/models/movie/movieInfo.interface.ts';


function formatData<T>(arrayData: any[]): T {
  return arrayData.map((data) => {
    return Object.fromEntries(
      Object.entries(data).map(
        ([key, value]) =>
          [key.toLowerCase().replace(/^#/, ''), value]
      )
    );
  }) as T;
}

export async function getMoviesByName(name: string): Promise<Movie[]> {
  try {
    const res = await axios.get<SearchMoviesRes>(`${BASE_API_URL}/?q=${name}`);
    return formatData<Movie[]>(res.data.description);
  } catch (error) {
    return [];
  }
}

export async function getMovieInfoById(id: string): Promise<ShortMovieInfo | null> {
  try {
    const res = await axios.get<ShortMovieInfoResponse>(`${BASE_API_URL}/?tt=${id}`);
    return res.data.short;
  } catch (error) {
    return null
  }
}