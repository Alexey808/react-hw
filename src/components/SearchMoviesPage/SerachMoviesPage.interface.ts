import {MovieResponse} from '../../shared/models/movie/movie.interface.ts';

export interface SearchMoviesRes {
  ok: boolean;
  error_code: number;
  description: MovieResponse[];
}
