import styles from './RatingTag.module.css';
import rateIcon from '../../../assets/star.svg';
import {RatingTagProps} from './RatingTag.interface.ts';

export default function RatingTag({value}: RatingTagProps) {
  return (
    <div className={styles['rate-block']}>
      <img src={rateIcon} alt="Рейтинг"/>
      {value}
    </div>
  );
}