import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const scrollToNextSection = () => {
    const differentialsSection = document.getElementById('differentials');
    if (differentialsSection) {
      differentialsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      ref={heroRef}
      className="relative pt-24 md:pt-32 pb-16 md:pb-24 bg-gradient-to-b from-white to-invictus-gray min-h-screen flex items-center"
    >
      <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column - Text Content */}
        <div className={`fade-in ${heroInView ? 'visible' : ''}`}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Aprenda inglês de forma 
            <span className="text-invictus-yellow"> rápida </span> 
            e 
            <span className="text-invictus-yellow"> eficiente</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-700 mb-8">
            Na Invictus Idiomas, você aprende inglês com metodologia exclusiva, 
            professores qualificados e materiais didáticos modernos para alcançar 
            fluência em menos tempo.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="btn-primary"
            >
              Agende uma Aula Grátis
            </button>
            
            <button 
              onClick={() => {
                const plansSection = document.getElementById('plans');
                if (plansSection) {
                  plansSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="btn-outline"
            >
              Conheça Nossos Planos
            </button>
          </div>
          
          <div className="mt-8 flex items-center gap-4">
            <div className="flex -space-x-2">
              <img 
                src="https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=120" 
                alt="Student" 
                className="w-10 h-10 rounded-full border-2 border-white"
              />
              <img 
                src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=120" 
                alt="Student" 
                className="w-10 h-10 rounded-full border-2 border-white"
              />
              <img 
                src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=120" 
                alt="Student" 
                className="w-10 h-10 rounded-full border-2 border-white"
              />
            </div>
            <p className="text-sm text-gray-600">
              <span className="font-semibold">+1200 alunos</span> já aprenderam com nosso método
            </p>
          </div>
        </div>
        
        {/* Right Column - Image */}
        <div className={`fade-in ${heroInView ? 'visible delay-300' : ''}`}>
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/5212700/pexels-photo-5212700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
              alt="Alunos aprendendo inglês" 
              className="rounded-xl shadow-xl"
            />
            
            {/* Floating badge */}
            <div className="absolute -top-6 -left-6 bg-invictus-yellow text-invictus-black px-4 py-2 rounded-lg shadow-lg font-semibold text-sm md:text-base float-animation">
              Metodologia Exclusiva
            </div>
            
            {/* Floating stats */}
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg text-center w-32 md:w-40 float-animation">
              <div className="font-bold text-2xl md:text-3xl text-invictus-black">97%</div>
              <div className="text-xs md:text-sm text-gray-600">Taxa de aprovação</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll down indicator */}
      <button 
        onClick={scrollToNextSection}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-invictus-black opacity-80 hover:opacity-100 transition-opacity"
        aria-label="Scroll down"
      >
        <ChevronDown size={36} className="animate-bounce" />
      </button>
    </section>
  );
};

export default Hero;