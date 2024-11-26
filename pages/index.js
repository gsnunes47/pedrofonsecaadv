import React from 'react';
import '@fontsource/montserrat';
import { FaWhatsapp } from 'react-icons/fa6'
import {
  User,
  Phone,
  Facebook,
  Instagram,
  MessageCircle,
  PhoneCall,
  MessageSquare,
  MessageCircleOff
} from 'lucide-react';

const LawFirmLandingPage = () => {
  return (
    <div className='font-sans'>

        {/* Botão Whats */}
        <a
          href='https://wa.me/5513997262427'
          className='bg-green-600 hover:bg-green-700 w-min p-3 rounded-full fixed bottom-10 right-4 cursor-pointer md:right-8 transition-colors duration-300 ease-in-out'
        >
          <FaWhatsapp color='white' className='w-7 h-7 md:w-10 md:h-10' />
        </a>

        {/* Navbar */}
        <nav className="bg-sky-950 py-4 ">

          <div className="text-customGold container 2xl:mx-auto px-4 flex justify-between items-center">
            <div className="flex items-center ">
              <img src="assets\pf logo branca.png" alt="Logo" className="h-20" />
              <div>
                <div className="font-semibold text-lg">Pedro Fonseca</div>
                <div className="text-sm ">advogado</div>
              </div>
            </div>

            <div className="2xl:text-lg flex justify-end">
              <a href="#" className="bg-sky-950 px-4 transition-colors duration-300 ease-in-out py-2 rounded-md hover:text-white">Início</a>
              <a href="#areas" className="bg-sky-950 transition-colors duration-300 ease-in-out px-4 py-2 rounded-md hover:text-white">Áreas de atuação</a>
              <a href="#" className="bg-sky-950 px-4 transition-colors duration-300 ease-in-out py-2 rounded-md hover:text-white">Sobre</a>
              <a href="#contato" className="bg-sky-950 transition-colors duration-300 ease-in-out px-4 py-2 rounded-md hover:text-white">Contatos</a>
              <a href='https://wa.me/5513997262427' className="bg-sky-950 transition-colors duration-300 ease-in-out hover:text-white px-4 py-2 rounded-md">
                Fale comigo
              </a>
            </div>
          </div>
        </nav>

      {/* Body */}
      <div className="min-h-screen  bg-sky-50">
        <div className="container mx-auto px-4 py-16 grid grid-cols-2 gap-8">
          <div className="text-black">
            <h2 className="text-2xl mb-4">Sua Defesa, Minha Prioridade</h2>
            <h1 className="text-4xl font-bold mb-6">
              Soluções Jurídicas Eficazes
            </h1>
            <p className="text-black mb-8">
              OAB/SP 518.500
            </p>
            <button className="bg-customGold transition-colors duration-300 ease-in-out text-white hover:bg-sky-900 px-6 py-3 rounded-md">
              Fale comigo
            </button>
          </div>
          <div className="relative">
            <div className="bg-sky-950 rounded-3xl p-8 h-full">
              <img
                src="/assets/Dr Pedro.jpg"
                alt="Advogado Pedro Fonseca"
                className="w-full h-full object-cover "
              />
            </div>
          </div>
        </div>

        <div className="bg-sky-950 py-16">
          <div className="container mx-auto px-4">
            <h1 id='areas' className="text-3xl text-white text-center font-bold mb-12">
              Conheça minhas áreas de atuação
            </h1>

            <div className="grid grid-cols-2 gap-6">
              {[
                {
                  icon: <User className="w-12 h-12 mb-4" />,
                  title: "Direito trabalhista",
                  description: "Advogado especializado em Direito e Processo do Trabalho, fornecemos orientação e representação sólida para proteger os direitos de trabalhadores e empregadores."
                },
                {
                  icon: <User className="w-12 h-12 mb-4" />,
                  title: "Direito previdenciário",
                  description: "Advogado com experiência sólida em Direito Previdenciário, oferecemos orientação especializada para auxiliar nossos clientes a garantir seus benefícios previdenciários.",
                }
              ].map((area, index) => (
                <div
                  key={index}
                  className={` ${
                      area.disabled ? "bg-slate-500" : "bg-customGold"
                    } p-6 rounded-lg text-black text-center`}
                >
                  <div className="flex justify-center">
                    {area.icon}
                  </div>
                  <h3 className="text-xl text-white  font-semibold mb-4">{area.title}</h3>
                  <p className="text-white text-sm mb-4">{area.description}</p>
                  <a href='https://wa.me/5513997262427' className='text-white  hover:text-blue-500 transition-colors duration-300 ease-in-out'>SAIBA MAIS ➔</a>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16 grid grid-cols-2 gap-8">
          <div className="relative">
            <div className="bg-sky-950 rounded-3xl p-8 h-full">
              <img
                src="/assets/Dr Pedro.jpg"
                alt="Advogado Pedro Fonseca"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
          <div className="text-black">
            <h2 className="text-4xl font-bold mb-6">Sobre mim</h2>
            <p className="text-black-300 mb-4">
              Eu sou o Dr. Pedro Fonseca, advogado inscrito na OAB/SP 518.500. Graduado em Direito dedicando minha carreira às áreas do Direito Trabalhista e ao Direito Previdenciário.
            </p>
            <p className="text-black-300 mb-4">
              Minha abordagem é personalizada, com atendimento 100% online
            </p>
            <p className="text-black-300 mb-8">
              Conte comigo para uma representação jurídica comprometida e eficaz. Agende uma consulta e deixe-me ser sua voz na busca pela justiça.
            </p>
            <a
              href="https://wa.me/5513997262427"
              className="bg-customGold transition-colors duration-300 ease-in-out hover:bg-sky-900 text-white px-6 py-3 rounded-md inline-block"
            >
              Fale comigo
            </a>
          </div>
        </div>

        <div class="whatsapp">
          <a href="https://api.whatsapp.com/send?phone=5544999601880&amp;text=Ol%C3%A1,%20vim%20atrav%C3%A9s%20do%20site%20e%20gostaria%20de%20receber%20algumas%20informa%C3%A7%C3%B5es%20" target="_blank">
          <i class="fab fa-whatsapp"></i>
          </a>
      </div>


        <footer className="bg-sky-950 text-customGold pt-16 pb-4">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-3 gap-8 border-b border-customGold pb-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <img src="/assets/pf logo branca.png" alt="Logo" className="h-20" />
                  <div>
                    <div className="font-semibold text-lg">Pedro Fonseca</div>
                    <div className="text-sm text-black-400">advogado</div>
                  </div>
                </div>
              </div>

              <div>
                <h3 id='contato' className="text-xl font-bold mb-4">Contato</h3>
                <div className="flex flex-col space-y-2">
                  <a href="tel:+5513997262427" className="flex transition-colors duration-300 ease-in-out items-center space-x-2 text-black-400 hover:text-white">
                    <PhoneCall size={20} />
                    <span>(13) 99726-2427</span>
                  </a>
                  <a href="https://wa.me/5513997262427" className="flex transition-colors duration-300 ease-in-out items-center space-x-2 text-black-400 hover:text-white">
                    <MessageCircle size={20} />
                    <span>(13) 99726-2427</span>
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">Minhas redes sociais</h3>
                <div className="flex space-x-4">
                  <a  target="_blank" rel=" noopener noreferrer" href="https://www.instagram.com/pedro.fonseca.adv/profilecard/?igsh=MTg3dG5mZGU1N2t0eA==" className="transition-colors duration-300 ease-in-out text-black-400 hover:text-white">
                    <Instagram size={24} />
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8 text-center text-sm text-black-400">

              <p>© COPYRIGHT 2024 - Pedro Fonseca. Todos os direitos reservados.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default LawFirmLandingPage;