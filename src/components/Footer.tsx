"use client";
import { FiGithub, FiLinkedin, FiMail, FiTwitter, FiInstagram } from "react-icons/fi";
import { menuLinks } from "@/resources/menu";
import { Link } from "react-scroll";

export const Footer = () => {
  

  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full bg-neutral-950 text-gray-300 bottom-0 absolute">
      {/* Parte principal do footer */}
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e breve descrição */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-white mb-4">
              Seu<span className="text-purple-600">Nome</span>
            </h2>
            <p className="text-gray-400 mb-6 max-w-md">
              Desenvolvedor Front-end apaixonado por criar experiências digitais interativas e responsivas, 
              sempre em busca de novos desafios e aprendizados.
            </p>
            <div className="flex space-x-4 mb-6">
              <a href="https://github.com/seuperfil" target="_blank" rel="noopener noreferrer" 
                 className="w-10 h-10 rounded-full bg-neutral-800 hover:bg-purple-600 flex items-center justify-center transition-colors duration-300">
                <FiGithub className="text-white" />
              </a>
              <a href="https://linkedin.com/in/seuperfil" target="_blank" rel="noopener noreferrer"
                 className="w-10 h-10 rounded-full bg-neutral-800 hover:bg-purple-600 flex items-center justify-center transition-colors duration-300">
                <FiLinkedin className="text-white" />
              </a>
              <a href="mailto:seu@email.com" 
                 className="w-10 h-10 rounded-full bg-neutral-800 hover:bg-purple-600 flex items-center justify-center transition-colors duration-300">
                <FiMail className="text-white" />
              </a>
              <a href="https://twitter.com/seuperfil" target="_blank" rel="noopener noreferrer"
                 className="w-10 h-10 rounded-full bg-neutral-800 hover:bg-purple-600 flex items-center justify-center transition-colors duration-300">
                <FiTwitter className="text-white" />
              </a>
              <a href="https://instagram.com/seuperfil" target="_blank" rel="noopener noreferrer"
                 className="w-10 h-10 rounded-full bg-neutral-800 hover:bg-purple-600 flex items-center justify-center transition-colors duration-300">
                <FiInstagram className="text-white" />
              </a>
            </div>
          </div>

          {/* Links rápidos */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
               {menuLinks.map(({ id, to, label }) => (
                        <li
                          key={id}
                          className="w-full text-white px-5 py-3 md:px-0 md:py-0 md:w-auto"
                        >
                          <Link
                            to={to}
                            spy={true}
                            smooth={true}
                            duration={100}
                            className="cursor-pointer"
                          >
                            {label}
                          </Link>
                        </li>
                      ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright e créditos */}
      <div className="border-t border-neutral-800 py-6">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 mb-4 sm:mb-0">
            © {currentYear} SeuNome. Todos os direitos reservados.
          </p>
          <div className="text-sm text-gray-500">
            <p>Desenvolvido com <span className="text-red-500">❤</span> e Next.js</p>
          </div>
        </div>
      </div>
    </footer>
  );
};