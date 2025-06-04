import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCourseDropdownOpen, setIsCourseDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <h1 className="text-2xl font-bold flex items-center">
            <span className="text-invictus-yellow">INVICTUS</span>
            <span className="text-invictus-black ml-1">IDIOMAS</span>
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('home')}
            className="font-medium text-invictus-black hover:text-invictus-yellow transition-colors"
          >
            Home
          </button>
          
          <div className="relative group">
            <button 
              className="flex items-center font-medium text-invictus-black hover:text-invictus-yellow transition-colors"
              onClick={() => setIsCourseDropdownOpen(!isCourseDropdownOpen)}
            >
              Cursos <ChevronDown size={16} className="ml-1" />
            </button>
            <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all opacity-0 invisible group-hover:opacity-100 group-hover:visible">
              <div className="py-1">
                <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-invictus-yellow hover:text-invictus-black w-full text-left">
                  Inglês Básico
                </button>
                <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-invictus-yellow hover:text-invictus-black w-full text-left">
                  Inglês Intermediário
                </button>
                <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-invictus-yellow hover:text-invictus-black w-full text-left">
                  Inglês Avançado
                </button>
                <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-invictus-yellow hover:text-invictus-black w-full text-left">
                  Business English
                </button>
              </div>
            </div>
          </div>
          
          <button 
            onClick={() => scrollToSection('differentials')}
            className="font-medium text-invictus-black hover:text-invictus-yellow transition-colors"
          >
            Diferenciais
          </button>
          
          <button 
            onClick={() => scrollToSection('testimonials')}
            className="font-medium text-invictus-black hover:text-invictus-yellow transition-colors"
          >
            Depoimentos
          </button>
          
          <button 
            onClick={() => scrollToSection('plans')}
            className="font-medium text-invictus-black hover:text-invictus-yellow transition-colors"
          >
            Planos
          </button>
          
          <button 
            onClick={() => scrollToSection('contact')}
            className="font-medium text-invictus-black hover:text-invictus-yellow transition-colors"
          >
            Contato
          </button>
        </nav>

        {/* CTA Button */}
        <button 
          onClick={() => scrollToSection('contact')}
          className="hidden lg:block btn-primary"
        >
          Aula Grátis
        </button>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu}
          className="lg:hidden text-invictus-black"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`lg:hidden absolute top-full left-0 w-full bg-white shadow-md transition-all duration-300 ${
          isMenuOpen ? 'max-h-[500px] opacity-100 visible' : 'max-h-0 opacity-0 invisible'
        } overflow-hidden`}
      >
        <div className="container-custom py-4 flex flex-col space-y-4">
          <button 
            onClick={() => scrollToSection('home')}
            className="font-medium text-invictus-black hover:text-invictus-yellow transition-colors text-left py-2"
          >
            Home
          </button>
          
          <button 
            onClick={() => setIsCourseDropdownOpen(!isCourseDropdownOpen)}
            className="font-medium text-invictus-black hover:text-invictus-yellow transition-colors text-left py-2 flex items-center justify-between"
          >
            Cursos <ChevronDown size={16} className={`transform transition-transform ${isCourseDropdownOpen ? 'rotate-180' : ''}`} />
          </button>
          
          {isCourseDropdownOpen && (
            <div className="ml-4 flex flex-col space-y-2">
              <button className="text-sm text-gray-700 hover:text-invictus-yellow text-left py-1">
                Inglês Básico
              </button>
              <button className="text-sm text-gray-700 hover:text-invictus-yellow text-left py-1">
                Inglês Intermediário
              </button>
              <button className="text-sm text-gray-700 hover:text-invictus-yellow text-left py-1">
                Inglês Avançado
              </button>
              <button className="text-sm text-gray-700 hover:text-invictus-yellow text-left py-1">
                Business English
              </button>
            </div>
          )}
          
          <button 
            onClick={() => scrollToSection('differentials')}
            className="font-medium text-invictus-black hover:text-invictus-yellow transition-colors text-left py-2"
          >
            Diferenciais
          </button>
          
          <button 
            onClick={() => scrollToSection('testimonials')}
            className="font-medium text-invictus-black hover:text-invictus-yellow transition-colors text-left py-2"
          >
            Depoimentos
          </button>
          
          <button 
            onClick={() => scrollToSection('plans')}
            className="font-medium text-invictus-black hover:text-invictus-yellow transition-colors text-left py-2"
          >
            Planos
          </button>
          
          <button 
            onClick={() => scrollToSection('contact')}
            className="font-medium text-invictus-black hover:text-invictus-yellow transition-colors text-left py-2"
          >
            Contato
          </button>
          
          <button 
            onClick={() => scrollToSection('contact')}
            className="btn-primary self-start"
          >
            Aula Grátis
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;