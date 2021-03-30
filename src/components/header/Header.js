import React, {useState, useRef, useEffect} from "react";

import { NavLink, Link } from "react-router-dom";

import './Header.css';

const Header = () => {
      const dropdownRef = useRef(null);
      const [isActive, setIsActive] = useState(false);
    
      const [searchString, setSearchString] = useState();
    
      const [showProfileOptions, setShowProfileOptions] = useState(false);
    
      useEffect(() => {
        const pageClickEvent = (e) => {
          if (
            dropdownRef.current !== null &&
            !dropdownRef.current.contains(e.target)
          ) {
            console.log(e);
            setIsActive(!isActive);
          }
        };
    
        if (isActive) {
          window.addEventListener("click", pageClickEvent);
        }
    
        return () => {
          window.removeEventListener("click", pageClickEvent);
        };
      }, [isActive]);

  
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark menuContainer"
      style={{ background: "transparent" }}
    >
     {/* // <Link className="navbar-brand" to="/home" style={{flexGrow: 1}}> */}
        <div className="navbar-brand" style={{flexGrow: 1}}>
          <h4>Marappa Exclusive Warehouse</h4>
        </div>
      {/* </Link> */}
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        onClick={() => setIsActive(!isActive)}
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        ref={dropdownRef}
        className={`navbar-collapse menu ${isActive ? "active" : "inactive"}`}
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/home" activeClassName="active">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/aboutus">
              About Us
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/properties">
              Our Properties
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/gallery">
              Gallery
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/location">
              Location
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/contactus">
              Contact Us
            </NavLink>
          </li>
        </ul>
        {/* <form className="form-inline my-2 my-lg-0">
          <button
            type="button"
            className="btn btn-info my-2 my-sm-0 ml-2"
          >
            Contact Us
          </button>
          
          <div>
            <img className="customAvatar" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>
              <button className="btn btn-info my-2 my-sm-0 ml-2">login</button>
          </div>
        </form> */}
      </div>
    </nav>
  );
};

export default Header;
