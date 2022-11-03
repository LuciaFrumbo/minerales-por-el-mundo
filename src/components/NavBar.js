import React from 'react';
import  CartWidget from './CartWidget';
import {Link, NavLink} from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
            <Link to="/">
            <picture class="header__logo"><img src='https://res.cloudinary.com/dkflhztri/image/upload/v1665545196/piedras/logo_ms72dv.jpg' alt="Logo de la marca Minerales Por El Mundo"/> </picture>
            </Link>
            <ul class="navbar">
                <li class="navbar__item"><NavLink to="/bruto">BRUTO</NavLink></li>
                <li class="navbar__item"><NavLink to="/tamboreadas">TAMBOREADAS</NavLink></li>
                <li class="navbar__item navbar__submenu"><NavLink to="">TRABAJADO</NavLink>
                <ul class="navbar__submenu__item">
                <li class="navbar__item"><NavLink class="navbar__item--hover" to="/pendulo">PENDULOS</NavLink></li>
                <li class="navbar__item"><NavLink class="navbar__item--hover" to="/esfera">ESFERAS</NavLink></li>
                </ul>
                </li>
            </ul>
            <div class="cart">
            <Link to="/Cart">
            <CartWidget/>
            </Link>
            </div>
        </nav>
    );
};

export default NavBar;