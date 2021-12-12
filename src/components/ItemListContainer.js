import React from 'react'
import ItemCount from './ItemCount';

function ItemListContainer(props) {
    
    return (
        <div className="item-list-container">
            <h4 className="text">{props.gretting}</h4>
            <ItemCount stock="3" initial="1" />
        </div>
    )
}

export default ItemListContainer;
