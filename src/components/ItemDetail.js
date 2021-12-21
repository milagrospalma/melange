import React from 'react'
import ItemCount from './ItemCount'

function ItemDetail({item}) {
    return (
        <div className="item-detail">
            <div className="col-12 col-lg-6">
                <img src={item.pictureUrl} alt={item.title} />
            </div>
            <div className="col-12 col-lg-6">
                <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <p>Talla: {item.size}</p>
                    <p>{item.price}</p>
                    <div>
                        <ItemCount />
                        <div>Agregar al carrito</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail
