import React from 'react';
import first from '../../assets/Rectangle 10.png'
import { FiEdit, FiEye, FiTrash2 } from 'react-icons/fi';

const CoffeeCard = () => {
    return (
        <>
        <div className='md:flex md:justify-evenly gap-4 bg-gray-100 p-4 items-center rounded-md'>
            <div>
                <img className='w-full' src={first} alt="" />
            </div>
            <div>
                <p className='mt-4'><strong>Name: </strong> Lorem ipsum dolor sit.</p>
                <p className='mt-4'><strong>Quantity: </strong> Lorem ipsum dolor sit.</p>
                <p className='mt-4'><strong>Price: </strong> Lorem ipsum dolor sit.</p>
            </div>
            <div>
                <button className='btn btn-warning block mt-4'><FiEye className='text-2xl'></FiEye></button>
                <button className='btn btn-success block mt-4'><FiEdit className='text-2xl'></FiEdit></button>
                <button className='btn btn-error block mt-4'><FiTrash2 className='text-2xl'></FiTrash2></button>
            </div>
        </div>
        <div className='md:flex md:justify-evenly gap-4 bg-gray-100 p-4 items-center'>
            <div>
                <img className='w-full' src={first} alt="" />
            </div>
            <div>
                <p>Lorem ipsum dolor sit.</p>
                <p>Lorem ipsum dolor sit.</p>
                <p>Lorem ipsum dolor sit.</p>
            </div>
            <div>
                <button className='btn block mt-4'>View</button>
                <button className='btn block mt-4'>View</button>
                <button className='btn block mt-4'>View</button>
            </div>
        </div>
        </>
    );
};

export default CoffeeCard;