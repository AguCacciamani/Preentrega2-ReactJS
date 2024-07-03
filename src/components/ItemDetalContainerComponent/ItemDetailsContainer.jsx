import React from "react";
import { CartContext } from "../../context/CartContext";


const ItemDetailsContainer = ({product}) => {
  
  const { addToCart, removeFromCart } = React.useContext(CartContext);
  const [quantity, setQuantity] = React.useState(0);

  const handleAdd = () => {
    setQuantity(quantity + 1);
    addToCart(product, 1);
  };

  const handleRemove = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
      removeFromCart(product, 1);
    }
  };
 
  return (
    <>
      <div className="itemDetailContainer" style={{ width: '97vw', margin: '1.5rem auto', display: "flex", backgroundColor: '#737373', border: '1px solid grey', borderRadius: '7px' }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            marginLeft: '1rem'
          }}
        >
          {product.images ? (
            product.images.map((image, index) => {
              return (
                <img
                  key={index}
                  src={image}
                  alt={product.title}
                  style={{ width: 100, height: 100 }}
                />
              );
            })
          ) : (
            <img
              src={product.thumbnail}
              alt={product.title}
              style={{ width: 100, height: 100 }}
            />
          )}
        </div>
        <div style={{ alignContent: 'center' }}>
          <img
            src={product.thumbnail}
            alt={product.title}
            style={{ width: 350, height: 350 }}
          />
        </div>
        <div style={{ padding: 10, border: '2px solid grey', borderRadius: '7px', margin: '0.6rem' }}>
          <h1 style={{fontSize:"2.5rem"}}>{product.title}</h1>
          <h2>${product.price}</h2>
          <p style={{ paddingRight: '2rem' }}>{product.description}</p>
          <p style={{marginBottom:"0.7rem"}}>Valoracion del producto: {product.rating}/5⭐</p>
          {product.stock < 10 ? (<div style={{color: "black", backgroundColor:"#ff000066", display:"inline", borderRadius: "3px", padding:"3px" }}>Últimas {product.stock} unidades!</div>) : (<div>Stock: {product.stock}</div>)}
          <p style={{marginTop: "0.7rem", marginBottom: "0"}}>Agregar al carrito:</p>
          <div style={{ display: "flex", alignItems:"center" }}>
            <button className="detailButton" onClick={handleRemove}>-</button>
            <span>{quantity}</span>
            <button className="detailButton" onClick={handleAdd}>+</button>
          </div>
        </div>
      </div>
    </>
  );
};



export default ItemDetailsContainer;