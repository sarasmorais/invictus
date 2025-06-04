import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const testimonials = [
    {
      name: "Ana Silva",
      role: "Profissional de Marketing",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150",
      text: "Depois de tentar vários cursos sem sucesso, a Invictus me ajudou a finalmente conquistar fluência em inglês. A metodologia deles é incrível e os professores são excelentes. Consegui uma promoção no trabalho graças ao meu novo nível de inglês!",
      rating: 5
    },
    {
      name: "Carlos Mendes",
      role: "Engenheiro de Software",
      image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150",
      text: "As aulas na Invictus são dinâmicas e práticas. Em apenas 6 meses, passei de um nível básico para intermediário avançado. A flexibilidade de horários foi essencial para conciliar com meu trabalho.",
      rating: 5
    },
    {
      name: "Juliana Costa",
      role: "Estudante Universitária",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150",
      text: "O método da Invictus foca muito na conversação, o que me ajudou a perder o medo de falar inglês. Os professores são pacientes e as aulas são super interativas. Recomendo para quem quer aprender inglês de verdade!",
      rating: 5
    },
    {
      name: "Roberto Almeida",
      role: "Empresário",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150",
      text: "Precisava melhorar meu inglês para negócios internacionais e a Invictus me ofereceu um programa personalizado. O resultado foi impressionante e agora consigo conduzir reuniões em inglês com confiança.",
      rating: 4
    }
  ];

  // Auto advance carousel
  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    
    if (autoplay) {
      interval = setInterval(() => {
        setActiveIndex((current) => (current + 1) % testimonials.length);
      }, 5000);
    }
    
    return () => clearInterval(interval);
  }, [autoplay, testimonials.length]);

  const goToPrevious = () => {
    setAutoplay(false);
    setActiveIndex((current) => (current === 0 ? testimonials.length - 1 : current - 1));
  };

  const goToNext = () => {
    setAutoplay(false);
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };

  const selectTestimonial = (index: number) => {
    setAutoplay(false);
    setActiveIndex(index);
  };

  return (
    <section id="testimonials" ref={ref} className="section-padding bg-invictus-gray">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">O que nossos alunos dizem</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Veja as histórias de sucesso dos nossos alunos que conquistaram a fluência 
            em inglês com nossa metodologia exclusiva.
          </p>
        </div>

        <div className={`fade-in ${inView ? 'visible' : ''}`}>
          <div className="relative max-w-4xl mx-auto">
            {/* Quotation mark */}
            <div className="absolute -top-10 -left-10 text-invictus-yellow opacity-20">
              <Quote size={80} />
            </div>

            {/* Carousel */}
            <div className="relative overflow-hidden rounded-xl bg-white shadow-lg p-8 md:p-12">
              <div 
                className="transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                <div className="flex">
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                        <div className="md:w-1/4 flex flex-col items-center">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name} 
                            className="w-24 h-24 rounded-full object-cover border-4 border-invictus-yellow"
                          />
                          <div className="flex items-center mt-3">
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i}
                                size={16} 
                                fill={i < testimonial.rating ? "#FFD700" : "none"} 
                                stroke={i < testimonial.rating ? "#FFD700" : "#9CA3AF"}
                                className="mx-0.5"
                              />
                            ))}
                          </div>
                        </div>
                        <div className="md:w-3/4 text-center md:text-left">
                          <p className="text-gray-700 italic mb-6 text-lg">{testimonial.text}</p>
                          <div>
                            <h4 className="font-semibold text-xl">{testimonial.name}</h4>
                            <p className="text-gray-500">{testimonial.role}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
                <button 
                  onClick={goToPrevious}
                  className="bg-invictus-yellow p-2 rounded-full text-invictus-black hover:bg-yellow-500 transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={24} />
                </button>
              </div>
              <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
                <button 
                  onClick={goToNext}
                  className="bg-invictus-yellow p-2 rounded-full text-invictus-black hover:bg-yellow-500 transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>

            {/* Dots */}
            <div className="flex justify-center mt-6 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => selectTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === activeIndex ? 'bg-invictus-yellow' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;