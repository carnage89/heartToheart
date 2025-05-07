import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-green-600 to-green-700 text-white overflow-hidden">
      <div 
        className="absolute inset-0 z-0 opacity-20 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/1250452/pexels-photo-1250452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
          backgroundBlendMode: "overlay" 
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32 relative z-10">
        <div className="md:w-3/5">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            Благотворительная акция "Сердцем к сердцу"
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light">
            Мы помогаем Белыничскому детскому дому интернату для детей от 3-х до 17 лет.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a 
              href="#how-to-help" 
              className="btn-secondary shadow-lg hover:shadow-xl"
            >
              Помочь сейчас
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a 
              href="#about" 
              className="bg-white text-green-700 font-medium py-2 px-6 rounded-full hover:bg-green-50 transition-all duration-300 inline-flex items-center"
            >
              Узнать больше
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white opacity-20"></div>
    </div>
  );
};

export default Hero;