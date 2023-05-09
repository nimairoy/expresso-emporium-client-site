import React from 'react';
import { FiCoffee } from 'react-icons/fi'
import CoffeeCard from '../CoffeeCard/CoffeeCard';
import { Link } from 'react-router-dom';

const ProductCard = ({ coffees, setCoffees }) => {
    return (
        <div className='py-20'>
            <div className="product-title text-center mb-12">
                <p>--- Sip & Savor ---</p>
                <h2 className="text-3xl mt-2 font-semibold">Our Popular Products</h2>
                <Link to='/addcoffee'><button className='flex px-3 mx-auto py-2 font-semibold text-white mt-4 rounded-sm bg-warning'><span className='mr-2'>Add Coffee </span><FiCoffee className="text-xl"></FiCoffee></button></Link>
            </div>
            <div className='md:grid md:grid-cols-2 gap-4 my-container'>
                {
                    coffees.map(coffee => <CoffeeCard
                        key={coffee._id}
                        coffee={coffee}
                        coffees={coffees}
                        setCoffees={setCoffees}
                    ></CoffeeCard>)
                }
            </div>
        </div>
    );
};

export default ProductCard;