import React, { useEffect ,useState} from 'react';
import { useDispatch , useSelector} from 'react-redux';
import { Link } from 'react-router-dom';
import { SetFavMovies,delFavMovies } from '../store/Actions/SetMovies';
import './MovieCard.css';


export default function MovieCard(props) {
  const favmovies = useSelector(state => state.favourite);
  const  [isfav,setisfav] = useState()
  useEffect(() => {
    for(let movie of favmovies){
      var x;
       if (movie.id === props.id){
          x=1
       }    
    }
    if ( x===1){
      setisfav(true)
    } else {
      setisfav(false)
    }
    console.log(isfav)
 }, [favmovies, isfav, props.id]);

  const add = useDispatch()
  const addtofav =() =>{
    add((SetFavMovies({id:props.id , title : props.title , img: props.poster_path})))
    setisfav(true);
    props.changed(false)
    console.log(isfav)
  }
  const delfromfav = () =>{
    add((delFavMovies(props.id)));
    setisfav(false);
    props.changed(false)
  }
  return  <div className="card col-md-3 m-3 p-3 col-sm-12 border bg-light border-primary">
            <img className="card-img-top" src={`https://image.tmdb.org/t/p/w500/${props.poster_path}`} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">{props.title}</h5>
              <p className="card-text" > {props.vote_average}</p>
              <div className='col-12 d-flex justify-content-between row'>
              <div className='col-4 mt-1'><Link to={`/movie-details/${props.id}`} className="btn btn-primary " > Details </Link></div>
              <div className='col-5 mb-2'> <i className="fas  fa-star fa-2x mt-2 " onClickCapture={ isfav ? delfromfav : addtofav} style={{color: isfav? "yellow" : "black"}} ></i> </div>
              </div>
              
            </div>
          </div>
}
