import React from 'react'
import { CartContext } from '../context/CartContext';
import { Button } from 'react-bootstrap';
import { collection, getFirestore, addDoc } from "firebase/firestore";
import Swal from 'sweetalert2';


const Checkout = () => {
    const [name, setName] = React.useState("");
    const [lastName, setLastName] = React.useState("");
    const [numberPhone, setNumberPhone] = React.useState("");
    const [email, setEmail] = React.useState("");

    const { cart } =
        React.useContext(CartContext);

    const createOrder = () => {
        const items = cart.map(item => (
            {
                id: item.id,
                title: item.title,
                quantity: item.quantity,
                total: item.price * item.quantity
            }
        ))

        const order = {
            items: items,
            buyer: {
                name,
                lastName,
                numberPhone,
                email
            }
        }

        if (name !== "" && lastName !== "" && numberPhone !== "") {
            const db = getFirestore();
            const ordersCollection = collection(db, "orders");

            addDoc(ordersCollection, order).then(({ id }) => {
                Swal.fire({
                    title: "Tu orden de compra se creo con exito!",
                    text: "Por cualquier consulta podes comunicarte con soporte con el siguiente codigo: " + id,
                    icon: "success",
                    confirmButtonText: "Aceptar"
                  });
            })
        } else {
            Swal.fire({
                title: "Parece que falta información",
                text: "Por favor, rellena todos los campos",
                icon: "error"
              });
        }
    };

    return (
        <>
            <h1 style={{ margin: "20px auto 40px", fontSize: "3rem", textAlign: "center", textShadow: "1px 1px 5px black" }}>Datos y forma de pago</h1>
            <form style={{ width: "40vw", display: "flex", flexDirection: "column", justifyContent: "center", margin: "20px auto" }}>
                <label className='label' for="name">
                    Nombre:
                    <input id="name" name="name" className='input' type="text" onChange={(e) => setName(e.target.value)} />
                </label>
                <label className='label' for="lastName">
                    Apellido:
                    <input id="lastName" name="lastName" className='input' type="text" onChange={(e) => setLastName(e.target.value)} />
                </label>
                <label className='label' for="phoneNumber">
                    Numero de telefono:
                    <input id="phoneNumber" name='phoneNumber' className='input' type="number" onChange={(e) => setNumberPhone(e.target.value)} />
                </label>
                <label className='label' for="email">
                    E-mail:
                    <input id="email" name='email' className='input' type="e-mail" onChange={(e) => setEmail(e.target.value)} />
                </label>
                <label className='label' for="paymentMethod">
                    Selecciona tu forma de pago:
                    <select style={{ marginLeft: "10px", cursor: "pointer" }} id='paymentMethod' name="paymentMethod">
                        <option value="efectivo">Efectivo</option>
                        <option value="tarjeta">Tarjeta</option>
                        <option value="transferencia">Transferencia</option>
                    </select>
                </label>
                <Button className='comprar' onClick={createOrder} style={{ marginTop: "20px" }}>Comprar</Button>
            </form>
        </>
    )
}

export default Checkout