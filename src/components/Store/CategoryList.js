import React from 'react';

const CategoryList = () => {
    return (
        <div className="col s12 l4">
            <div className="category-list">
                <h5 className="title">Todos los productos</h5>
                <h5 className="title">Categorías</h5>
                <ul>
                    <li>Nuevos</li>
                    <li>Segunda Vida</li>
                    <li>Donados</li>
                    <li>Novedades</li>
                </ul>
            </div>
        </div>
    )
}

export default CategoryList;
