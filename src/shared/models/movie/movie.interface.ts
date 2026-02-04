// @ts-nocheck

export interface MovieResponse {
  #ACTORS: string;
  #AKA: string;
  #IMDB_ID: string;
  #IMDB_IV: string;
  #IMDB_URL: string;
  #IMG_POSTER: string;
  #RANK: number;
  #TITLE: string;
  #YEAR: number;
  photo_height: number;
  photo_width: number;
}

export interface Movie {
  actors: string;
  aka: string;
  imdb_id: string;
  imdb_iv: string;
  imdb_url: string;
  img_poster: string;
  rank: number;
  title: string;
  year: number;
  photo_height: number;
  photo_width: number;
}