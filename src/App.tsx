import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import WhatWeDo from './components/WhatWeDo';
import HowToHelp from './components/HowToHelp';
import Footer from './components/Footer';
import { Heart } from 'lucide-react';

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.fade-in-section').forEach((section) => {
      observer.observe(section);
    });

    return () => {
      document.querySelectorAll('.fade-in-section').forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="font-montserrat text-gray-800">
      <Header />
      <Hero />
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <AboutUs />
        <WhatWeDo />
        <HowToHelp />
      </div>
      <div className="bg-gradient-to-r from-green-500 to-green-600 py-16 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <Heart className="inline-block mr-2 h-12 w-12" />
          <h2 className="text-3xl font-bold mb-4">Присоединяйтесь к нам сегодня</h2>
          <p className="text-xl mb-8">Вместе мы можем сделать жизнь детей лучше!</p>
          <a 
            href="#how-to-help" 
            className="bg-white text-green-600 px-8 py-3 rounded-full font-bold text-lg hover:bg-green-100 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Помочь сейчас
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;