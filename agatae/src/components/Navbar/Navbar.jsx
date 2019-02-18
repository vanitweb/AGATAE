import React from 'react';
import {NavLink} from 'react-router-dom'
import  './Navbar.module.css';

const Navbar = () => {
	return <nav className='flex-container '>
	<ul>
	  <li> <a href="/glxavor" className="dropbtn">Գլխավոր</a>
    </li>
  	<li><a href="#" className="dropbtn">Արվեստ</a>
       <div className="dropdown-content">
        <p><a href="/par">Պար</a></p>
        <p><a href="/yerg">Երգ</a></p>
       </div></li>
  	<li><a href="#" className="dropbtn">Կրթություն</a>
       <div className="dropdown-content">
        <p><a href="/hayeren">Հայերեն</a></p>
        <p><a href="/ruseren">Ռուսերեն</a></p>
        <p><a href="/angleren">Անգլերեն 3</a></p>
       </div></li>
  	<li><a href="#" className="dropbtn">Սպորտ</a>
       <div className="dropdown-content">
        <p><a href="/karate">Կառատե</a></p>
        <p><a href="/dzyudo">Ձյուդո</a></p>
        <p><a href="/shaxmat">Շախմատ 3</a></p>
       </div></li>
  	<li><a href="/ayl" className="dropbtn">Այլ</a>
    </li>
  	<li><a href="/merMasin" className="dropbtn">Մեր մասին</a>
    </li>
  </ul>
 </nav>
}
export {Navbar};

