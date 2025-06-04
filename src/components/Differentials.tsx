import React from 'react';
import { useInView } from 'react-intersection-observer';
import { BookOpen, Users, Award, Clock, Globe, HeadphonesIcon } from 'lucide-react';

const Differentials: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const differentials = [
    {
      icon: <BookOpen size={36} className="text-invictus-yellow" />,
      title: "Metodologia Exclusiva",
      description: "Nossa metodologia única combina teoria e prática para que você aprenda inglês de forma natural e eficiente."
    },
    {
      icon: <Users size={36} className="text-invictus-yellow" />,
      title: "Professores Qualificados",
      description: "Todos os nossos professores são nativos ou possuem certificação internacional avançada."
    },
    {
      icon: <Award size={36} className="text-invictus-yellow" />,
      title: "Certificado Reconhecido",
      description: "Nosso certificado é reconhecido internacionalmente e valorizado no mercado de trabalho."
    },
    {
      icon: <Clock size={36} className="text-invictus-yellow" />,
      title: "Horários Flexíveis",
      description: "Oferecemos aulas em diversos horários para você estudar quando for mais conveniente."
    },
    {
      icon: <Globe size={36} className="text-invictus-yellow" />,
      title: "Aulas Online ou Presencial",
      description: "Você escolhe estudar no conforto da sua casa ou em nossas modernas instalações."
    },
    {
      icon: <HeadphonesIcon size={36} className="text-invictus-yellow" />,
      title: "Suporte Contínuo",
      description: "Contamos com equipe de suporte disponível para ajudar com suas dúvidas a qualquer momento."
    }
  ];

  return (
    <section id="differentials" ref={ref} className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Por que escolher a Invictus Idiomas?</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Nosso método exclusivo e nossa equipe de profissionais qualificados 
            garantem que você alcance a fluência em inglês de forma rápida e eficiente.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentials.map((item, index) => (
            <div 
              key={index}
              className={`card-custom p-6 fade-in ${inView ? 'visible' : ''}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="p-4 bg-invictus-gray rounded-full mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button 
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="btn-primary"
          >
            Conheça Nossa Metodologia
          </button>
        </div>
      </div>
    </section>
  );
};

export default Differentials;