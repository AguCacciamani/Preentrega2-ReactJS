import React, { useEffect } from "react";
import ItemListContainerComponent from "../components/ItemListContainerComponent/ItemListContainerComponent";
import { useParams } from "react-router-dom";
import { getProductsByCategory } from "../services/productsServices";
import Card from 'react-bootstrap/Card';
import { CardSubtitle } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LoaderComponent from "../components/LoaderComponent/LoaderComponent";


const Category = () => {
  const [products, setProducts] = React.useState([]);
  const { categoryId } = useParams();
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    getProductsByCategory(categoryId)
      .then((res) => {
        setProducts(res.data.products);
      })
      .catch((err) => {
        console.error(err);
      }).finally (() => {
        setLoading(false);
      })
  }, [categoryId]);

  return loading ? <LoaderComponent/> : (
    <>
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

export default Category;