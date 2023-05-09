import React from 'react';
import { FiEdit, FiEye, FiTrash2 } from 'react-icons/fi';
import Swal from 'sweetalert2';

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {

    const { _id, name, quantity, supplier, category, details, taste, photo } = coffee;

    const handleDelete = _id => {
        console.log(_id)

        // sweet alert 
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/coffees/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if(data.deletedCount > 0){
                            Swal.fire(
                                'Deleted!',
                                'Coffee Card has been deleted.',
                                'success'
                            )
                            const remaining = coffees.filter(cffee => cffee._id !== _id);
                            setCoffees(remaining);
                        }
                    })


            }
        })

    }

    return (

        <div className='md:flex md:justify-evenly gap-4 bg-gray-100 p-4 items-center rounded-md'>
            <div>
                <img className='w-full' src={photo} alt="" />
            </div>
            <div>
                <p className='mt-4'><strong>Name: </strong> {name}</p>
                <p className='mt-4'><strong>Quantity: </strong> {quantity}</p>
                <p className='mt-4'><strong>Category: </strong> {category}</p>
            </div>
            <div>
                <button className='btn btn-warning block mt-4'><FiEye className='text-2xl'></FiEye></button>
                <button className='btn btn-success block mt-4'><FiEdit className='text-2xl'></FiEdit></button>
                <button onClick={() => handleDelete(_id)} className='btn btn-error block mt-4'><FiTrash2 className='text-2xl'></FiTrash2></button>
            </div>
        </div>
    );
};

export default CoffeeCard;