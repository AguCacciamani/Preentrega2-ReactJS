import React, { useEffect } from 'react';

import { height } from '@fortawesome/free-brands-svg-icons/fa42Group';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CountComponent from '../CountComponent/CountComponent';
import "./ItemListContainerComponent.css";
import { deleteProductById, getAllProducts } from '../../services/productsServices';
import { CardSubtitle } from 'react-bootstrap';

const ItemListContainerComponent = ({ greeting }) => {

  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    getAllProducts()
      .then((res) => setProducts(res.data.products))
      .catch((err) => console.log(err))
  }, []);

  const deleteProduct = (id) => {
    deleteProductById(id)
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  };

  return (
    <>
      <CountComponent />
      <div className='itemListContainerComponent'>
        {greeting}
      </div>
      <div className='cardsContainer'>
        {products.map((products) => {
          return (
            <Card key={products.id} style={{ width: '18rem' }}>
              <Card.Img variant="top" src={products.thumbnail} />
              <Card.Body>
                <Card.Title>{products.title}</Card.Title>
                <CardSubtitle>
                  {products.price}
                </CardSubtitle>
                <Card.Text>
                    {products.description}
                </Card.Text>
                {products.id === 137 ? (
                  <Button variant="danger" onClick={() => deleteProduct(products.id)}> Eliminar producto</Button>
                ) : (
                  <Button variant='primary'>Ir al detalle</Button>
                )}
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </>
  );
};


export default ItemListContainerComponent