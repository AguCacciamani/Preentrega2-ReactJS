import React from 'react'
import { Button } from "react-bootstrap";

const CountComponent = () => {
    const [item, setItem] = React.useState(0);
    
    const handleAddButton = () => {
        if(item >= 10) return;
        setItem(item + 1);
      };
    
      const handleRemoveButton = () => {
        if(item === 0) return;
        setItem(item - 1);
      };
    return (
        <React.Fragment>
        <Button variant="primary" onClick={handleRemoveButton}>
          -
        </Button>
        <span>Item 1: {item} </span>
        <Button variant="primary" onClick={handleAddButton}>
          +
        </Button>
      </React.Fragment>
  )
}

export default CountComponent
