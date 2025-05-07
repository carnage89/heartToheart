import { useState } from 'react';
import { Heart, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Heart className="h-8 w-8 text-green-500" />
            <span className="ml-2 text-xl font-bold text-green-600">Сердцем к сердцу</span>
          </div>
          
          {/* Desktop menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-600 hover:text-green-500 font-medium transition-colors">
              Кто мы
            </a>
            <a href="#what-we-do" className="text-gray-600 hover:text-green-500 font-medium transition-colors">
              Что мы делаем
            </a>
            <a href="#how-to-help" className="text-gray-600 hover:text-green-500 font-medium transition-colors">
              Как помочь
            </a>
            <a href="#how-to-help" className="btn-primary">
              Помочь сейчас
            </a>
          </nav>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-green-500 focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#about"
              onClick={closeMenu}
              className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-green-500 hover:bg-gray-50 rounded-md"
            >
              Кто мы
            </a>
            <a
              href="#what-we-do"
              onClick={closeMenu}
              className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-green-500 hover:bg-gray-50 rounded-md"
            >
              Что мы делаем
            </a>
            <a
              href="#how-to-help"
              onClick={closeMenu}
              className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-green-500 hover:bg-gray-50 rounded-md"
            >
              Как помочь
            </a>
            <a
              href="#how-to-help"
              onClick={closeMenu}
              className="block px-3 py-2 text-base font-medium bg-green-500 text-white hover:bg-green-600 rounded-md text-center"
            >
              Помочь сейчас
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;