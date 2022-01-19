import { Pagination } from '@mui/material';
import axios from 'axios';
import React, { useState,useEffect } from 'react';
import MovieCard from '../components/MovieCard';
import MyPagination from '../components/MyPagination';

export default function MoviesList() {
   const [movies , setmovies] = useState([])
   const [Mname , setMname] = useState('');
   const [searchmode , setsearchmode] = useState(false);
   
   useEffect(() => {
    getmoviebypage();
   // getmovies();
   }, []);
   useEffect(() => {
   // getmovies();
   }, [movies]);
   
  function getmoviebypage(pageno){
    setsearchmode(false)
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=672cdfe6607c2166acf2affdb81ae188&page=${pageno}`).then(
        res => {
          setmovies(res.data.results)
        }
    )
  }
  function backtoall(e){
    e.preventDefault();
    setsearchmode(true);
    getmoviebypage(1);
  }
  function getname(e){
    setMname(e.target.value)
    e.target.value = 'nssss'
  }
  function search(e){
    e.preventDefault();
    setsearchmode(true)
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=7a1c19ea3c361a4d3cc53eb70ef8298c&query=${Mname}`).then(
      res => {
        
        setmovies(res.data.results)
      }
     
  )
  }
  /*function getmovies(){
    axios.get('https://api.themoviedb.org/3/movie/popular?api_key=672cdfe6607c2166acf2affdb81ae188').then(
        res => {
          setmovies(res.data.results)
        }
    )
      }
    */
  return (
      <>   
     <h1 className='m-3'> Movies List</h1>
    
    <div className="container">
      
<div class="input-group mb-3">
  <form className='col-10' onSubmit={(e)=> {search(e)}}>
     <input type="text" value={Mname} name='Mname' onChange={(e)=> getname(e)} class="form-control" placeholder="Movie name ..." 
     aria-label="Recipient's username" aria-describedby="basic-addon2"/>
      <div class="input-group-append">
    <button class="btn btn-outline-secondary mt-2"  type="submit">Search</button>
  </div>
  </form>
 
</div> <button className='btn btn-outline-dark' style={{visibility : searchmode === false ? "hidden" : "visible"}} onClick={(e)=> backtoall(e)} > Back To All Movies</button>
       <div  style={{visibility : searchmode === false ? "hidden" : "visible"}} > <h2> {`serch result for '${Mname}'`}</h2> </div>
      <div className='row'>
     {
         movies.map( movie => {
           return ( <>
              <MovieCard key={movie.id} id={movie.id} title={movie.title}  poster_path={movie.poster_path} vote_average={movie.vote_average}/>
              </>
           )
         })
     }
   </div>
   <div className='col-12 p-5'>
   <MyPagination hide={searchmode} onmove={(e) => getmoviebypage(e)}/>
   </div>
   </div>
      
  </>)
}
