import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 pt-12 pb-6 mt-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">CONTACTEZ-NOUS</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 mt-1 flex-shrink-0 text-gray-500" />
                <span>Adresse: Résidence Alpiwa La Nouvelle Médina App 1003 Le Khadra, Tunisie</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 flex-shrink-0 text-gray-500" />
                <span>Téléphone: +216 70 287 775</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 flex-shrink-0 text-gray-500" />
                <span>Email: contact@splash-distribution.com</span>
              </li>
            </ul>
          </div>

          {/* Account Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">VOTRE COMPTE</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/account/info" className="hover:text-teal-500">Informations personnelles</Link>
              </li>
              <li>
                <Link to="/account/orders" className="hover:text-teal-500">Commandes</Link>
              </li>
              <li>
                <Link to="/account/returns" className="hover:text-teal-500">Avoirs</Link>
              </li>
              <li>
                <Link to="/account/addresses" className="hover:text-teal-500">Adresses</Link>
              </li>
              <li>
                <Link to="/account/wishlist" className="hover:text-teal-500">Ma wishlist</Link>
              </li>
            </ul>
          </div>

          {/* Products Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">PRODUITS</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/promotions" className="hover:text-teal-500">Promotions</Link>
              </li>
              <li>
                <Link to="/new-products" className="hover:text-teal-500">Nouveaux produits</Link>
              </li>
              <li>
                <Link to="/best-sellers" className="hover:text-teal-500">Meilleures ventes</Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">NEWSLETTER</h3>
            <p className="mb-4">Vous pouvez vous désinscrire à tout moment. Vous êtes informé(e) que vos informations de contact dans les conditions d'utilisation du site.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Entrez votre email..."
                className="flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <button className="bg-teal-500 text-white px-4 py-2 rounded-r-md hover:bg-teal-600">
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>

        <hr className="my-8 border-gray-300" />
        
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
          <div className="mb-4 md:mb-0">
            © Copyright 2021 Splash Distribution. Tous droits réservés.
          </div>
          <div className="flex space-x-4">
            <Link to="/sitemap" className="hover:text-teal-500">Sitemap</Link>
            <Link to="/contact" className="hover:text-teal-500">Contactez-Nous</Link>
            <Link to="/delivery" className="hover:text-teal-500">Livraison</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;