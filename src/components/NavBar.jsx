import { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';


const NavBar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };
    return (
        <div className='flex justify-between items-center h-24 w-5/6 text-white mx-auto px-4 z-40'>
            <Link to='/' className='w-full text-3xl font-bold text-[#008ddf]'>Web Dev.</Link>
            <ul className='hidden md:flex font-semibold'>
                <Link to='/' className='p-4'>Home</Link>
                <Link to='/about' className='p-4'>About</Link>
                <Link to='/service' className='p-4'>Services</Link>
                <Link to='/project' className='p-4'>Projects</Link>
                <Link to='/contact' className='p-4'>Contact</Link>
            </ul>
            <div onClick={handleNav} className='block md:hidden'>
                {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
            </div>
            <ul className={nav ? 'fixed left-0 top-0 w-[80%] h-full border-r border-r-gray-900 bg-[#282828] ease-in-out duration-500 text-white font-semibold' : 'ease-in-out duration-500 fixed left-[-100%]'}>
                <h1 className='w-full text-3xl font-bold text-[#008ddf] m-4'>Web Dev.</h1>
                <li className='p-4 border-b border-gray-600'> <Link to='/' >Home</Link></li>
                <li className='p-4 border-b border-gray-600'> <Link to='/about' >About</Link></li>
                <li className='p-4 border-b border-gray-600'> <Link to='/service'>Services</Link></li>
                <li className='p-4 border-b border-gray-600'> <Link to='/project' >Projects</Link></li>
                <li className='p-4'> <Link to='/contact' >Contact</Link></li>
            </ul>
        </div>
    );
};

export default NavBar;