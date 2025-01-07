import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router";
import { useSelector } from "react-redux";
import LanguageContext from "../../context/language";
import './Header.css'


export default function Header() {
  const counterVal = useSelector(state => state.counter.value)
  const { lang , setLang } = useContext(LanguageContext)
  const handleChange=(e)=>{
    console.log(e.target.value)
    setLang(e.target.value);
  }
  return (
    <nav className="navbar navbar-expand bg-body-tertiary">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link" to="/">
              Movie App
            </Link>
            <div className="d-flex">
              <select className="form-select form-select-sm w-25" aria-label=".form-select-sm example" onChange={handleChange} >
                <option defaultValue={"en"} >en</option>
                <option value={"ar"}>ar</option>
              </select>
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
