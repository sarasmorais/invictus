import React from 'react';
import { Facebook, Instagram, Youtube, } from 'lucide-react'; // Assuming Twitter might be used later, keeping it.

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-invictus-dark-gray text-white pt-12 pb-8">
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
              <a href="https://web.facebook.com/InvictusIdiomas/" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-2 rounded-full hover:bg-invictus-yellow hover:text-invictus-black transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/invictusidiomasoficial/#" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-2 rounded-full hover:bg-invictus-yellow hover:text-invictus-black transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://www.youtube.com/@InvictusIdiomas" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-2 rounded-full hover:bg-invictus-yellow hover:text-invictus-black transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Column 2 - Links Úteis (Previously Column 3) */}
          <div className="ml-32">
            <h3 className="text-xl font-semibold mb-4 whitespace-nowrap">Links Úteis</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-invictus-yellow transition-colors whitespace-nowrap">Sobre Nós</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-invictus-yellow transition-colors whitespace-nowrap">Metodologia</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-invictus-yellow transition-colors whitespace-nowrap">Blog</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-invictus-yellow transition-colors whitespace-nowrap">Perguntas Frequentes</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-invictus-yellow transition-colors whitespace-nowrap">Trabalhe Conosco</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-invictus-yellow transition-colors whitespace-nowrap">Política de Privacidade</a>
              </li>
            </ul>
          </div>

          {/* Column 3 - Nossas Unidades (New Column) */}
          <div className="ml-32">
            <div className="text-center mb-4">
              <h3 className="text-xl font-semibold ml-36 whitespace-nowrap">Nossas Unidades</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-72">
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-gray-200 whitespace-nowrap">Unidade Aldeota</p>
                  <p className="text-gray-300 whitespace-nowrap">Rua Carlos Vasconcelos 1240</p>
                  <p className="text-gray-300 whitespace-nowrap">85 3016.1200</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-200 whitespace-nowrap">Unidade Cid. dos Funcionários</p>
                  <p className="text-gray-300 whitespace-nowrap">Av. Oliveira Paiva, 740</p>
                  <p className="text-gray-300 whitespace-nowrap">85 3393.7900</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-gray-200 whitespace-nowrap">Unidade Bez. de Menezes</p>
                  <p className="text-gray-300 whitespace-nowrap">Av. Bezerra de Menezes, 2571</p>
                  <p className="text-gray-300 whitespace-nowrap">85 2180.6118</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-200 whitespace-nowrap">Unidade Treze de Maio</p>
                  <p className="text-gray-300 whitespace-nowrap">Av. Treze de Maio, 1043</p>
                  <p className="text-gray-300 whitespace-nowrap">85 3393.9000</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-2 md:mb-0">
              © {currentYear} Invictus Idiomas. Todos os direitos reservados.
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