import {addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { database } from '../services/firebaseConfig';
import swal from 'sweetalert';

const Form =() => {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [email2, setEmail2] = useState('');
    const [telefono, setTelefono] = useState('');
    const [orderId, setOrderId] = useState('');

    const { cart, total, borrarTodo } = useContext(CartContext);

    const precioTotal = total();

    const handleSubmit = (e) => {
        e.preventDefault();
        const order = {
            comprador: {name, lastName, email, email2, telefono},
            items: cart,
            total: precioTotal,
            fecha: serverTimestamp(),
        }

    const orderCollection = collection(database, "orders")
    addDoc(orderCollection, order)
    .then((res) => {
        setOrderId(res.id);
        borrarTodo();
    })
    .catch((error) => {
        console.log(error);
    })
};

    const handleChangeName = (e) => {
        setName(e.target.value);
    };

    const handleChangeLastName = (e) => {
        setLastName(e.target.value);
    };

    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    };

    const handleChangeEmail2 = (e) => {
        setEmail2(e.target.value);
    };

    const handleChangeTelefono = (e) => {
        setTelefono(e.target.value);
    };

    if (orderId) {
        if (email!=="" && email===email2) {
            return (
                <div class="order">
                <p> Muchas Gracias Por Tu Compra</p>
                <p> Te enviaremos un email con los datos de pago</p>
                <h6> el ID de tu compra es {orderId} </h6>
                <h5> NO TE OLVIDES DE ANOTARLO</h5>
                </div>
            );  
    
        }
        else (
            swal("El email debe coincidir")
        )

    }

    return (
        <div>
            <form class="formulario" onSubmit={handleSubmit} action="">
                <label>NOMBRE</label>
                <input
                    type="text"
                    name="nombre"
                    placeholder="NOMBRE"
                    onChange={handleChangeName}
                    value={name}
                />
                <label>APELLIDO</label>
                <input
                    type="text"
                    name="apellido"
                    placeholder="APELLIDO"
                    onChange={handleChangeLastName}
                    value={lastName}
                />
                <label>EMAIL</label>
                <input
                    type="email"
                    name="email"
                    placeholder="ejemplo@ejemplo.com"
                    onChange={handleChangeEmail}
                    value={email}
                />
                <label>REPETIR EMAIL</label>
                <input
                    type="email"
                    name="email2"
                    placeholder="ejemplo@ejemplo.com"
                    onChange={handleChangeEmail2}
                    value={email2}
                />
                <label>TELEFONO</label>
                <input
                    type="number"
                    name="telefono"
                    placeholder="TELEFONO"
                    onChange={handleChangeTelefono}
                    value={telefono}
                />
                <button>ENVIAR</button>
            </form>
        </div>
    );
};

export default Form;