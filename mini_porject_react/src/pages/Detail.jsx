import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import '../style/Detail.scss'

export default function Detalil() {
    const {id} = useParams()
    const [movieDetail, setMovieDetail] =useState(null)

    console.log("useParams id", id);
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
    }, [id])

    console.log("movieDetail", movieDetail)
    if (!movieDetail) {
    return <div className=" text-white text-[32px]">영화 정보를 불러오는 중입니다...</div>;
    }


    return(
        <>
            <div className="detail_container">
                <img src ={ `https://image.tmdb.org/t/p/w500/${movieDetail.poster_path}`}
                alt={`${movieDetail.title}`}
                className="poster" />
                <div className="info_container">
                    <div className="title_container">
                        <div className="title">{movieDetail.title}</div>
                        <div>평점: {movieDetail.vote_average}⭐</div>
                    </div>
                    <div className="genres">
                        {movieDetail.genres.map(
                            genre => (<span key={genre.id} className="genre">
                                {genre.name}
                            </span>))}
                    </div>
                    <div>{movieDetail.overview}</div>
                </div>
            </div>
        </>
    )
}