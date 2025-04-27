import React from 'react';

const brands = [
  {
    id: 1,
    name: 'Nikon',
    logo: 'https://images.pexels.com/photos/930530/pexels-photo-930530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    link: '/brands/nikon'
  },
  {
    id: 2,
    name: 'Sony',
    logo: 'https://images.pexels.com/photos/1091294/pexels-photo-1091294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    link: '/brands/sony'
  },
  {
    id: 3,
    name: 'Canon',
    logo: 'https://images.pexels.com/photos/3602258/pexels-photo-3602258.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    link: '/brands/canon'
  },
  {
    id: 4,
    name: 'Panasonic',
    logo: 'https://images.pexels.com/photos/66134/pexels-photo-66134.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    link: '/brands/panasonic'
  }
];

const BrandsSection = () => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold uppercase mb-8">NOS MARQUES</h2>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {brands.map(brand => (
            <a 
              key={brand.id} 
              href={brand.link}
              className="block grayscale hover:grayscale-0 transition-all duration-300"
            >
              <img 
                src={brand.logo} 
                alt={brand.name} 
                className="h-12 md:h-16 object-contain"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandsSection;