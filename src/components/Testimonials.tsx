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
  const [isTransitioning, setIsTransitioning] = useState(false);

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

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;

    if (autoplay && !isTransitioning) {
      interval = setInterval(() => {
        goToNext();
      }, 8000);
    }

    return () => clearInterval(interval);
  }, [autoplay, activeIndex, isTransitioning]); // Added activeIndex to dependencies

  const goToPrevious = () => {
    if (isTransitioning) return;

    setAutoplay(false);
    setIsTransitioning(true);
    setActiveIndex((current) => (current === 0 ? testimonials.length - 1 : current - 1));

    setTimeout(() => setIsTransitioning(false), 1000);
  };

  const goToNext = () => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setActiveIndex((current) => (current + 1) % testimonials.length);

    setTimeout(() => setIsTransitioning(false), 1000);
  };

  const goToSlide = (index: number) => {
    if (isTransitioning || index === activeIndex) return;

    setAutoplay(false);
    setIsTransitioning(true);
    setActiveIndex(index);

    setTimeout(() => setIsTransitioning(false), 1000);
  };

  return (
    <section id="testimonials" ref={ref} className="py-20 bg-gray-50">
      <style jsx>{`
        .fade-in {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease-out;
        }
        .fade-in.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .carousel-container {
          position: relative; /* Keep relative for track positioning if needed, but not for buttons */
          overflow: hidden; /* This will hide parts of the track during transition */
          border-radius: 16px;
        }
        .carousel-track {
          display: flex;
          transition: transform 1s cubic-bezier(0.25, 0.1, 0.25, 1);
          will-change: transform;
        }
        .testimonial-slide {
          min-width: 100%;
          padding: 0 20px; /* This padding is inside the slide */
          box-sizing: border-box;
        }
        .testimonial-card {
          background: white;
          border-radius: 12px;
          padding: 32px;
          margin: 0 10px; /* Margin for the card inside the slide */
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          position: relative;
          overflow: hidden; /* For quote icon or other internal elements if needed */
        }
        .testimonial-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #fbbf24, #f59e0b);
        }
        /* nav-button positioning is now relative to the new wrapper */
        .nav-button {
          position: absolute;
          top: 50%; /* Vertically centers relative to the new wrapper around carousel-container */
          transform: translateY(-50%);
          z-index: 10;
          background: white;
          border: 2px solid #fbbf24;
          border-radius: 50%;
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }
        .nav-button:hover {
          background: #fbbf24;
          color: white;
          transform: translateY(-50%) scale(1.1);
        }
        .nav-button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
          transform: translateY(-50%) scale(1);
        }
        .nav-button.prev {
          left: -12px; /* Sits in the padding of the outer 'px-16' container */
        }
        .nav-button.next {
          right: -12px; /* Sits in the padding of the outer 'px-16' container */
        }
        .dots-container {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin-top: 32px;
        }
        .dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          border: 2px solid #fbbf24;
          background: transparent;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .dot.active {
          background: #fbbf24;
          transform: scale(1.2);
        }
        .dot:hover {
          transform: scale(1.1);
        }
        .rating-stars {
          display: flex;
          gap: 2px;
          margin: 16px 0;
        }
        .quote-icon {
          position: absolute;
          top: -10px; /* Adjusted to ensure visibility within card */
          right: 20px;
          color: #fbbf24;
          opacity: 0.2;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            O que nossos alunos dizem
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Veja as histórias de sucesso dos nossos alunos que conquistaram a fluência
            em inglês com nossa metodologia exclusiva.
          </p>
        </div>

        <div className={`fade-in ${inView ? 'visible' : ''}`}>
          {/* This is the OuterWrapper providing px-16 for button horizontal positioning */}
          <div className="relative max-w-5xl mx-auto px-16">

            {/* NEW: CarouselAndButtonsWrapper - for vertical centering of buttons relative to carousel slides */}
            <div className="relative">
              <div className="carousel-container">
                <div
                  className="carousel-track"
                  style={{
                    transform: `translateX(-${activeIndex * 100}%)`
                  }}
                >
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="testimonial-slide">
                      <div className="testimonial-card">
                        <Quote size={32} className="quote-icon" />

                        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                          <div className="flex-shrink-0 text-center">
                            <img
                              src={testimonial.image}
                              alt={testimonial.name}
                              className="w-20 h-20 rounded-full object-cover border-4 border-yellow-400 mx-auto"
                            />
                            <div className="rating-stars justify-center">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  size={16}
                                  fill={i < testimonial.rating ? "#fbbf24" : "none"}
                                  stroke={i < testimonial.rating ? "#fbbf24" : "#d1d5db"}
                                />
                              ))}
                            </div>
                          </div>

                          <div className="flex-1 text-center md:text-left">
                            <p className="text-gray-700 italic mb-6 text-lg leading-relaxed">
                              "{testimonial.text}"
                            </p>
                            <div>
                              <h4 className="font-semibold text-xl text-gray-900 mb-1">
                                {testimonial.name}
                              </h4>
                              <p className="text-gray-500 text-sm">
                                {testimonial.role}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                {/* Buttons are no longer direct children here */}
              </div>

              {/* Buttons are now children of the new 'relative' wrapper, siblings to 'carousel-container' */}
              <button
                onClick={goToPrevious}
                disabled={isTransitioning}
                className="nav-button prev"
                aria-label="Depoimento anterior"
              >
                <ChevronLeft size={20} />
              </button>

              <button
                onClick={goToNext}
                disabled={isTransitioning}
                className="nav-button next"
                aria-label="Próximo depoimento"
              >
                <ChevronRight size={20} />
              </button>
            </div> {/* End of new 'relative' wrapper for carousel and buttons */}

            {/* Dots container remains a child of the outer 'px-16' wrapper */}
            <div className="dots-container">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  disabled={isTransitioning}
                  className={`dot ${index === activeIndex ? 'active' : ''}`}
                  aria-label={`Ir para depoimento ${index + 1}`}
                />
              ))}
            </div>
          </div> {/* End of 'relative max-w-5xl mx-auto px-16' */}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;