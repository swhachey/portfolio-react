import React from 'react'

function Nav() {
    return (
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="/"> <img src="./assets/hachey-final1.jpg" alt="Hachey Logo" width={40} height={40} className="d-inline-block "/>
      SCOTT HACHEY
    </a>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/portfolio">Portfolio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/resume">Resume</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

    )
}

export default Nav