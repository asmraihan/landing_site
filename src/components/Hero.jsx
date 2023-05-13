import React from 'react';
import Typed from 'react-typed';
const Hero = () => {
    return (
        
            <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
                <h2 className='text-[#008ddf] lg:text-4xl text-3xl font-bold p-2'>
                    Web Dev.
                </h2>
                <div className='flex justify-center items-center'>
                    <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
                        {/* Fixed text */}
                    </p>
                    <Typed
                        className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2 '
                        strings={['Developed with React', 'Designed with Tailwind']}
                        typeSpeed={120}
                        backSpeed={140}
                        loop
                    />
                </div>
                <p className='md:text-2xl text-xl py-2 font-bold text-gray-300'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita maiores, est nesciunt aut ut molestiae!.</p>
                <div className="mt-8 flex flex-wrap justify-center gap-4">
                    <a
                        className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white transition-all duration-300  focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                        href="/get-started"
                    >
                        Get Started
                    </a>
                    <a
                        className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-white hover:text-black transition-all duration-300 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
                        href="/about"
                    >
                        Learn More
                    </a>
                </div>
            </div>
       
    );
};

export default Hero;