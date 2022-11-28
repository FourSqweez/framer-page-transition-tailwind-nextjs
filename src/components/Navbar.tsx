import React from 'react';
import Link from 'next/link';

const Navbar = () => {
   return (
      <nav className="text-2xl font-medium w-full py-8 lg:px-48 flex top-0 z-10 fixed">
         <ul className="flex gap-12">
            <Link href={'/'}>
               <li>Home</li>
            </Link>
            <Link href={'/contact'}>
               <li>Contact</li>
            </Link>
            <Link href={'/scroll'}>
               <li>scroll</li>
            </Link>
         </ul>
      </nav>
   );
};

export default Navbar;
