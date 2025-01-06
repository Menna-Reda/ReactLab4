import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axiosInstance from "../apis/config.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHearts } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { toggleWishList } from "../store/slices/wishList";
import { decreaseCounter, increaseCounter } from "../store/slices/counter";

export default function MovieDetails() {
  const params = useParams();
  const [movie, setMovie] = useState();
  const counterVal = useSelector((state) => state.counter.value);
  const movieAdded = useSelector((state) => state.favourites.value);
  const dispatch = useDispatch();

  useEffect(() => {
    axiosInstance
      .get(`movie/${params.id}?api_key=50f1d533196bb57b9d729417fbd43927`)
      .then((res) => {
        setMovie(res.data);
      })
      .catch((err) => console.log(err));
  }, [params.id]);
  return (
    <>
      <section
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          flexWrap: "wrap",
          padding: "0 10rem",
          height: "90vh",
        }}
      >
        <div
          className="imgContainer"
          style={{
            width: "30%",
            alignContent: "center",
          }}
        >
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`}
            style={{
              width: "100%",
            }}
          />
        </div>
        <div
          className="infoContent"
          style={{
            width: "60%",
            padding: "3rem 0",
            display: "flex",
            flexDirection: "column",
            alignItems: "space-around",
            justifyContent: "center",
          }}
        >
          <div className="d-flex">
            <h5
              className="card-title"
              onClick={() => {
                handleRedirectToDetails(movie.id);
              }}
              style={{ width: "80%" }}
            >
              {movie?.title}
            </h5>
            <a className="text-danger align-self-start">
              <FontAwesomeIcon
                icon={movieAdded.includes(movie?.id) ? faHearts : faHeart}
                style={{ fontSize: "1.5rem" }} // Adjust this size as needed
                onClick={() => {
                  movieAdded.includes(movie?.id)
                    ? dispatch(increaseCounter(counterVal - 1))
                    : dispatch(decreaseCounter(counterVal + 1));
                  dispatch(toggleWishList(movie?.id));
                }}
              />
            </a>
          </div>
          <p>{movie?.release_date}</p>
          <h4>Rating: {movie?.vote_average.toFixed(1)}</h4>
        </div>
      </section>
    </>
  );
}
