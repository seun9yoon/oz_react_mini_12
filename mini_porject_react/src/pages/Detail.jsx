import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";


export default function Detalil() {
    const {id} = useParams()
    const [movieDetail, setMovieDetail] =useState(null)

    useEffect(() => {
        const options = {method: 'GET',
        headers: {accept: 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
        }};
    
        fetch(`https://api.themoviedb.org/3/movie/${id}?language=ko-KR`, options)
        .then(res => res.json())
        .then(res => {
            console.log("res", res)
            setMovieDetail(res)
        })
        .catch(err => console.error(err));
    }, [])

    console.log("movieDetail", movieDetail)
    if (!movieDetail) {
    return <div className=" text-white text-[32px]">영화 정보를 불러오는 중입니다...</div>;
    }


    return(
        <>
            <div className="flex gap-[10px] p-[20px] text-[white] h-screen">
                <img src ={ `https://image.tmdb.org/t/p/w500/${movieDetail.poster_path}`}
                alt={`${movieDetail.title}`}
                className="w-[300px] h-[450px]" />
                <div className="flex flex-col gap-[10px]">
                    <div className="flex justify-between items-center">
                        <div className="text-[32px]">{movieDetail.title}</div>
                        <div>평점: {movieDetail.vote_average}⭐</div>
                    </div>
                    <div className="flex flex-row justify-around">
                        {movieDetail.genres.map(
                            genre => (<span key={genre.id} className="p-[10px] w-auto border rounded">
                                {genre.name}
                            </span>))}
                    </div>
                    <div>{movieDetail.overview}</div>
                </div>
            </div>
        </>
    )
}