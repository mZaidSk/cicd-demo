import React from 'react';
import { NavLink } from 'react-router-dom';
import { List, CheckCircle, Circle, Mail } from 'lucide-react';

const Navbar = () => {
    const navItems = [
        { path: '/', label: 'All', icon: List },
        { path: '/active', label: 'Active', icon: Circle },
        { path: '/completed', label: 'Completed', icon: CheckCircle },
        { path: '/contact', label: 'Contact', icon: Mail },
    ];

    return (
        <nav className="fixed bottom-0 left-0 right-0 bg-gray-800 border-t border-gray-700 p-4 md:static md:border-t-0 md:bg-transparent md:p-0 md:mb-8">
            <div className="flex justify-around md:justify-center md:space-x-8">
                {navItems.map(({ path, label, icon: Icon }) => (
                    <NavLink
                        key={path}
                        to={path}
                        className={({ isActive }) =>
                            `flex flex-col md:flex-row items-center space-y-1 md:space-y-0 md:space-x-2 text-sm md:text-base font-medium transition-colors ${isActive ? 'text-blue-500' : 'text-gray-400 hover:text-gray-200'
                            }`
                        }
                    >
                        <Icon size={20} />
                        <span>{label}</span>
                    </NavLink>
                ))}
            </div>
        </nav>
    );
};

export default Navbar;
