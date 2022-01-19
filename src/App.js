import { BrowserRouter,Routes, Route, Link } from "react-router-dom"; 
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Navbar} from "./components/Navbar";
import MoviesList from "./pages/MoviesList";
import MovieDetails from "./pages/MovieDetails";

function App() {
  return (
  <BrowserRouter>
  <Navbar />
  <Routes>
    <Route path='/movies-list' element={<MoviesList/>} ></Route>
    <Route path='/' element={<MoviesList/>} ></Route>
    <Route path='/movie-details/:id' element={<MovieDetails/>} ></Route>
  </Routes>
  </BrowserRouter>
  );
}

export default App;
