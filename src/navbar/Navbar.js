import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import StyleNest from '../Logo.png';
import Cart from '../cta-buttons.png';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const navItems = [
        {id:1, text: 'Add Product', path: '/add-product'},
        {id:2, text: 'Latest arrivals', path: '/latest-arrivals'}
    ]

    const handleNav = () => {
        setNav(!nav);
    }

    return(
        <div className="flex items-center justify-between h-24 mx-4 text-neutral-600">
            <img src={StyleNest}/>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-12">
                {navItems.map(item => (
                    <Link to={item.path} className="hover:text-black" key={item.id}>
                        {item.text}
                    </Link>
                ))}
            </div>
            
            <img src={Cart}/>
            

            {/* Mobile Navigation */}
            <div onClick={handleNav} className="block md:hidden">
                {nav ? <AiOutlineClose size={20}/>: <AiOutlineMenu size={20}/>}
            </div>

            {/* Mobile Menu */}
            <ul className={nav ? 'fixed md:hidden left-0 top-0 w-[90%] h-full border-r border-neutral-600 bg-white' 
                                  : 'fixed top-0 bottom-0 left-[100%] flex flex-col'}
            >
                <img className="py-10 px-5" src={StyleNest}/>
            
                <div className="flex flex-col px-8 py-15 space-y-5">
                    {navItems.map(item => (
                        <Link to={item.path} className="hover:text-black" key={item.id}>
                            {item.text}
                        </Link>
                    ))}
                </div>

            </ul>


        </div>
    );
};
export default Navbar