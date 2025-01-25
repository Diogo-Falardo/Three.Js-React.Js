import React, { useState, useEffect } from 'react'
import Search from './components/Search'
import Spinner from './components/Spinner';
import MovieCard from './components/MovieCard';

const API_BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

const API_OPTIONS = {
  method: 'GET',
  headers:{
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`
  }

}


const App = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const [errorMessage, setErrorMessage] = useState('');

  const [movieList, setMovieList] = useState([]);
  const [isloading, setIsLoading] = useState([]);
  const fetchMovies = async() => {

    setIsLoading(true);

    try{
      const endpoint = `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;
      const response = await fetch(endpoint, API_OPTIONS);

      if(!response.ok){
        throw new Error('Failed to fetch movies')
      }

      const data = await response.json();

      if(data.response === 'False'){
        setErrorMessage(data.Error || 'Failed to fetch Movies');
        setMovieList([]);
        return;
      }

      setMovieList(data.results || [])

    } catch(error){
      console.error(`Error fetching Movies: ${error}`)
      setErrorMessage('Try Again Later');
    } finally{
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchMovies();
  },[]);

  return (
    <main>
      <div className='pattern'/>

      <div className='wrapper'>
        <header>
          <img src='./src/assets/hero.png' alt='Hero banner'></img>
          <h1>Find <span className='text-gradient'>Movies</span>You'll Enjoy Without the Hassle</h1>
        </header>

        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>

        <section className='all-movies'>
          <h2 className='mt-[40px]'>All Movies</h2>
          {isloading ? (
            <p className='text-white'><Spinner/></p>
          ) : errorMessage ? (
            <p className='text-red-500'>{errorMessage}</p>
          ) : (
            <ul>
              {movieList.map((movie) => (
                <MovieCard key={movie.id} movie={movie}/>
              ))}
            </ul>
          )}
        </section>

      </div>
    </main>
  )
}

export default App