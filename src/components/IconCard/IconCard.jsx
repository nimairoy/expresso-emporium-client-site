import React from 'react';
import { GiCoffeeCup } from 'react-icons/gi';
import { SiBuymeacoffee } from 'react-icons/si';
import { GiCoffeeBeans } from 'react-icons/gi';
import { AiOutlineCoffee } from 'react-icons/ai';

const IconCard = () => {
    return (
        <div className=' bg-base-300'>
            <div className='md:flex md:justify-between gap-4 mt-8 my-container'>
                <div className="card w-full shadow-2xl bg-white mt-8">
                    <figure className="px-10 pt-10">
                        <GiCoffeeCup className='text-4xl'></GiCoffeeCup>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Awesome Aroma</h2>
                        <p>You will definitely be a fan of the design & aroma of your coffee</p>
                    </div>
                </div>
                <div className="card w-full shadow-2xl bg-white mt-8">
                    <figure className="px-10 pt-10">
                        <GiCoffeeBeans className='text-4xl'></GiCoffeeBeans>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">High Quality</h2>
                        <p>We served the coffee to you maintaining the best quality</p>
                    </div>
                </div>
                <div className="card w-full shadow-2xl bg-white mt-8">
                    <figure className="px-10 pt-10">
                        <AiOutlineCoffee className='text-4xl'></AiOutlineCoffee>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Pure Grades</h2>
                        <p>The coffee is made of the green coffee beans which you will love</p>
                    </div>
                </div>
                <div className="card w-full shadow-2xl bg-white mt-8">
                    <figure className="px-10 pt-10">
                        <SiBuymeacoffee className='text-4xl'></SiBuymeacoffee>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Proper Roasting</h2>
                        <p>Your coffee is brewed by first roasting the green coffee beans</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IconCard;