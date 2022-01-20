import { BrowserRouter,Routes, Route, Link } from "react-router-dom"; 
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Navbar} from "./components/Navbar";
import MoviesList from "./pages/MoviesList";
import MovieDetails from "./pages/MovieDetails";
import Loginform from "./pages/Loginform";
import Registerform from "./pages/Registerform";
import FavouriteMovies from "./pages/FavouriteMovies";
import '@fortawesome/fontawesome-free/css/all.css'


function App() {
  return (
  <BrowserRouter>
  <Navbar />
  <Routes>
    <Route path='/movies-favourite' element={<FavouriteMovies/>} ></Route>
    <Route path='/movies-list' element={<MoviesList/>} ></Route>
    <Route path='/' element={<MoviesList/>} ></Route>
    <Route path='/login' element={<Loginform />} ></Route>
    <Route path='/register' element={<Registerform/>} ></Route>
    <Route path='/movie-details/:id' element={<MovieDetails/>} ></Route>
  </Routes>
  </BrowserRouter>
  );
}

export default App;
