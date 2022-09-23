import React from 'react';
import  CartWidget from './CartWidget';
import estilos from './navbar.css';

const NavBar = () => {
    return (
        <nav>
            <picture class="header__logo"><img src='./logo.png'/> </picture>
            <ul class="navbar">
                <li class="navbar__item"><a href="">NOSOTROS</a></li>
                <li class="navbar__item"><a href="">PROPIEDADES</a></li>
                <li class="navbar__item"><a href="">COMPRAR</a></li>
                <li class="navbar__item"><a href="">CONTACTO</a></li>
            </ul>
            <CartWidget/>
        </nav>
    );
};

export default NavBar;