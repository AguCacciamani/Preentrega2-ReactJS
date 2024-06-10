import React from 'react'
import { Button } from "react-bootstrap";

const CountComponent = () => {
  const [item, setItem] = React.useState(1);

  const handleAddButton = () => {
    if (item >= 50) return;
    setItem(item + 1);
  };

  const handleRemoveButton = () => {
    if (item === 1) return;
    setItem(item - 1);
  };
  return (
    <React.Fragment>
      <Button variant="primary" onClick={handleRemoveButton}>
        -
      </Button>
      <span>Agregar: {item} </span>
      <Button variant="primary" onClick={handleAddButton}>
        +
      </Button>
    </React.Fragment>
  )
}

export default CountComponent
