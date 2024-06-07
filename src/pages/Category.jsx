import React, { useEffect } from "react";
import ItemListContainerComponent from "../components/ItemListContainerComponent/ItemListContainerComponent";
import { useParams } from "react-router-dom";
import { getProductsByCategory } from "../services/productsServices";
import Card from 'react-bootstrap/Card';
import { CardSubtitle } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Category = () => {
  const [products, setProducts] = React.useState([])
  const { categoryId } = useParams()

  useEffect(() => {
    getProductsByCategory(categoryId)
      .then((res) => {
        setProducts(res.data.products);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [categoryId]);

  return products.map((product) => {
    return (
      <Card key={product.id} style={{ width: '18rem' }}>
        <Card.Img variant="top" src={product.thumbnail} />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <CardSubtitle>{product.price}</CardSubtitle>
          <Link to={`/item/${product.id}`}>Ir al detalle</Link>
        </Card.Body>
      </Card>
    );
  });
};

export default Category;