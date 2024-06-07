import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <link class="nav-link active" aria-current="page" to="/">AddName</link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/Search">SearchName</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/Delete">DeleteName</Link>
        </li>
        <li class="nav-item">
          <link class="nav-link" to="/ViewAll">ViewAll</link>
        </li>
       
      </ul>
    </div>
  </div>
</nav>

    </div>
  )
}

export default NavBar