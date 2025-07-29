import { useEffect, useState } from 'react';
import MovieCard from './component/MovieCard';
import {Route, Routes } from 'react-router-dom';
import Detail from './pages/Detail';
import Layout from './component/Layout';
import Search from './pages/Search';
import './App.scss'
import Login from './pages/login';
import Signup from './pages/signup';


function App() {
  const [movies, setmovies] = useState([]);

  useEffect(() => {
    const options = {method: 'GET',
      headers: {accept: 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
      }};

    fetch('https://api.themoviedb.org/3/movie/popular?language=ko-KR', options)
    .then(res => res.json())
    .then(res => {
      setmovies(res.results.filter(el => !el.adult))
      console.log(res)
    })
    .catch(err => console.error(err));
  }, [])

  if (movies.length === 0) {
  return <div className=" text-black text-[32px]">영화 정보를 불러오는 중입니다...</div>;
  }

  return (
    <div className='bg-[black] flex flex-col justify-center items-center h-full'>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<div className='flex flex-wrap gap-[10px] p-[10px]'>
              {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>} />
            <Route path='detail/:id' element={<Detail movies={movies}/>} />
            <Route path='search' element={<Search movies={movies}/>} />
            <Route path='login' element={<Login />} />
            <Route path='signup' element={<Signup />} />
          </Route>
        </Routes>
    </div>
  );
};

export default App;