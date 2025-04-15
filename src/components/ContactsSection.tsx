"use client";
import { useContext } from "react";
import { ActionsContext } from "@/context/ActionsContext";
import { FiMail, FiGithub, FiLinkedin, FiSend } from "react-icons/fi";

export const ContactsSection = () => {
  const { sectionRefs } = useContext(ActionsContext);
  const currentYear = new Date().getFullYear();
  return (
    <section
      className="w-full min-h-screen flex items-center justify-center bg-black pt-16"
      ref={sectionRefs[3]}
      id="contacts"
    >
      <div className="w-full max-w-[1440px] px-[20px] md:px-[80px] lg:px-[120px]">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 pb-20">
          {/* Informações de contato */}
          <div className="w-full lg:w-2/5">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Vamos <span className="text-purple-600">conversar</span>
            </h2>
            <p className="text-gray-300 mb-8 text-lg">
              Estou sempre aberto a novas oportunidades, colaborações e projetos
              interessantes. Entre em contato comigo através do formulário ou
              por uma das plataformas abaixo.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-(--color-default) flex items-center justify-center">
                  <FiMail className="text-white text-xl" />
                </div>
                <div>
                  <h3 className="text-white font-medium">Email</h3>
                  <p className="text-gray-400">matheus.rodrigues.esoft@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-(--color-default) flex items-center justify-center">
                  <FiGithub className="text-white text-xl" />
                </div>
                <div>
                  <h3 className="text-white font-medium">GitHub</h3>
                  <a
                    href="https://github.com/MatheusRodriguesEsoft"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-(--color-default-hover) transition-colors"
                  >
                    github.com/matheus-rodrigues
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-(--color-default) flex items-center justify-center">
                  <FiLinkedin className="text-white text-xl" />
                </div>
                <div>
                  <h3 className="text-white font-medium">LinkedIn</h3>
                  <a
                    href="https://www.linkedin.com/in/matheus-rodrigues-in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-(--color-default-hover) transition-colors"
                  >
                    linkedin.com/in/matheus-rodrigues
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Formulário de contato */}
          <div className="w-full lg:w-3/5">
            <div className="bg-neutral-950/60 rounded p-6 sm:p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                Me envie uma mensagem
              </h3>

              <form onSubmit={() => {}} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-gray-300 mb-2">
                      Seu nome
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full bg-neutral-700 text-white px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
                      placeholder="Digite seu nome"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-gray-300 mb-2">
                      Seu email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full bg-neutral-700 text-white px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
                      placeholder="Digite seu email"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="w-full bg-neutral-700 text-white px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-purple-600 resize-none"
                    placeholder="Digite sua mensagem"
                  ></textarea>
                </div>

                <div>
                  <button
                    type="submit"
                    className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 bg-(--color-default) hover:bg-(--color-default-hover) text-white font-medium rounded transition-colors duration-300 disabled:opacity-70"
                  >
                    <>
                      <FiSend />
                      <span>Enviar mensagem</span>
                    </>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* Copyright e créditos */}
        <div className="border-t border-neutral-800 py-6">
          <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 flex flex-col sm:flex-row justify-center items-center">
            <p className="text-sm text-gray-500 mb-4 sm:mb-0">
              © {currentYear} by Matheus Rodrigues. Todos os direitos reservados.
            </p>
            
          </div>
        </div>
      </div>
    </section>
  );
};
