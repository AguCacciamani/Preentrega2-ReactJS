import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import ItemDetailsContainer from '../pages/ItemDetailsContainer';
import Category from '../pages/Category';
import NavBarComponent from '../components/NavBarComponent/NavBarComponent';

const MainRoutes = () => {
  return (
    <BrowserRouter>
        <NavBarComponent />
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/item/:itemId' element={<ItemDetailsContainer />} />
            <Route path='/category/:categoryId' element={<Category />} />
        </Routes>
    </BrowserRouter>
  )
}

export default MainRoutes 