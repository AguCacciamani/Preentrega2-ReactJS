import React from "react";

import { CartProvider } from "./context/CartContext";

import MainRoutes from "./routes/MainRoutes";

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

    return (
      <CartProvider>
        <MainRoutes />
      </CartProvider>  
    );
}

export default App