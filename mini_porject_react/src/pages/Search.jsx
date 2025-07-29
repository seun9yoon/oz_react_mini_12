import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import MovieCard from "../component/MovieCard";

export default function Search(){
    const [searchParams] = useSearchParams();
    const param = searchParams.get("movie")
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const options = {method: 'GET',
        headers: {accept: 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
        }};
    
        fetch(`https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(param)}&language=ko-KR&page=1`, options)
        .then(res => res.json())
        .then(res => {
            setMovies(res.results)
            console.log(res)
        })
        .catch(err => console.error(err));
    }, [param])

    if (movies.length === 0) {
    return <div className=" text-white text-[32px]">영화 정보를 불러오는 중입니다...</div>;
    }

    return (
        <>
        <div className="flex justify-center items-center flex-wrap gap-[10px] p-[10px]">
            {movies.map((movie) => (
                <MovieCard key={movie.id} movie = {movie}/>
            ))}
        </div>
        </>
    )
}