import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { CardSubtitle } from 'react-bootstrap';

import { height } from '@fortawesome/free-brands-svg-icons/fa42Group';
import { getMensShirts, getMensShoes, getSportAccessories, getWomensDresses, getWomensShoes } from '../../services/productsServices';


import "./ItemListContainerComponent.css";
import { Link } from 'react-router-dom';


const ItemListContainerComponent = ({ greeting }) => {

  const [products, setProducts] = React.useState([]);
  

  React.useEffect(() => {
    const fetchProducts = async () => {
        try {
            const [mensShirts, mensShoes, sportAccessories, womensDresses, womensShoes] = await Promise.all([
                getMensShirts(),
                getMensShoes(),
                getSportAccessories(),
                getWomensDresses(),
                getWomensShoes()
            ]);
            const allProducts = [
                ...mensShirts.data.products,
                ...mensShoes.data.products,
                ...sportAccessories.data.products,
                ...womensDresses.data.products,
                ...womensShoes.data.products
            ];

            setProducts(allProducts);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    fetchProducts();
  }, []);

  return (
    <>
      
      <div className='itemListContainerComponent'>
        {greeting}
      </div>
      <div className='cardsContainer'>
        {products.map((product) => {
          return (
            <Card key={product.id} style={{ width: '18rem' }}>
              <Card.Img variant="top" src={product.thumbnail} />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <CardSubtitle>${product.price}</CardSubtitle>
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