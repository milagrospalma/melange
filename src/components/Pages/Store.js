import React from 'react'
import Header from '../Header/Header';
import ItemListContainer from '../Products/ItemListContainer';
import CategoryList from '../Store/CategoryList';

const Store = () => {
    return (
        <div>
            <Header title="Tienda"/>
            <div className="container">
                <div className="row">
                    <CategoryList/>
                    <ItemListContainer/>
                </div>
            </div>
        </div>
    )
}

export default Store;
