import React from "react";
import { useNavigate } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHearts } from "@fortawesome/free-solid-svg-icons";

import { useDispatch, useSelector } from "react-redux";
import { toggleWishList } from "../store/slices/wishList";
import { decreaseCounter, increaseCounter } from "../store/slices/counter";

export default function MovieCard(props) {
  const navigate = useNavigate();
  const { movieItem } = props;
  const handleRedirectToDetails = (id) => {
    navigate(`/movie-details/${id}`);
  };
  const counterVal = useSelector((state) => state.counter.value);
  const movieAdded = useSelector((state) => state.favourites.value);
  const dispatch = useDispatch();

  return (
    <div className="card h-100">
      <img
        src={`https://image.tmdb.org/t/p/w500/${movieItem.poster_path}`}
        className="card-img-top"
      />
      <div className="card-body">
        <div className="d-flex justify-content-between ">
          <h5
            className="card-title"
            onClick={() => {
              handleRedirectToDetails(movieItem.id);
            }}
            style={{ width: "80%"}}
          >
            {movieItem.title}{" "}
          </h5>
          <a className="text-danger">
            <FontAwesomeIcon
              icon={movieAdded.includes(movieItem.id) ? faHearts : faHeart}
              style={{ fontSize: "1.5rem" }} // Adjust this size as needed
              onClick={() => {
                movieAdded.includes(movieItem.id)
                  ? dispatch(increaseCounter(counterVal - 1))
                  : dispatch(decreaseCounter(counterVal + 1));
                dispatch(toggleWishList(movieItem.id));
              }}
            />
          </a>
        </div>
        <p>{movieItem.release_date}</p>
      </div>
    </div>
  );
}
