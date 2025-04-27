import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

type NavBarProps = {
  isMenuOpen: boolean;
}

const NavBar: React.FC<NavBarProps> = ({ isMenuOpen }) => {
  const categories = [
    { name: 'Caméscopes et appareils photo', path: '/category/cameras' },
    { name: 'Accessoires de tournage', path: '/category/accessories' },
    { name: 'Pied poid et diffusion', path: '/category/tripods' },
    { name: 'Éclairage Photo et Vidéo', path: '/category/lighting' },
    { name: 'Accessoires de Studio', path: '/category/studio' },
    { name: 'Audio', path: '/category/audio' },
    { name: 'Mobile Solutions', path: '/category/mobile' },
    { name: 'Consommables', path: '/category/consumables' },
  ];

  return (
    <nav className="bg-black text-white">
      <div className="container mx-auto px-4">
        <ul className={`${isMenuOpen ? 'block' : 'hidden'} md:flex flex-col md:flex-row`}>
          {categories.map((category, index) => (
            <li key={index} className="relative group">
              <Link 
                to={category.path} 
                className="block py-3 px-4 hover:bg-gray-800 whitespace-nowrap flex items-center"
              >
                {category.name}
                <ChevronDown size={16} className="ml-1" />
              </Link>
              <div className="hidden group-hover:block absolute left-0 top-full z-10 bg-white shadow-lg text-gray-800 min-w-[200px]">
                <Link to={`${category.path}/sub1`} className="block p-3 hover:bg-gray-100 border-b">Subcategory 1</Link>
                <Link to={`${category.path}/sub2`} className="block p-3 hover:bg-gray-100 border-b">Subcategory 2</Link>
                <Link to={`${category.path}/sub3`} className="block p-3 hover:bg-gray-100">Subcategory 3</Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;