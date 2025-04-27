import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    image: 'https://images.pexels.com/photos/1787220/pexels-photo-1787220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'MANFROTTO',
    subtitle: 'PROFESSIONAL VIDEO TRIPODS FOR CAMERAS',
    btnText: 'Shop Now',
    btnLink: '/category/tripods'
  },
  {
    id: 2,
    image: 'https://images.pexels.com/photos/243757/pexels-photo-243757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'SONY',
    subtitle: 'PROFESSIONAL CAMERAS FOR PHOTOGRAPHY',
    btnText: 'Discover More',
    btnLink: '/category/cameras'
  },
  {
    id: 3,
    image: 'https://images.pexels.com/photos/3802602/pexels-photo-3802602.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'LIGHTING',
    subtitle: 'PROFESSIONAL LIGHTING SOLUTIONS',
    btnText: 'Explore',
    btnLink: '/category/lighting'
  }
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const nextSlide = () => {
    setCurrentSlide(current => (current === slides.length - 1 ? 0 : current + 1));
  };
  
  const prevSlide = () => {
    setCurrentSlide(current => (current === 0 ? slides.length - 1 : current - 1));
  };
  
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };
  
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="relative overflow-hidden h-[350px] md:h-[450px]">
      <div 
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="min-w-full relative">
            <img 
              src={slide.image} 
              alt={slide.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex flex-col justify-center pl-8 md:pl-16">
              <div className="max-w-md text-white">
                <h2 className="text-4xl md:text-5xl font-bold mb-2">{slide.title}</h2>
                <p className="text-lg md:text-xl mb-6">{slide.subtitle}</p>
                <a 
                  href={slide.btnLink} 
                  className="bg-red-600 text-white px-6 py-2 rounded-md inline-block hover:bg-red-700 transition-colors"
                >
                  {slide.btnText}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Navigation Arrows */}
      <button 
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full"
        onClick={prevSlide}
      >
        <ChevronLeft size={20} />
      </button>
      <button 
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full"
        onClick={nextSlide}
      >
        <ChevronRight size={20} />
      </button>
      
      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button 
            key={index} 
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;