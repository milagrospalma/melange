import React, { useState } from 'react'
import ItemCount from './ItemCount';
import ItemList from './ItemList';

function ItemListContainer(props) {

    const [state, setState] = useState([]);

    const API = new Promise((resolve, reject)=>{
        setTimeout( () => {
            setState([
            {
                id: 1,
                title: 'Cardigan',
                description: 'Chompa de tejido grueso marrón y crema con detalles de color.',
                price: 'S/ 50.00',
                pictureUrl: 'https://i.postimg.cc/B6P3yWdD/sueter.jpg'
            },
            {
                id: 2,
                title: 'Polo acanalado',
                description: 'Polo con franjas crema amarillas y negras.',
                price: 'S/ 20.00',
                pictureUrl: 'https://i.postimg.cc/jSrFYDFZ/polo.jpg'
            }
        ]);
        }, 2000)
    })
  
    API.then();

    return (
        <div className="item-list-container">
            <h4 className="text">{props.gretting}</h4>
            <ItemList items={state}/>
            <ItemCount stock="3" initial="1" />
        </div>
    )
}

export default ItemListContainer;
