import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: 'BOUTON AF-ON',
    date: 'July 30, 2023',
    excerpt: 'Dans cet article, nous allons voir comment il est possible de s\'affranchir du déclencheur à mi-course au profit d\'une mise au point photo, un petit bouton nommé AF-ON.',
    image: 'https://images.pexels.com/photos/3602258/pexels-photo-3602258.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    link: '/blog/bouton-af-on'
  },
  {
    id: 2,
    title: 'Les meilleurs accessoires pour la photographie de paysage',
    date: 'June 15, 2023',
    excerpt: 'Découvrez les accessoires indispensables pour réaliser des photos de paysage extraordinaires.',
    image: 'https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    link: '/blog/accessoires-photo-paysage'
  }
];

const BlogSection = () => {
  return (
    <div className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-xl md:text-2xl font-bold uppercase">DEPUIS NOTRE BLOG</h2>
          <div className="flex space-x-2">
            <button className="p-2 border rounded-full hover:bg-gray-200">
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map(post => (
            <div key={post.id} className="bg-white rounded-lg shadow-sm overflow-hidden flex flex-col md:flex-row">
              <div className="md:w-1/3 relative">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-48 md:h-full object-cover"
                />
              </div>
              <div className="p-6 md:w-2/3">
                <h3 className="text-lg font-bold mb-2">{post.title}</h3>
                <div className="flex items-center text-gray-500 text-sm mb-3">
                  <Calendar size={14} className="mr-1" />
                  <span>{post.date}</span>
                </div>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <a 
                  href={post.link} 
                  className="inline-flex items-center text-teal-500 hover:text-teal-600"
                >
                  Lire la suite <ArrowRight size={16} className="ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSection;