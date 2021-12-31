import React, {useEffect} from 'react';
import NavBar from './components/Navbar/NavBar';
import Footer from './components/Footer/Footer';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import M from 'materialize-css/dist/js/materialize.min.js';

function App() {
  
  useEffect(() => {

      var elems = document.querySelectorAll('.sidenav');
      return M.Sidenav.init(elems);

  }, [])

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
