import React, { useState } from 'react'

function ItemCount({stock, initial}) {
    let [state, setState] = useState({ quantity: 1 });

    const onAdd = () => {
        setState({quantity: ++state.quantity});
    }

    const onRemove = () => {
        setState({quantity: --state.quantity});
    }

    return (
        <div className="item-count">
            <button onClick={state.quantity > initial ? onRemove : null} className={`btn-control ${state.quantity <= initial ? 'disabled' : ''}`}>-</button>
            <span>{state.quantity}</span>
            <button onClick={state.quantity < stock ? onAdd : null} className={`btn-control ${state.quantity >= stock ? 'disabled' : ''}`}>+</button>
        </div>
    )
}

export default ItemCount;
