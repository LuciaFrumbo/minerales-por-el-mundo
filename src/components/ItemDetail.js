import { useContext, useState } from 'react';
import { CartContext } from "../context/CartContext";
import ItemCount from "./ItemCount"

const ItemDetail = ({item}) => {
    const [unidades, setUnidades] = useState(0);

    const {agregarAlCarrito} = useContext(CartContext);

    const prueba = (numero) => {
        setUnidades(numero);
        agregarAlCarrito(item, numero);
    };

    return ( 
        <div class="product__text">
            <img class="item__card__img" src={item.img} alt="" />
                <div class="item__card">
                <div class="item__detail">
                    <h1 class="item__title">{item.nombre}</h1>
                    <h2>Origen: {item.origen}</h2>
                    <h3>{item.precio} USD</h3>
                    <p class="item__description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                    rem, consequatur accusamus dicta incidunt sapiente cum ipsa,
                    ducimus
                    </p>
                </div>
                <ItemCount prueba={prueba} stock={item.stock} initial={1}/>
                </div>
            </div>
    );
};

    export default ItemDetail