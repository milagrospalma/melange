import React from 'react'
import ItemCount from './ItemCount'

function ItemDetail({item}) {
    return (
        <div className="item-detail">
            <div className="content-img">
                <img src={item.pictureUrl} alt={item.title} />
            </div>
            <div className="content-detail">
                <div>
                    <h3 className="product--name text-uppercase">{item.title}</h3>
                    <p className="product--description">{item.description}</p>
                    <p className="product--size">Talla: {item.size}</p>
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
