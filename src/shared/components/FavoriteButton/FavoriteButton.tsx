import styles from './FavoriteButton.module.css';
import SvgLogo from '../SvgLogo/SvgLogo.tsx';
import likeIcon from '../../../assets/like.svg';
import {FavoriteButtonProps} from './FavoriteButton.interface.ts';
import cn from 'classnames';

export default function FavoriteButton({ click, isFavorite}: FavoriteButtonProps) {
  const icon = isFavorite
    ? <SvgLogo color={isFavorite ? 'rgba(55, 216, 167, 1)' : 'rgba(123, 110, 246, 1)'}/>
    : <img src={likeIcon} alt="Добавить в избранное"/>;

  return (
    <button
      onClick={click}
      className={cn({
        [styles['has-favorites']]: isFavorite,
      })}
    >
      { icon }
      { isFavorite
        ? 'В избранном'
        : 'В избранное'
      }
    </button>
  );
}