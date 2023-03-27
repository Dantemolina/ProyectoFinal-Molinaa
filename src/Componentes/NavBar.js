import React from 'react'
import logo from '../imagenes/logo.png'
import CartWidget from './CartWidget';
import {Link, link} from "react-router-dom"


const NavBar = () => {


  return (
    <>
    
    <CartWidget />

    <nav class="navbar navbar-expand-lg bg">
      <Link to={"/"}>
    <img class="logo" src={logo}></img>
    </Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"      data-bs-target="#navbarSupportedContent"aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" href="/">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/SobreMi">Sobre mi</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Productos
              </a>
               <ul class="dropdown-menu">
                <li><Link to="/Bazar" class="dropdown-item" >Bazar</Link></li>
                <li><Link to="/Decoartesanal" class="dropdown-item" href="#">Deco Artesanal</Link></li>
                <li><Link to="/Decohogar" class="dropdown-item" href="#">Deco Hogar</Link></li>
                <li><Link to="/Mates" class="dropdown-item" href="#">Mates</Link></li>
                <li><Link to="/Organizadores" class="dropdown-item" href="#">Organizadores</Link></li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Contacto">Contacto</a>
            </li>
          </ul>
        </div>
      </nav>
  </>

  )
}

export default NavBar
