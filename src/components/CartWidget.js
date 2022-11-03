import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'
import {CartContext} from "../context/CartContext"
import { useContext } from 'react';

function CartWidget () {
    const {totalUnidades} = useContext(CartContext)
    return (
        <><FontAwesomeIcon icon={faCartShopping} /><span>{totalUnidades()}</span></>
    )

}

export default CartWidget;
