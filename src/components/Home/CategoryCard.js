import React from 'react';
import imgArrow from '../../assets/images/icons/arrow-right.svg';

const CategoryCard = ({name, img}) => {
    return (
        <div className="col s6 l3">
            <div className="category-card">
                <img src={img} alt={`Categoría ${name}`}/>
                <div className="detail">
                    <h4 className="name text-uppercase">{name}</h4>
                    <img src={imgArrow} alt="Ir a la categoría"/>
                </div>
            </div>
        </div>
    )
}

export default CategoryCard;
