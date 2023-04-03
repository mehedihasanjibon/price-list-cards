import React, { useState } from 'react';
import Link from '../Link/Link';
import { BeakerIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Navbar = () => {

    const [open, setOpen] = useState(false)
    const routes = [
        { id: 1, name: 'Apples', category: 'Fruit', price: 0.99 },
        { id: 2, name: 'Bread', category: 'Bakery', price: 2.49 },
        { id: 3, name: 'Milk', category: 'Dairy', price: 1.99 },
        { id: 4, name: 'Chicken', category: 'Meat', price: 4.99 },
        { id: 5, name: 'Eggs', category: 'Dairy', price: 2.29 }
    ]
    return (
            <nav className='bg-purple-400 px-4'>
                <div onClick={() => setOpen(!open)} className='md:hidden'>
                    <span>
                        {
                        open === true ? 
                        <XMarkIcon className="h-6 w-6 text-blue-500" />
                        : <Bars3Icon className="h-6 w-6 text-blue-500" />
                        }</span>
                </div>
                <ul className={`md:flex absolute md:static duration-500 pl-8 py-2  ${open ? 'top-6' : '-top-36'}`}>
                    {
                        routes.map(route => 
                        <Link 
                            key={route.id}
                            route={route}
                        ></Link>)
                    }
                </ul>
            </nav>
    );
};

export default Navbar;