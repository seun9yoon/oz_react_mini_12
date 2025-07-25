import { useState } from 'react';
import MovieCard from './component/MovieCard';
import movieListData from './data/movieListData.json';
import {Route, Routes } from 'react-router-dom';
import Detalil from './pages/Detail';
import Layout from './component/Layout';

function App() {
  const [movies] = useState(movieListData.results);

  return (
    <div className='bg-[black]'>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<div className='flex flex-wrap gap-[10px] p-[10px]'>
            {movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>} />
          <Route path='detail/:id' element={<Detalil movies={movies}/>} />
          </Route>
      </Routes>
    </div>
  );
};

export default App;