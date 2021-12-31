import React from 'react';
import NavBar from './components/Navbar/NavBar';
import Footer from './components/Footer/Footer';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer gretting='Productos Nuevos' />
      <ItemDetailContainer/>
      <Footer/>
    </div>
  );
}

export default App;
