import React from 'react'

function ItemCount({stock, initial, onAdd, onRemove}) {

    return (
        <div className="item-count">
            <button onClick={() => onRemove(initial)} className={`btn-control ${initial === 1 ? 'disabled' : ''}`}>-</button>
            <span>{initial}</span>
            <button onClick={() => onAdd(stock, initial)} className={`btn-control ${initial >= stock ? 'disabled' : ''}`}>+</button>
        </div>
    )
}

export default ItemCount;
