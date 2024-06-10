import React from "react";

import { useParams } from "react-router-dom";

import { getProductById } from "../services/productsServices";

import CountComponent from "../components/CountComponent/CountComponent";

import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Carousel from 'react-bootstrap/Carousel';

const ItemDetailsContainer = () => {
  const [product, setProduct] = React.useState({});

  const { itemId } = useParams();

  React.useEffect(() => {
    getProductById(itemId)
      .then((res) => setProduct(res.data))
      .catch((err) => console.error(err));
  }, [itemId]);

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
        <div style={{alignContent: 'center'}}>
          <img
            src={product.thumbnail}
            alt={product.title}
            style={{ width: 350, height: 350 }}
          />
        </div>
        <div style={{ padding: 10, border: '2px solid grey', borderRadius: '7px', margin: '0.6rem' }}>
          <h1>{product.title}</h1>
          <h2>${product.price}</h2>
          <p style={{paddingRight: '2rem'}}>{product.description}</p>
          <p>Valoracion del producto: {product.rating}/5⭐</p>
          <p>Disponibles: {product.stock}</p>
          <CountComponent /> <br />
          <button style={{color: '#fff', backgroundColor: '#d41c1c'}}>Agregar al carrito</button>
        </div>
      </div>
    </>
  );
};

export default ItemDetailsContainer;