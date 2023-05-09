import React from 'react';
import banner from '../../assets/banner.png';

const Banner = () => {
    return (
        <div style={{ background: `url(${banner})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: '90vh' }}>
            <div className='my-container relative'>
                <div className='absolute w-1/2 top-32 right-0'>
                    <h1 className="text-4xl  text-white font-semibold">Would you like a cup of Delicious Coffee?</h1>
                    <p className='text-white mt-6'>It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                    <button className="btn btn-warning rounded-none mt-6">Learn more</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;