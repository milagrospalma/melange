import React from 'react'

function Item({item}) {
    return (
        <div className="product-card">
            <div className="product-card--img">
                <img src={item.pictureUrl} alt=""/>
            </div>
            <div className="product-card--detail">
                <h5 className="title">{item.title}</h5>
                <p className="price">{item.price}</p>
            </div>
        </div>
    )
}

export default Item
