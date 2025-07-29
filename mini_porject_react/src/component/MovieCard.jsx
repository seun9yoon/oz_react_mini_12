import {useNavigate } from "react-router-dom";
import '../style/MovieCard.scss'


export default function MovieCard ({movie}){
    const navi = useNavigate()

    return (
    <div className="movieCard_container">
        <div 
        onClick={() => {
            navi(`/detail/${movie.id}`)
        }}
        className="movieCard">
            <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="movieCard_Img "
            />
            <h3 className="movieCard_Title">{movie.title}</h3>
            <p className="movieCard_Average">⭐{movie.vote_average}</p>
        </div>
    </div>
    );
};
