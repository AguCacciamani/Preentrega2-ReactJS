import { height } from '@fortawesome/free-brands-svg-icons/fa42Group';

import React from 'react';

import CountComponent from '../CountComponent/CountComponent';
import "./ItemListContainerComponent.css";


const ItemListContainerComponent = ({ greeting }) => {
  

  return (
    <>
      <CountComponent />
      <div className='itemListContainerComponent'>
        {greeting}
      </div>
    </>
  );
};

export default ItemListContainerComponent