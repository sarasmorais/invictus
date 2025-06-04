import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Check, X } from 'lucide-react';

const Plans: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const plans = [
    {
      name: "Básico",
      price: "199",
      period: "por mês",
      description: "Ideal para iniciantes que querem aprender o essencial do inglês.",
      features: [
        { name: "2 aulas por semana", included: true },
        { name: "Material didático digital", included: true },
        { name: "Acesso à plataforma online", included: true },
        { name: "Clube de conversação", included: false },
        { name: "Aulas particulares", included: false },
        { name: "Certificado internacional", included: false },
      ],
      popular: false,
      cta: "Começar Agora"
    },
    {
      name: "Premium",
      price: "349",
      period: "por mês",
      description: "Perfeito para quem busca fluência com uma experiência completa.",
      features: [
        { name: "3 aulas por semana", included: true },
        { name: "Material didático completo", included: true },
        { name: "Acesso à plataforma online", included: true },
        { name: "Clube de conversação semanal", included: true },
        { name: "1 aula particular por mês", included: true },
        { name: "Certificado internacional", included: false },
      ],
      popular: true,
      cta: "Escolher Premium"
    },
    {
      name: "VIP",
      price: "599",
      period: "por mês",
      description: "Experiência exclusiva com acompanhamento personalizado.",
      features: [
        { name: "5 aulas por semana", included: true },
        { name: "Material didático exclusivo", included: true },
        { name: "Acesso à plataforma online", included: true },
        { name: "Clube de conversação ilimitado", included: true },
        { name: "4 aulas particulares por mês", included: true },
        { name: "Certificado internacional", included: true },
      ],
      popular: false,
      cta: "Garantir Vaga VIP"
    }
  ];

  return (
    <section id="plans" ref={ref} className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Escolha o plano ideal para você</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Oferecemos opções para todos os objetivos e orçamentos. Todos os planos incluem 
            nossa metodologia exclusiva e professores qualificados.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`fade-in ${inView ? 'visible' : ''} rounded-xl overflow-hidden transition-all duration-300 ${
                plan.popular 
                  ? 'border-2 border-invictus-yellow shadow-xl transform hover:-translate-y-2' 
                  : 'border border-gray-200 shadow-md transform hover:-translate-y-1'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {plan.popular && (
                <div className="bg-invictus-yellow text-invictus-black text-center py-2 font-semibold">
                  Mais Popular
                </div>
              )}
              
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold">R${plan.price}</span>
                  <span className="text-gray-500 ml-1">{plan.period}</span>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      {feature.included ? (
                        <Check size={20} className="text-green-500 mr-2 flex-shrink-0" />
                      ) : (
                        <X size={20} className="text-gray-400 mr-2 flex-shrink-0" />
                      )}
                      <span className={feature.included ? 'text-gray-800' : 'text-gray-400'}>
                        {feature.name}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <button 
                  onClick={() => {
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className={plan.popular ? 'btn-primary w-full' : 'btn-outline w-full'}
                >
                  {plan.cta}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">
            Não encontrou o plano ideal? Entre em contato para uma proposta personalizada.
          </p>
          <button 
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="btn-secondary"
          >
            Falar com um Consultor
          </button>
        </div>
      </div>
    </section>
  );
};

export default Plans;