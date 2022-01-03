import React, {useEffect} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar/NavBar';
import Footer from './components/Footer/Footer';
import Home from './components/Pages/Home';
import Store from './components/Pages/Store';
import ItemListContainer from './components/Products/ItemListContainer';
import ItemDetailContainer from './components/Products/ItemDetailContainer';
import M from 'materialize-css/dist/js/materialize.min.js';

function App() {
  
  useEffect(() => {

      var elems = document.querySelectorAll('.sidenav');
      return M.Sidenav.init(elems);

  }, [])

  return (
    <div className="App">
      <BrowserRouter>

        <NavBar/>
        <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/store" element={<Store/>} />
            <Route exact path="/" element={<Home/>} />
        </Routes>
        {/* <ItemListContainer gretting='Productos Nuevos' />
        <ItemDetailContainer/> */}
        <Footer/>
      </BrowserRouter>

    </div>
  );
}

export default App;
