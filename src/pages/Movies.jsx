import { useEffect, useState } from "react";
import axiosInstance from "../apis/config.js";
import MovieCard from "../components/MovieCard";
import { useNavigate } from "react-router";
export default function Movies() {
  //const [inputVal, setInputVal] = useState("");
  const [movies, setMovies] = useState();
  const [filteredMovies, setFileredMovies] = useState();
  const navigate = useNavigate()

  useEffect(() => {
    axiosInstance
      .get("discover/movie?api_key=50f1d533196bb57b9d729417fbd43927")
      .then((res) => {
        setMovies(res.data.results);
      })
      .catch((err) => console.log(err));
  }, []);
  
  function handleSearch(name) {
    setFileredMovies(name
      ? ( movies.filter((movie) => {
          return movie.title.toLowerCase().includes(name);
        }))
      : movies);
  }
function handleSubmit(){
  e.preventDefault();
  if(filteredMovies.length == 0)
    navigate('/not-found');

}
  return (
    <>
      <div
        style={{
          width: "98%",
          height: "20%",
          backgroundColor: "#F6F4F0",
          margin: "1em",
          padding: "2em",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <h1 style={{ fontSize: "2rem", color: "#243642" }}>
          Welcome to our Movie App!
        </h1>
        <form
          className="d-flex"
          style={{
            width: "90%",
            textAlign: "center",
            justifyContent: "center",
          }}
          onSubmit={handleSubmit}
        >
          <input
            className="form-control me-2"
            type="text"
            placeholder="Search for a movie"
            style={{
              width: "60%",
              height: "3rem",
              borderRadius: "0.5em",
              paddingLeft: "10px",
            }}
            onChange={(e) => handleSearch(e.target.value)}
          />
          <button
            className="btn btn-outline-success"
            type="submit"
            style={{
              fontSize: "1.1rem",
              width: "5em",
              marginLeft: "0.5em",
              height: "3rem",
              borderRadius: "0.5em",
            }}
          >
            Search
          </button>
        </form>
      </div>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {(filteredMovies?filteredMovies:movies)?.map((movie) => (
            <div className="col" key={movie.id}>
              <MovieCard movieItem={movie} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
