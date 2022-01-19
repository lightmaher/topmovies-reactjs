import React from 'react';
import { Link } from 'react-router-dom';

export default function MovieCard(props) {
  return  <div className="card col-md-3 m-3 col-sm-12">
            <img className="card-img-top" src={`https://image.tmdb.org/t/p/w500/${props.poster_path}`} alt="Card image cap"/> 
            <div className="card-body">
              <h5 className="card-title">{props.title}</h5>
              <p className="card-text">IMDP : {props.vote_average}</p>
              <Link to={`/movie-details/${props.id}`} className="btn btn-primary" > Details </Link>
            </div>
          </div>

}
