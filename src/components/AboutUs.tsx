import { Users, Shield, Heart } from 'lucide-react';

const AboutUs = () => {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="fade-in-section">
        <h2 className="section-title">Кто мы такие</h2>
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-lg text-gray-600">
            Мы — группа неравнодушных людей, объединенных общей целью: помочь детям из Белыничского детского дома-интерната
            обрести заботу, поддержку и необходимые для развития условия.
          </p>
        </div>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8 mt-12">
        <div className="card fade-in-section">
          <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
            <Users className="h-8 w-8 text-green-600" />
          </div>
          <h3 className="text-xl font-bold text-center mb-3">Наша команда</h3>
          <p className="text-gray-600 text-center">
            Мы — волонтеры, которые верят, что любовь и внимание способны изменить жизнь ребенка к лучшему. Каждый из нас вносит свой вклад в общее дело.
          </p>
        </div>
        
        <div className="card fade-in-section">
          <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
            <Shield className="h-8 w-8 text-green-600" />
          </div>
          <h3 className="text-xl font-bold text-center mb-3">Наша миссия</h3>
          <p className="text-gray-600 text-center">
            Обеспечить детей из детского дома-интерната всем необходимым для комфортной жизни, образования и развития творческих способностей.
          </p>
        </div>
        
        <div className="card fade-in-section">
          <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
            <Heart className="h-8 w-8 text-green-600" />
          </div>
          <h3 className="text-xl font-bold text-center mb-3">Наши ценности</h3>
          <p className="text-gray-600 text-center">
            Доброта, открытость, ответственность и забота — вот то, что объединяет нас и лежит в основе всех наших действий и решений.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
