import { useState } from "react"

const ItemCount = () => {
    const [count, setCount] = useState(0)

    const increment = () => {
        if (count<5) {
            setCount(count + 1)
        }
    }
    const decrement = () => {
        if (count>0) {
            setCount(count - 1)
        }
    }
    return (
        <div class="itemcount">
        <button onClick={decrement}> - </button>
        <h2>{count}</h2>
        <button onClick={increment}> + </button>
        <button>Agregar al carrito</button>
        </div>
    )

}

export default ItemCount