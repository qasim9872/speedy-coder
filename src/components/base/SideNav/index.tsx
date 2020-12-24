import React from 'react';

import { NavHeader } from './NavHeader';
import { NavLinks } from './NavLinks/index';
import { NavFooter } from './NavFooter';

export const Navbar: React.FC = () => {
  return (
    <div className="w-64 bg-gray-nav h-screen">
      <div className="flex flex-col justify-around items-center h-screen 2xl:h-5/6">
        <NavHeader />
        <NavLinks />
        <NavFooter />
      </div>
    </div>
  );
};

export default Navbar;