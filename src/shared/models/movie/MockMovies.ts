import {Movie} from './movie.interface.ts';

const move1 = "/public/move1.jpg";
const move2 = "/public/move2.jpg";
const move3 = "/public/move3.jpg";
const move4 = "/public/move4.jpg";
const move5 = "/public/move5.jpg";
const move6 = "/public/move6.jpg";
const move7 = "/public/move7.jpg";
const move8 = "/public/move8.jpg";

export const MockMovies: Movie[] = [
  {
    id: 1,
    name: 'Black Window',
    rate: 324,
    poster: move1,
    type: 'Movie',
    date: new Date().toISOString(),
    genre: ['Adventure', 'Science Fiction', 'Action'],
    duration: 181,
    description: 'After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos\' actions and restore order to the universe once and for all, no matter what consequences may be in store.'
  },
  {
    id: 2,
    name: 'Shang Chi',
    rate: 124,
    poster: move2,
    type: 'Movie',
    date: new Date().toISOString(),
    genre: ['Adventure', 'Science Fiction', 'Action'],
    duration: 181,
    description: 'After the devastating events ...'
  },
  {
    id: 3,
    name: 'Loki',
    rate: 235,
    poster: move3,
    type: 'Movie',
    date: new Date().toISOString(),
    genre: ['Adventure', 'Science Fiction', 'Action'],
    duration: 181,
    description: 'After the devastating events ...'
  },
  {
    id: 4,
    name: 'How I Met Your Mother',
    rate: 123,
    poster: move4,
    type: 'Movie',
    date: new Date().toISOString(),
    genre: ['Adventure', 'Science Fiction', 'Action'],
    duration: 181,
    description: 'After the devastating events ...'
  },
  {
    id: 5,
    name: 'Money Heist',
    rate: 8125,
    poster: move5,
    type: 'Movie',
    date: new Date().toISOString(),
    genre: ['Adventure', 'Science Fiction', 'Action'],
    duration: 181,
    description: 'After the devastating events ...'
  },
  {
    id: 6,
    name: 'Friends',
    rate: 123,
    poster: move6,
    type: 'Movie',
    date: new Date().toISOString(),
    genre: ['Adventure', 'Science Fiction', 'Action'],
    duration: 181,
    description: 'After the devastating events ...'
  },
  {
    id: 7,
    name: 'The Big Bang Theory',
    rate: 12,
    poster: move7,
    type: 'Movie',
    date: new Date().toISOString(),
    genre: ['Adventure', 'Science Fiction', 'Action'],
    duration: 181,
    description: 'After the devastating events ...'
  },
  {
    id: 8,
    name: 'Two And a Half Men',
    rate: 456,
    poster: move8,
    type: 'Movie',
    date: new Date().toISOString(),
    genre: ['Adventure', 'Science Fiction', 'Action'],
    duration: 181,
    description: 'After the devastating events ...'
  }
]