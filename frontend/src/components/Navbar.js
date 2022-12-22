import React from 'react'
import {NavLink} from "react-router-dom";
import {Button} from '@mui/material';
const Navbar = () => {
  return (
    <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      
      <div class="container-fluid">
        
        <button
          class="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="fas fa-bars"></i>
        </button>
    
       
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          
          {/* <a class="navbar-brand mt-2 mt-lg-0" href="#">
            <img
              src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
              height="15"
              alt="MDB Logo"
              loading="lazy"
            />
          </a> */}
          
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          
            {/* <li class="nav-item">
              <NavLink className="nav-link" to="/Signup">Signup</NavLink>
            </li> */}
            {/* <li class="nav-item">
              <NavLink className="nav-link" to="/Login">Login</NavLink>
            </li> */}
            <li class="nav-item">
              <NavLink className="nav-link" to="/Addcode">Addcode</NavLink>
            </li>
            <li class="nav-item">
              <NavLink className="nav-link" to="/Browse">Browse</NavLink>
            </li>
            <li class="nav-item">
              <NavLink className="nav-link" to="/Viewer">Viewer</NavLink>
            </li>
            
          </ul>
        
        </div>
        
    
        
        <div class="d-flex align-items-center">
          
          {/* <a class="text-reset me-3" href="#">
            <i class="fas fa-shopping-cart"></i>
          </a> */}
          <Button>
          <NavLink className="nav-link" to="/Signup">Signup</NavLink>
          </Button>
    
          
          <div class="dropdown">
            <a
              class="text-reset me-3 dropdown-toggle hidden-arrow"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-mdb-toggle="dropdown"
              aria-expanded="false"
            >
              {/* <i class="fas fa-bell"></i>
              <span class="badge rounded-pill badge-notification bg-danger">1</span> */}
              <Button>
              <NavLink className="nav-link" to="/Login">Login</NavLink>
              </Button>
            </a>
            <ul
              class="dropdown-menu dropdown-menu-end"
              aria-labelledby="navbarDropdownMenuLink"
            >
            </ul>
          </div>
          
          <div class="dropdown">
            <a
              class="dropdown-toggle d-flex align-items-center hidden-arrow"
              href="#"
              id="navbarDropdownMenuAvatar"
              role="button"
              data-mdb-toggle="dropdown"
              aria-expanded="false"
            >
              {/* <img
                src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                class="rounded-circle"
                height="25"
                alt="Black and White Portrait of a Man"
                loading="lazy"
              /> */}
              <Button>Logout</Button>
            </a>
            <ul
              class="dropdown-menu dropdown-menu-end"
              aria-labelledby="navbarDropdownMenuAvatar"
            >
            </ul>
          </div>
        </div>
        
      </div>
      
    </nav>
    </div>
  )
}

export default Navbar