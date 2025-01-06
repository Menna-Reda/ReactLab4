import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router";
import './Header.css'
import { useSelector } from "react-redux";
export default function Header() {
  const counterVal = useSelector(state=> state.counter.value)
  return (
    <nav className="navbar navbar-expand bg-body-tertiary">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link" to="/">
              Movie App
            </Link>
            <div className="d-flex">
            <Link className="nav-link" to="/register">Register</Link>
            <Link className="nav-link" to="/wish-list">
            <FontAwesomeIcon icon={faHeart} />  Wish list
            </Link>
            <p>{counterVal}</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
