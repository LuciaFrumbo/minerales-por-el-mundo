import React, { useState } from "react";

const ItemCount = (props) => {
    const [count, setCount] = useState(0)
    const { prueba } = props;

    const sumar = () => {
        count < props.stock && setCount(count + 1);
    };

    const restar = () => {
        count > props.initial && setCount(count - 1);
    };

    const add = () => {
        prueba(count);
    };

    return (
        <div class="itemcount">
        <button disabled={count === props.initial} onClick={restar}> - </button>
        <h2>{count}</h2>
        <button disabled={count === props.stock} onClick={sumar}> + </button>
        <button onClick={add} className="add-btn">AGREGAR AL CARRITO</button>
        </div>
    )

}

export default ItemCount