import React from 'react'

const ClaseRendering = () => {
  const stock = 10;
  if(stock < 10) {
    return <>
        ULTIMAS UNIDADES!
    </>;
  } else {
    <>
        Hay stock
    </>;
  }
}

export default ClaseRendering