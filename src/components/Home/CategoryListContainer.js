import React from 'react';
import CategoryCard from './CategoryCard';
import imgCatNew from '../../assets/images/categories/category-new.jpg';
import imgCatSecond from '../../assets/images/categories/category-second.jpg';
import imgCatDonated from '../../assets/images/categories/category-donated.jpg';
import imgCatNews from '../../assets/images/categories/category-news.jpg';


const CategoryListContainer = () => {
    return (
        <div className="category-list-container">
            <div className="container">
                <div className="row">
                    <CategoryCard name="Nuevos" img={imgCatNew}/>
                    <CategoryCard name="Segunda vida" img={imgCatSecond}/>
                    <CategoryCard name="Donados" img={imgCatDonated}/>
                    <CategoryCard name="Novedades" img={imgCatNews}/>
                </div>
            </div>
        </div>
    )
}

export default CategoryListContainer;
