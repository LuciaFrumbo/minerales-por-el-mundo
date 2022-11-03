import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartDetail from "./CartDetail";
import "bootstrap/dist/css/bootstrap.min.css"
import { Link } from "react-router-dom";

const Cart = () => {
    const {cart, total} = useContext(CartContext)
    if (cart.length ===0) {
        return <div class="carrito__vacio"><h1>EL CARRITO ESTÁ VACÍO</h1></div>
    }
    return (
        <div class="finalizar">
            <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">Unidades</th>
      <th scope="col">Nombre</th>
      <th scope="col">Tipo</th>
      <th scope="col">Precio Unitario</th>
      <th scope="col">Subtotal</th>
      <th scope="col"></th>
    </tr>
  </thead>
            {
                
                cart.map((prod) =>(
                    <CartDetail prod={prod}/>
                ))
            }
            </table>
            <div>
                <p>PRECIO TOTAL: {total()}</p>
                <Link to="/checkout" class="finalizar__compra">FINALIZAR COMPRA</Link></div>
        </div>
    )
}

export default Cart;    