import Link from 'next/link';
import { useState } from 'react';
const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <header className='bg-gray-800 text-white'>
            <div className='container mx-auto flex justify-between items-center py-4 px-4'>
                <h1 className='text-2xl font-bold'>Wickramasooriya Enterprises</h1>
                {/* Hamnurger Menu */}
                <button
                 className='md:hidden text-white focus:outline-none'
                    onClick={()=> setIsMenuOpen(!isMenuOpen)}>
                        ☰
                </button>
                <nav
                    className={`${
                        isMenuOpen ? 'block': 'hidden'
                    } md:block absolute md:static top-14 left-0 w-full bg-gray-800 md:bg-transparent`}
                >
                    <ul className='flex flex-col md:flex-row md:space-x-6'>
                        <li className='p-2 md:p-0'>
                            <Link href="/" className='hover:text-yellow-400 transition'>
                                Home
                            </Link>
                        </li>
                        <li className='p-2 md:p-0'>
                            <Link href="/about" className='hover:text-yellow-400 transition'>
                                About
                            </Link>
                        </li>
                        <li className='p-2 md:p-0'>
                            <Link href="/services" className='hover:text-yellow-400 transition'>
                                Services
                            </Link>
                        </li>
                        <li className='p-2 md:p-0'>
                            <Link href="/contact" className='hover:text-yellow-400 transition'>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>

        </header>
    )
}

export default Header;