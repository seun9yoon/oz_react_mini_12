import {useNavigate } from "react-router-dom";

export default function MovieCard ({movie}){
    const navi = useNavigate()

    return (
    <div 
    onClick={() => navi(`/detail/${movie.id}`)}
    className="flex flex-col w-[180px] gap-[3px]
    justify-between bg-white rounded-[10px] overflow-hidden">
        <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="w-full h-[267px] "
        />
        <h3 className="text-[14px] font-bold pl-[5px]">{movie.title}</h3>
        <p className="flex justify-end text-xs pb-[5px] pr-[5px]">⭐{movie.vote_average}</p>
    </div>
    );
};
