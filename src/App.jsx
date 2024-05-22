import React from 'react';
import ItemListContainerComponent from './assets/components/ItemListContainerComponent/ItemListContainerComponent';
import NavBarComponent from './assets/components/NavBarComponent/NavBarComponent';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {


  return (
    <>
      <NavBarComponent/>
      <ItemListContainerComponent greeting={"Bienvenidos a mi landing page!"}/>
    </>
  )
}

export default App
