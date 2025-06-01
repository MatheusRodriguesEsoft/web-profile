"use client";
import { useContext, useRef, useState } from "react";
import { ActionsContext } from "@/context/ActionsContext";
import { FiMail, FiGithub, FiLinkedin, FiSend } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import emailjs from "emailjs-com";

export const ContactsSection = () => {
  const { sectionRefs } = useContext(ActionsContext);
  const currentYear = new Date().getFullYear();
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    if (!formRef.current) return;

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(() => {
        alert("Mensagem enviada com sucesso!");
        formRef.current?.reset();
      })
      .catch((error) => {
        console.error("Erro ao enviar:", error);
        alert("Erro ao enviar mensagem. Tente novamente.");
      })
      .finally(() => setLoading(false));
  };

  return (
    <section
      className="w-full min-h-screen flex items-center justify-center"
      ref={sectionRefs[3]}
      id="contacts"
    >
      <div className="w-full max-w-[1440px] px-[20px] md:px-[80px] lg:px-[120px] pt-28">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 pb-20">
          {/* Informações de contato */}
          <div className="w-full lg:w-2/5">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Let&apos;s <span className="text-(--color-default)">talk</span>
            </h2>
            <p className="text-gray-300 mb-8 text-lg">
              I am always open to new opportunities, collaborations and
              interesting projects. Contact me using the form or through one of
              the platforms below.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-(--color-default) flex items-center justify-center">
                  <FaWhatsapp className="text-white text-xl" />
                </div>
                <div>
                  <h3 className="text-white font-medium">WhatsApp</h3>
                  <a
                    href="https://wa.me/+5561998896788"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-(--color-default-hover) transition-colors"
                  >
                    whatsapp/(61)998896788
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-(--color-default) flex items-center justify-center">
                  <FiMail className="text-white text-xl" />
                </div>
                <div>
                  <h3 className="text-white font-medium">Email</h3>
                  <a
                    href="mailto:matheus.rodrigues.esoft@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-(--color-default-hover) transition-colors"
                  >
                    matheus.rodrigues.esoft@gmail.com
                  </a>
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

          {/* Formulário */}
          <div className="w-full lg:w-3/5">
            <div className="bg-neutral-950/60 rounded p-6 sm:p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                Send me a message
              </h3>

              <form ref={formRef} onSubmit={sendEmail} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-gray-300 mb-2">
                      Your name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full bg-neutral-700 text-white px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-300 mb-2">
                      Your email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full bg-neutral-700 text-white px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="w-full bg-neutral-700 text-white px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-purple-600 resize-none"
                    placeholder="Type your message"
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 bg-(--color-default) hover:bg-(--color-default-hover) text-white font-medium rounded transition-colors duration-300 disabled:opacity-70"
                  >
                    <>
                      <FiSend />
                      <span>{loading ? "Sending..." : "Send message"}</span>
                    </>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Rodapé */}
        <div className="border-t border-neutral-800 py-6">
          <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 flex flex-col sm:flex-row justify-center items-center">
            <p className="text-sm text-gray-500 mb-4 sm:mb-0">
              © {currentYear} by Matheus Rodrigues. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
