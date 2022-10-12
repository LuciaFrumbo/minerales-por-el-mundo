import React from 'react';
import  CartWidget from './CartWidget';
import {Link, NavLink} from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
            <Link to="/">
            <picture class="header__logo"><img src='https://res.cloudinary.com/dkflhztri/image/upload/v1665545196/piedras/logo_ms72dv.jpg'/> </picture>
            </Link>
            <ul class="navbar">
                <li class="navbar__item"><NavLink to="/bruto">BRUTO</NavLink></li>
                <li class="navbar__item"><NavLink to="/tamboreadas">TAMBOREADAS</NavLink></li>
                <li class="navbar__item"><NavLink to="/trabajado">TRABAJADO</NavLink></li>
                <li class="navbar__item"><NavLink to="/luminarias">LUMINARIAS</NavLink></li>
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