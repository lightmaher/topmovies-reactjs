import axios from 'axios';
import React, { useState,useEffect } from 'react';
import MovieCard from '../components/MovieCard';

export default function MoviesList() {
   const [movies , setmovies] = useState([])
   useEffect(() => {
    getmovies();
   }, []);
   
  function getmovies(){
    axios.get('https://api.themoviedb.org/3/movie/popular?api_key=672cdfe6607c2166acf2affdb81ae188').then(
        res => {
          setmovies(res.data.results)
        }
    )
      }
  return (
      <>   
     <h1 className='m-3'> Movies List</h1>
    <div className="container">
      <div className='row'>
     {
         movies.map( movie => {
           return (
              <MovieCard key={movie.id} id={movie.id} title={movie.title}  poster_path={movie.poster_path} vote_average={movie.vote_average}/>
           )
         })
     }
   </div>
   </div>
      
  </>)
}
