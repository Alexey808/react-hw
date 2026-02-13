import axios from 'axios';
import {SearchMoviesRes} from '../components/SearchMoviesPage/SerachMoviesPage.interface.ts';
import {Movie} from '../shared/models/movie/movie.interface.ts';
import {ShortMovieInfoResponse} from '../components/MoviePage/MoviePage.interface.ts';
import {ShortMovieInfo} from '../shared/models/movie/movieInfo.interface.ts';
import {formatData} from './api.helper.ts';

export const BASE_API_URL = 'https://search.imdbot.workers.dev';


export async function getMoviesByName(name: string): Promise<Movie[]> {
  return axios.get<SearchMoviesRes>(`${BASE_API_URL}/?q=${name}`).then((res) =>
    formatData(res.data.description)
  );
}

export async function getMovieInfoById(id: string): Promise<ShortMovieInfo | null> {
  try {
    const res = await axios.get<ShortMovieInfoResponse>(`${BASE_API_URL}/?tt=${id}`);
    return res.data.short;
  } catch (error) {
    return null
  }
}