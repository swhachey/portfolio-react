import React from 'react'
import {Link} from "react-router-dom"

function Nav() {
    return (
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link to="/">
    <a className="navbar-brand" href="/"> <img src={"./assets/hachey-final1.jpg"} alt="Hachey Logo" width={40} height={40} className="d-inline-block "/>
      SCOTT HACHEY
    </a>
    </Link>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/">
          <a className="nav-link" aria-current="page">Home</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/portfolio">
          <a className="nav-link">Portfolio</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/resume">
          <a className="nav-link">Resume</a>
          </Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

    )
}

export default Nav