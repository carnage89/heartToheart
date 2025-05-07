import { GiftIcon, Truck, Calendar, PencilRuler } from 'lucide-react';

const WhatWeDo = () => {
  return (
    <section id="what-we-do" className="py-16 md:py-24">
      <div className="fade-in-section">
        <h2 className="section-title">Что мы делаем</h2>
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-lg text-gray-600">
            Мы организуем сбор помощи для Белыничского детского дома-интерната, где проживают дети от 3 до 17 лет.
            Наша цель — обеспечить детей всеми необходимыми вещами для комфортной жизни и развития.
          </p>
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-12 mt-12">
        <div className="flex fade-in-section">
          <div className="flex-shrink-0 mr-4">
            <div className="bg-orange-100 rounded-full w-14 h-14 flex items-center justify-center">
              <PencilRuler className="h-6 w-6 text-orange-600" />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Канцелярские принадлежности</h3>
            <p className="text-gray-600">
              Собираем тетради, ручки, карандаши, альбомы для рисования и другие школьные принадлежности, 
              необходимые для обучения и творческого развития детей.
            </p>
          </div>
        </div>
        
        <div className="flex fade-in-section">
          <div className="flex-shrink-0 mr-4">
            <div className="bg-orange-100 rounded-full w-14 h-14 flex items-center justify-center">
              <GiftIcon className="h-6 w-6 text-orange-600" />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Одежда и обувь</h3>
            <p className="text-gray-600">
              Помогаем обеспечить детей сезонной одеждой, обувью и другими необходимыми вещами, 
              чтобы каждый ребенок чувствовал себя комфортно.
            </p>
          </div>
        </div>
        
        <div className="flex fade-in-section">
          <div className="flex-shrink-0 mr-4">
            <div className="bg-orange-100 rounded-full w-14 h-14 flex items-center justify-center">
              <Truck className="h-6 w-6 text-orange-600" />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Бытовые принадлежности</h3>
            <p className="text-gray-600">
              Собираем средства гигиены, посуду, бытовую технику и другие товары для дома,
              чтобы сделать быт детей более комфортным и уютным.
            </p>
          </div>
        </div>
        
        <div className="flex fade-in-section">
          <div className="flex-shrink-0 mr-4">
            <div className="bg-orange-100 rounded-full w-14 h-14 flex items-center justify-center">
              <Calendar className="h-6 w-6 text-orange-600" />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Мероприятия и праздники</h3>
            <p className="text-gray-600">
              Организуем праздники, поездки и другие мероприятия для детей, 
              чтобы подарить им радость, новые впечатления и положительные эмоции.
            </p>
          </div>
        </div>
      </div>
      
      <div className="mt-16 bg-green-50 p-8 rounded-lg fade-in-section">
        <h3 className="text-2xl font-bold mb-4 text-center">Нужды детского дома</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="inline-block w-5 h-5 bg-green-500 rounded-full mr-2 flex-shrink-0 mt-1"></span>
                <span>Канцелярские принадлежности</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-5 h-5 bg-green-500 rounded-full mr-2 flex-shrink-0 mt-1"></span>
                <span>Средства гигиены (салфетки, мыло, зубные щетки)</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-5 h-5 bg-green-500 rounded-full mr-2 flex-shrink-0 mt-1"></span>
                <span>Бытовая химия (стиральный порошок, чистящие средства)</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-5 h-5 bg-green-500 rounded-full mr-2 flex-shrink-0 mt-1"></span>
                <span>Кухонная утварь (стаканы, тарелки, приборы)</span>
              </li>
            </ul>
          </div>
          <div>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="inline-block w-5 h-5 bg-green-500 rounded-full mr-2 flex-shrink-0 mt-1"></span>
                <span>Одежда и обувь разных размеров</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-5 h-5 bg-green-500 rounded-full mr-2 flex-shrink-0 mt-1"></span>
                <span>Постельное белье и полотенца</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-5 h-5 bg-green-500 rounded-full mr-2 flex-shrink-0 mt-1"></span>
                <span>Бытовая техника (при необходимости)</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-5 h-5 bg-green-500 rounded-full mr-2 flex-shrink-0 mt-1"></span>
                <span>Книги, игрушки и развивающие игры</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;