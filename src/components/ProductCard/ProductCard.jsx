import React from 'react';
import { FiCoffee } from 'react-icons/fi'
import CoffeeCard from '../CoffeeCard/CoffeeCard';

const ProductCard = () => {
    return (
        <div className='py-20'>
            <div className="product-title text-center mb-12">
                <p>--- Sip & Savor ---</p>
                <h2 className="text-3xl mt-2 font-semibold">Our Popular Products</h2>
                <button className='flex px-3 mx-auto py-2 font-semibold text-white mt-4 rounded-sm bg-warning'><span className='mr-2'>Add Coffee </span><FiCoffee className="text-xl"></FiCoffee></button>
            </div>
            <div className='md:grid md:grid-cols-2 gap-4 my-container'>
                <CoffeeCard></CoffeeCard>
            </div>
        </div>
    );
};

export default ProductCard;