import React from 'react';
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-invictus-black text-white pt-16 pb-8">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1 - About */}
          <div>
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <span className="text-invictus-yellow">INVICTUS</span>
              <span className="ml-1">IDIOMAS</span>
            </h2>
            <p className="text-gray-300 mb-4">
              Escola de idiomas especializada em metodologias inovadoras para o ensino 
              de inglês, com foco em resultados rápidos e eficientes.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-invictus-yellow hover:text-invictus-black transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-invictus-yellow hover:text-invictus-black transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-invictus-yellow hover:text-invictus-black transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-invictus-yellow hover:text-invictus-black transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          {/* Column 2 - Cursos */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Nossos Cursos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-invictus-yellow transition-colors">Inglês Básico</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-invictus-yellow transition-colors">Inglês Intermediário</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-invictus-yellow transition-colors">Inglês Avançado</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-invictus-yellow transition-colors">Business English</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-invictus-yellow transition-colors">Preparatório TOEFL</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-invictus-yellow transition-colors">Preparatório IELTS</a>
              </li>
            </ul>
          </div>
          
          {/* Column 3 - Links Úteis */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Links Úteis</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-invictus-yellow transition-colors">Sobre Nós</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-invictus-yellow transition-colors">Metodologia</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-invictus-yellow transition-colors">Blog</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-invictus-yellow transition-colors">Perguntas Frequentes</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-invictus-yellow transition-colors">Trabalhe Conosco</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-invictus-yellow transition-colors">Política de Privacidade</a>
              </li>
            </ul>
          </div>
          
          {/* Column 4 - Contato */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail size={20} className="text-invictus-yellow mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-300">contato@invictusidiomas.com.br</span>
              </li>
              <li className="flex items-start">
                <Phone size={20} className="text-invictus-yellow mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-300">(11) 3456-7890<br />(11) 98765-4321</span>
              </li>
              <li>
                <p className="text-gray-300">
                  Av. Paulista, 1000 - Bela Vista<br />
                  São Paulo - SP, 01310-100
                </p>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {currentYear} Invictus Idiomas. Todos os direitos reservados.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 text-sm hover:text-invictus-yellow transition-colors">
                Termos de Uso
              </a>
              <a href="#" className="text-gray-400 text-sm hover:text-invictus-yellow transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-gray-400 text-sm hover:text-invictus-yellow transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;