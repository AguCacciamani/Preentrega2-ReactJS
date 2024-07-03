import React from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";


const Cart = () => {
  const { cart, removeFromCart, deleteFromCart, addToCart } =
    React.useContext(CartContext);

  const handleRemoveOne = (item) => {
    removeFromCart(item, 1);
  };

  const handleAddOne = (item) => {
    addToCart(item, 1);
  };

  const handleDeleteItem = (item) => {
    deleteFromCart(item);
  };

  return (
    <div>
    <h1 style={{ justifyContent: "center", display: "flex", textShadow: "1px 1px 5px black" }}>Tu Carrito de Compras</h1>
      {cart.length > 0 ? (
        <div style={{ display: "flex", flexDirection: "column", }}>
          <div style={{ flex: 1, padding: "10px" }}>
            {cart.map((item, index) => (
              <div key={index} style={{ margin: "10px", border: "1px solid gray", padding: "24px", display: "flex" }} >
                <article style={{ display: "flex", width: "63%" }}>
                  <div className="imgContainer">
                    <img src={item.thumbnail} style={{ width: 100, height: 100 }} />
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "space-around", overflow: "hidden" }}>
                    <h3 style={{ fontSize: "1rem", display: "inline-block", marginLeft: "10px" }}>{item.title}</h3>
                    <button onClick={() => handleDeleteItem(item)} style={{ color: '#d41c1c', backgroundColor: 'transparent' }}>Eliminar</button>
                  </div>
                </article>
                <div style={{ marginLeft: "4rem", display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <div>
                    <button onClick={() => handleRemoveOne(item)} className="detailButton">-</button>
                    <p style={{ display: "inline-block" }}>{item.quantity}</p>
                    <button onClick={() => handleAddOne(item)} className="detailButton">+</button>
                  </div>
                  <p style={{ fontSize: "12px", color: "#cbcbcb" }}>{item.stock} disponibles</p>
                </div>
                <p style={{ marginLeft: "4rem", display: "inline-block" }}>Total: ${item.price * item.quantity}</p>
              </div>
            ))}
          </div>
          <Link to={'/checkout'} style={{ display: "flex", justifyContent: "center", marginBottom: "1rem", textDecoration: "none" }}><Button className="comprar" variant="success">Siguiente</Button></Link>
        </div>
      ) : (
        <p>Tu carrito está vacío</p>
      )}
    </div>
  );
};

export default Cart;