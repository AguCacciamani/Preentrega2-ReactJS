import { height } from '@fortawesome/free-brands-svg-icons/fa42Group'
import React from 'react'

const ItemListContainerComponent = ({greeting}) => {
  const customStyles = {
    color: "#d41c1c",
    fontSize: "4rem",
    margin: "0 auto",
    padding: "20px 0",
    textShadow: "3px 1px 3px black",
    textAlign: "center",
    width: "100vw",
    height: "80vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
  
    return (
    <div style={customStyles}>{greeting}</div>
  )
}

export default ItemListContainerComponent