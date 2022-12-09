import React from "react";
import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import "./NavBar.css";

const Navbar = () => {
  const [showWatchlist, setShowWatchList] = useState(true);
  const { logoutUser, user } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div className="pretty-background">
      <ul>
        <li className="brand">
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <b>iStock App</b>
          </Link>
          <div>
      </div>
        </li>
        <li>
          {user ? (
            <button onClick={logoutUser}>Logout</button>
          ) : (
            <button onClick={() => navigate("/login")}>Login</button>
          )}
      <div>
      {showWatchlist ? (
        <div className="dropdown">
        <button className="dropdown" onClick={() => setShowWatchList(!showWatchlist)}>Display Options</button>
          </div>
        ) : (
          <div className="dropdown">
            <div className="dropdown-content">
          <a href="http://localhost:3000/Watchlist/"><li className='listItem'>Watch List</li></a>
          <a href="http://localhost:3000/StockSearch/"><li className='listItem'>Stock Search</li></a>
          <a href="http://localhost:3000/StockNews/"><li className='listItem'>Stock News</li></a>
          <a href="http://localhost:3000/CompanyProfile/"><li className='listItem'>Company Profile</li></a>
      </div>
        <button className="dropbtn" onClick={() => setShowWatchList(!showWatchlist)}>Hide Optionts</button>
          </div>
      
      )}
      </div>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
