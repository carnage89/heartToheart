import { CreditCard, ShoppingBag, Truck, HelpingHand } from 'lucide-react';

const HowToHelp = () => {
  return (
    <section id="how-to-help" className="py-16 md:py-24">
      <div className="fade-in-section">
        <h2 className="section-title">Как помочь</h2>
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-lg text-gray-600">
            Есть несколько способов помочь детям из Белыничского детского дома-интерната. 
            Выберите наиболее удобный для вас вариант.
          </p>
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
        <div className="card fade-in-section flex flex-col">
          <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
            <CreditCard className="h-8 w-8 text-orange-600" />
          </div>
          <h3 className="text-xl font-bold text-center mb-3">Денежное пожертвование</h3>
          <p className="text-gray-600 text-center mb-4 flex-grow">
            Вы можете сделать денежное пожертвование через систему ЕРИП или при помощи QR-кода.
          </p>
          <div className="text-center mt-4">
            <button className="btn-primary" onClick={() => document.getElementById('payment-info')?.scrollIntoView({ behavior: 'smooth' })}>
              Подробнее
            </button>
          </div>
        </div>
        
        <div className="card fade-in-section flex flex-col">
          <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
            <ShoppingBag className="h-8 w-8 text-orange-600" />
          </div>
          <h3 className="text-xl font-bold text-center mb-3">Покупка необходимых вещей</h3>
          <p className="text-gray-600 text-center mb-4 flex-grow">
            Вы можете приобрести нужные вещи из списка и передать их нам для доставки в детский дом.
          </p>
          <div className="text-center mt-4">
            <button className="btn-primary" onClick={() => document.getElementById('needed-items')?.scrollIntoView({ behavior: 'smooth' })}>
              Смотреть список
            </button>
          </div>
        </div>
        
        <div className="card fade-in-section flex flex-col">
          <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
            <Truck className="h-8 w-8 text-orange-600" />
          </div>
          <h3 className="text-xl font-bold text-center mb-3">Помощь с доставкой</h3>
          <p className="text-gray-600 text-center mb-4 flex-grow">
            Если у вас есть возможность помочь с транспортировкой собранных вещей, мы будем очень благодарны.
          </p>
          <div className="text-center mt-4">
            <a href="#contact" className="btn-primary">
              Связаться с нами
            </a>
          </div>
        </div>
        
        <div className="card fade-in-section flex flex-col">
          <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
            <HelpingHand className="h-8 w-8 text-orange-600" />
          </div>
          <h3 className="text-xl font-bold text-center mb-3">Волонтерство</h3>
          <p className="text-gray-600 text-center mb-4 flex-grow">
            Станьте частью нашей команды волонтеров и помогайте детям своими навыками и временем.
          </p>
          <div className="text-center mt-4">
            <a href="#contact" className="btn-primary">
              Стать волонтером
            </a>
          </div>
        </div>
      </div>
      
      <div id="payment-info" className="mt-16 bg-green-50 p-8 rounded-lg fade-in-section">
        <h3 className="text-2xl font-bold mb-6 text-center">Информация для оплаты</h3>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h4 className="text-xl font-semibold mb-4 text-green-700">Оплата через ЕРИП</h4>
            <ol className="space-y-2 list-decimal list-inside">
              <li>Выберите пункт Система "Расчет" ЕРИП в интернет-банке, мобильном приложении или терминале</li>
              <li>Выберите последовательно вкладки: Сервис E-POS → E-POS - оплата товаров и услуг</li>
              <li>Введите номер для оплаты в ЕРИП 28147-1-1</li>
              <li>Проверьте корректность введенной информации</li>
            </ol>
            
            <h4 className="text-xl font-semibold mt-6 mb-4 text-green-700">По коду услуги ЕРИП</h4>
            <ol className="space-y-2 list-decimal list-inside">
              <li>Выберите "Оплата в ЕРИП по коду услуги" в интернет-банке, мобильном приложении или терминале</li>
              <li>Введите код услуги 4440631</li>
              <li>Введите номер для оплаты в ЕРИП 28147-1-1</li>
              <li>Проверьте корректность введенной информации</li>
            </ol>
          </div>
          
          <div className="flex flex-col items-center justify-center">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <img 
                src="https://hearttoheartby.s3.us-east-1.amazonaws.com/Screenshot+2025-05-05+at+11.44.44.png" 
                alt="QR-код для оплаты" 
                className="w-48 h-48 object-contain mb-2"
              />
              <p className="text-center text-gray-600">QR-код для оплаты</p>
            </div>
            <p className="mt-4 text-center text-gray-600">
              Отсканируйте QR-код с помощью мобильного приложения вашего банка для быстрой оплаты.
            </p>
          </div>
        </div>
      </div>
      
      <div id="needed-items" className="mt-16 bg-orange-50 p-8 rounded-lg fade-in-section">
        <h3 className="text-2xl font-bold mb-6 text-center">Список необходимых вещей</h3>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-5 rounded-lg shadow">
            <h4 className="font-bold text-lg mb-3 text-orange-700">Канцелярские принадлежности</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2 flex-shrink-0 mt-1.5"></span>
                <span>Тетради разных форматов</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2 flex-shrink-0 mt-1.5"></span>
                <span>Ручки, карандаши, фломастеры</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2 flex-shrink-0 mt-1.5"></span>
                <span>Альбомы для рисования</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2 flex-shrink-0 mt-1.5"></span>
                <span>Линейки, ластики, точилки</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2 flex-shrink-0 mt-1.5"></span>
                <span>Рамки для фото А4 - 100 шт.</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-5 rounded-lg shadow">
            <h4 className="font-bold text-lg mb-3 text-orange-700">Бытовая химия</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2 flex-shrink-0 mt-1.5"></span>
                <span>Средство от накипи для стиральных машин - 80 уп.</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2 flex-shrink-0 mt-1.5"></span>
                <span>Пароочиститель для кухни и душевой</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2 flex-shrink-0 mt-1.5"></span>
                <span>Швабры для мытья окон - 10 шт.</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2 flex-shrink-0 mt-1.5"></span>
                <span>Ведра пластмассовые 3л - 15 шт.</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-5 rounded-lg shadow">
            <h4 className="font-bold text-lg mb-3 text-orange-700">Средства гигиены</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2 flex-shrink-0 mt-1.5"></span>
                <span>Салфетки бумажные - 100 уп.</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2 flex-shrink-0 mt-1.5"></span>
                <span>Стаканы для зубных щеток - 100 шт.</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2 flex-shrink-0 mt-1.5"></span>
                <span>Мыло, шампунь, зубная паста</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2 flex-shrink-0 mt-1.5"></span>
                <span>Полотенца, салфетки</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-5 rounded-lg shadow">
            <h4 className="font-bold text-lg mb-3 text-orange-700">Кухонные принадлежности</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2 flex-shrink-0 mt-1.5"></span>
                <span>Кружки 250 мл. - 100 шт.</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2 flex-shrink-0 mt-1.5"></span>
                <span>Тарелки глубокие под первое блюдо - 100 шт.</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2 flex-shrink-0 mt-1.5"></span>
                <span>Тарелка гарнирная под второе блюдо - 100 шт.</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2 flex-shrink-0 mt-1.5"></span>
                <span>Перчатки одноразовые для кухни - 400 шт.</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-5 rounded-lg shadow">
            <h4 className="font-bold text-lg mb-3 text-orange-700">Одежда и обувь</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2 flex-shrink-0 mt-1.5"></span>
                <span>Сапоги резиновые женские размер 38-39 - 10 пар</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2 flex-shrink-0 mt-1.5"></span>
                <span>Сапоги резиновые мужские размер 39-44 - 5 пар</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2 flex-shrink-0 mt-1.5"></span>
                <span>Носки, нижнее белье</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2 flex-shrink-0 mt-1.5"></span>
                <span>Футболки, свитера разных размеров</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-5 rounded-lg shadow">
            <h4 className="font-bold text-lg mb-3 text-orange-700">Медицинские принадлежности</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2 flex-shrink-0 mt-1.5"></span>
                <span>Сумка для набора медицинская - 1 шт.</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2 flex-shrink-0 mt-1.5"></span>
                <span>Бинты, пластыри, антисептики</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2 flex-shrink-0 mt-1.5"></span>
                <span>Витамины (по согласованию)</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2 flex-shrink-0 mt-1.5"></span>
                <span>Градусники, маски медицинские</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToHelp;