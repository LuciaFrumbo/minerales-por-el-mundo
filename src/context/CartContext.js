import { createContext, useState } from "react";
import swal from 'sweetalert';

export const CartContext = createContext();

const Provider = ({children}) => {
    const [cart, setCart] = useState([]);

    const agregarAlCarrito = (item, cantidad) => {
        const producto = {...item, cantidad};
        if (estaEnelCarrito(producto.id)) {
        sumarCantidad(producto)
        swal(`Se ha agregado ${producto.nombre} al carrito`)
        } else {
            setCart([...cart, producto]);
            swal(`Se ha agregado ${producto.nombre} al carrito`)
        }
    };
    const sumarCantidad = (prodAgregado) => {
        const carritoActualizado = cart.map((prodDelCart) =>{
            if (prodDelCart.id=== prodAgregado.id){
                const prodActualizado = {...prodDelCart,
                cantidad: prodAgregado.cantidad
            };
            return prodActualizado;
            } else {
                return prodDelCart;
            }

        })
        setCart(carritoActualizado);
    }

    const estaEnelCarrito = (id) => cart.some((prod) => prod.id === id);
    
    const borrarTodo = () => setCart([])

    const borrarUno = (id) => {
        setCart(cart.filter((prod) => prod.id !== id))
         (swal(`Se ha eliminado el producto del carrito`))
    }

    const totalUnidades = () => {
        let acc = 0;
        const copia = [...cart]
        copia.forEach((prod) => {
            acc = acc + prod.cantidad;
        });
        return acc;
    }

    const total = () => {
        let contador = 0;
        const copy = [...cart]
        copy.forEach((prod) => {
            contador = contador + prod.cantidad*prod.precio
        })
        return contador
    };
 

    return (
        <CartContext.Provider value={{ cart, agregarAlCarrito, borrarTodo, borrarUno, totalUnidades, total, }}>
            {children}
        </CartContext.Provider>
    )
}

export default Provider