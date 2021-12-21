import React, { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail';

function ItemDetailContainer() {

    const [state, setState] = useState([]);

    const getItem = async () => {

        const res = new Promise((resolve, reject)=>{
            resolve({
                    id: 1,
                    title: 'Cardigan',
                    description: 'Chompa de tejido grueso marrón y crema con detalles de color.',
                    size: 'M',
                    price: 'S/ 50.00',
                    pictureUrl: 'https://i.postimg.cc/B6P3yWdD/sueter.jpg'
            })
        })

        return res;

    }

    useEffect(() => {
        getItem().then((res) => {
            setTimeout(()=> {
                setState(res);
            }, 2000)
        })
    }, []);

    return (
        <div className="item-detail-container">
            <ItemDetail item={state} />
        </div>
    )
}

export default ItemDetailContainer
