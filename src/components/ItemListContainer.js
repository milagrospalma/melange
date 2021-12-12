import React, { useState } from 'react'
import ItemCount from './ItemCount';

function ItemListContainer(props) {

    let [state, setState] = useState({ quantity: 1 });

    const onAdd = (stock, value) => {
        if (value < stock) setState({quantity: ++state.quantity});
    }

    const onRemove = (value) => {
        if (value > 1) setState({quantity: --state.quantity});
    }

    return (
        <div className="item-list-container">
            <h4 className="text">{props.gretting}</h4>
            <ItemCount stock="3" initial={state.quantity} onAdd={onAdd} onRemove={onRemove} />
        </div>
    )
}

export default ItemListContainer;
