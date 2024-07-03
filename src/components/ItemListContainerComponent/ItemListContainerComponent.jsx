import React from 'react';
import Card from 'react-bootstrap/Card';
import { CardSubtitle } from 'react-bootstrap';

import "./ItemListContainerComponent.css";
import { Link } from 'react-router-dom';

const ItemListContainerComponent = ({ products }) => {

  return (
    <>
      <div >
        <h1 className='greetingComponent'>Bienvenidos a Cali-Store!</h1>
      </div>
      <div className='cardsContainer'>
        {products.map((product) => {
          return (
            <Card className='cards' key={product.id} style={{ width: '18rem', boxShadow: "2px 2px 6px 0px #272727" }}>
              <Card.Img variant="top" src={product.thumbnail} />
              <Card.Body>
                <CardSubtitle>${product.price}</CardSubtitle>
                <Card.Title style={{fontSize:"1rem"}}>{product.title}</Card.Title>
                <Link to={`/item/${product.id}`}><button style={{color: 'white', backgroundColor: '#d41c1c'}}>Ir al detalle</button></Link>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </>
  );
};


export default ItemListContainerComponent