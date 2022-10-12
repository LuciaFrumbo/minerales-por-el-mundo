import React from 'react';
import { Link } from 'react-router-dom';

const Item =({img, nombre, id, origen}) => {
    return (
        <div key={id} class="product__card"> 
        <p class="product__card__name">{nombre}</p>
        <p class="product__card__origen">{origen}</p>
        <picture> <img class="product__card__img" src={img}/> </picture>
        <div class="product__card__text">
            <div class="product__unit">
                <Link to={`/item/${id}`} class="product__card__buy" id={id}>MAS DETALLES</Link>
            </div>
        </div>
    </div>
    )
}

export default Item