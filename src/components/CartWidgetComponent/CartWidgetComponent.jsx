import React from 'react';
import { Link } from "react-router-dom";
import { CartContext } from '../../context/CartContext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const CartWidgetComponent = () => {
  const { cart } = React.useContext(CartContext);
  const customStyles = {
    color: "red",
    fontSize: "1.3rem",
    marginRight: "0.5rem"
  }

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

    return (
    <div>
      <Link to="/cart" style={{ textDecoration: "none" }}>
        <FontAwesomeIcon icon={faCartShopping} style={customStyles} />
        <span style={customStyles}>{totalItems}</span>
      </Link>
    </div>
    );
}

export default CartWidgetComponent;