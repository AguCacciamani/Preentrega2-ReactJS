import React, { useEffect } from 'react';

import { height } from '@fortawesome/free-brands-svg-icons/fa42Group';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CountComponent from '../CountComponent/CountComponent';
import "./ItemListContainerComponent.css";
import { getAllProducts } from '../../services/productsServices';

const ItemListContainerComponent = ({ greeting }) => {

  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    getAllProducts()
      .then((res) => setProducts(res.data.products))
      .catch((err) => console.log(err))
  }, []);


  return (
    <>
      <CountComponent />
      <div className='itemListContainerComponent'>
        {greeting}
      </div>
      <div>
        {products.map((products) => {
          return (
            <Card key={products.id} style={{ width: '18rem' }}>
              <Card.Img variant="top" src={products.thumbnail} />
              <Card.Body>
                <Card.Title>{products.title}</Card.Title>
                <Card.Text>
                  {products.description}
                </Card.Text>
                <Button variant="primary">Ir al detalle</Button>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </>
  );
};

export default ItemListContainerComponent