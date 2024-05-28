import React from "react";

import NavBarComponent from "./components/NavBarComponent/NavBarComponent";
import ItemListContainerComponent from "./components/ItemListContainerComponent/ItemListContainerComponent";

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

    return (
        <>
            <NavBarComponent />
            <ItemListContainerComponent greeting="Bienvenidos a CALI-STORE By CALIS-TECHNICS" />
        </>
    )
}

export default App