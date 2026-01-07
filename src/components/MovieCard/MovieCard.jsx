import "./MovieCard.css";
import rateIcon from "../../assets/star.svg";
import MovieCardFooter from '../MovieCardFooter/MovieCardFooter';


export default function MovieCard({move}) {
  const { id, name, rate, poster } = move;

  const posterStyle = {
    backgroundImage: `url(${poster})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <div className="movie-card">
      <div className="rate-block">
        <img src={rateIcon} alt="Рейтинг"/>
        {rate}
      </div>
      <div className="poster" style={posterStyle}></div>
      <div className="name">
        {name}
      </div>
      <MovieCardFooter moveId={id}/>
    </div>
  );
}