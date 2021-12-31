import React from 'react'
import ItemCount from './ItemCount'

function ItemDetail({item}) {
    return (
        <div className="item-detail hide">
            <div className="content-img">
                <img src={item.pictureUrl} alt={item.title} />
            </div>
            <div className="content-detail">
                <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <p>Talla: {item.size}</p>
                    <p>Precio: {item.price}</p>
                    <div>
                        <ItemCount />
                        <div className="btn-add-to-cart">Agregar al carrito</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail
