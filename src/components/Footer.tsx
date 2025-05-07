import { Heart, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer id="contact" className="bg-gray-800 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <Heart className="h-8 w-8 text-green-400 mr-2" />
              <h3 className="text-xl font-bold">Сердцем к сердцу</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Благотворительная акция помощи детям Белыничского детского дома-интерната
            </p>
            <div className="flex space-x-4">
              {/* <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13.5.67a.5.5 0 0 0-.5-.67H5.5a.5.5 0 0 0-.5.67L7.95 8H3.5c-.49 0-.64.67-.24.94l10.5 9.54c.43.39 1.11-.08.79-.59L10.3 12h3.8c.59 0 .82-.72.33-1.01L4.95 2.03 13.5.67z" />
                </svg>
              </a> */}
              {/* <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.3c-.9.4-1.8.7-2.8.8 1-.6 1.8-1.6 2.2-2.7-.9.5-2 .9-3.1 1.1-.9-1-2.2-1.6-3.6-1.6-2.7 0-4.9 2.2-4.9 4.9 0 .4 0 .8.1 1.1-4.2-.2-7.8-2.2-10.2-5.2-.4.8-.7 1.6-.7 2.6 0 1.8.9 3.3 2.3 4.2-.8 0-1.6-.2-2.3-.6v.1c0 2.4 1.7 4.4 3.9 4.8-.4.1-.8.2-1.3.2-.3 0-.6 0-.9-.1.6 2 2.4 3.4 4.6 3.4-1.7 1.3-3.8 2.1-6.1 2.1-.4 0-.8 0-1.2-.1 2.2 1.4 4.8 2.2 7.5 2.2 9.1 0 14-7.5 14-14v-.6c1-.7 1.8-1.6 2.5-2.5z" />
                </svg>
              </a> */}
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                <span>+375 29 123-45-67</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                <span>zabotliviymir@example.com</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                <span>г. Минск, ул. Примерная, 123</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Ссылки</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors">
                  О нас
                </a>
              </li>
              <li>
                <a href="#what-we-do" className="text-gray-300 hover:text-white transition-colors">
                  Наша деятельность
                </a>
              </li>
              <li>
                <a href="#how-to-help" className="text-gray-300 hover:text-white transition-colors">
                  Как помочь
                </a>
              </li>
              <li>
                <a href="#needed-items" className="text-gray-300 hover:text-white transition-colors">
                  Список необходимых вещей
                </a>
              </li>
              <li>
                <a href="#payment-info" className="text-gray-300 hover:text-white transition-colors">
                  Информация для оплаты
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Подпишитесь на новости</h3>
            <p className="text-gray-300 mb-4">
              Получайте информацию о наших мероприятиях и акциях.
            </p>
            <form className="space-y-4">
              <div>
                <input
                  type="email"
                  placeholder="Ваш email"
                  className="w-full px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:border-green-400 focus:outline-none"
                />
              </div>
              <button 
                type="submit" 
                className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-md transition-colors duration-300"
              >
                Подписаться
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} Сердцем к сердцу. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;