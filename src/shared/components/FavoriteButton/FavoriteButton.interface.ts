import {ButtonHTMLAttributes} from 'react';

export interface FavoriteButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  click: () => void;
  isFavorite: boolean;
}