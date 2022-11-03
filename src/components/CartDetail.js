import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartDetail = ({prod}) => {
    const {borrarUno} = useContext(CartContext)
    return (
  <tbody>
    <tr key={prod.id}>
      <th scope="row">{prod.cantidad}</th>
      <td>{prod.nombre}</td>
      <td>{prod.clasificacion}</td>
      <td>{prod.precio}</td>
      <td>{prod.precio*prod.cantidad}</td>
      <td onClick={()=> borrarUno(prod.id)}><FontAwesomeIcon icon={faTrash} /></td>
    </tr>
  </tbody>
    )
}

export default CartDetail
