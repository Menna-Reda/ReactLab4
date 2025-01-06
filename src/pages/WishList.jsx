import { useSelector } from "react-redux";
import MovieCard from "../components/MovieCard";
import { useState, useEffect } from "react";
import axios from "axios"; 

export default function WishList() {
  const movieAdded = useSelector((state) => state.favourites.value); 
  const [favdMovies, setFavMovies] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.themoviedb.org/3/discover/movie?api_key=50f1d533196bb57b9d729417fbd43927")
      .then((res) => {
        const filteredMovies = res.data.results.filter((movie) => 
          movieAdded.includes(movie.id)
        );
        setFavMovies(filteredMovies); 
      })
      .catch((err) => console.log(err));
  }, [movieAdded]); 

  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {favdMovies.map((movie, i) => (
          <div className="col" key={i}>
            <MovieCard movieItem={movie} />
          </div>
        ))}
      </div>
    </div>
  );
}
