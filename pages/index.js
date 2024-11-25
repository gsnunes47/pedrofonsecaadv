import React from 'react';
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
    <div className="min-h-screen bg-sky-50">
      {/* Header/Navbar */}
      <nav className="bg-teal-700 text-black py-4 ">
        <div className="text-white container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img src="assets\pf logo branca.png" alt="Logo" className="h-20" />
            <div>
              <div className="font-semibold text-lg">Pedro Fonseca</div>
              <div className="text-sm ">advogado</div>
            </div>
          </div>
          
          <div className="text-lg flex items-center space-x-6">
            <a href="#" className="bg-teal-700 hover:bg-teal-600 px-4 py-2 rounded-md hover:text-black-300">Início</a>
            <a href="#areas" className="bg-teal-700 hover:bg-teal-600 px-4 py-2 rounded-md hover:text-black-300">Áreas de atuação</a>
            <a href="#" className="bg-teal-700 hover:bg-teal-600 px-4 py-2 rounded-md hover:text-black-300">Sobre</a>
            <a href="#contato" className="bg-teal-700 hover:bg-teal-600 px-4 py-2 rounded-md hover:text-black-300">Contatos</a>
            <a href='https://wa.me/5513997262427' className="bg-teal-700 hover:bg-teal-600 px-4 py-2 rounded-md">
              Fale comigo
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16 grid grid-cols-2 gap-8">
        <div className="text-black">
          <h2 className="text-2xl mb-4">Sua Defesa, Minha Prioridade</h2>
          <h1 className="text-4xl font-bold mb-6">
            Soluções Jurídicas Personalizadas
          </h1>
          <p className="text-black mb-8">
            Ut id labore amet nisi. Est id qui esse et elit ut nisi eu. Proident culpa irure quis excepteur minim. Qui labore commodo Lorem enim ex officia enim est magna nulla in.
          </p>
          <button className="bg-teal-700 text-white hover:bg-teal-600 px-6 py-3 rounded-md">
            Fale comigo
          </button>
        </div>
        <div className="relative">
          <div className="bg-teal-900 rounded-3xl p-8 h-full">
            <img 
              src="/assets/Dr Pedro.jpg" 
              alt="Advogado Pedro Fonseca" 
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>

      {/* Áreas de Atuação */}
      <div className="bg-teal-700 py-16">
        <div className="container mx-auto px-4">
          <h1 id='areas' className="text-3xl  text-center font-bold mb-12">
            Conheça minhas áreas de atuação
          </h1>
          
          <div className="grid grid-cols-2 gap-6">
            {[
              {
                icon: <User className="w-12 h-12 mb-4" />,
                title: "Direito trabalhista",
                description: "Advogado especializado em direito trabalhista atua na orientação, negociação e, se necessário, na representação legal de seus clientes perante tribunais, garantindo o cumprimento das leis trabalhistas."
              },
              {
                icon: <User className="w-12 h-12 mb-4" />,
                title: "Direito previdenciário",
                description: "Início apenas em 2025.",
                disabled: true
              }
            ].map((area, index) => (
              <div 
                key={index} 
                className={`bg-teal-600 ${
                    area.disabled ? "bg-slate-500 text-black" : ""
                  } p-6 rounded-lg text-black text-center`}
              >
                <div className="flex justify-center">
                  {area.icon}
                </div>
                <h3 className="text-xl text-white  font-semibold mb-4">{area.title}</h3>
                <p className="text-white text-sm">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sobre Section */}
      <div className="container mx-auto px-4 py-16 grid grid-cols-2 gap-8">
        <div className="relative">
          <div className="bg-teal-900 rounded-3xl p-8 h-full">
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
            Eu sou o Dr. Pedro Fonseca, advogado inscrito na OAB/SP. Graduado em Direito dedicando minha carreira às áreas do Direito Trabalhista e futuramente ao Direito Previdenciário.
          </p>
          <p className="text-black-300 mb-4">
            Minha abordagem é personalizada, buscando soluções inovadoras para atender às suas necessidades específicas.
          </p>
          <p className="text-black-300 mb-8">
            Conte comigo para uma representação jurídica comprometida e eficaz. Agende uma consulta e deixe-me ser sua voz na busca pela justiça.
          </p>
          <a 
            href="https://wa.me/5513997262427"
            className="bg-teal-700 hover:bg-teal-600 text-white px-6 py-3 rounded-md inline-block"
          >
            Fale comigo
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-sky-50 text-black pt-16 pb-4">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-3 gap-8 border-b border-black-700 pb-8">
            {/* Logo e Descrição */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img src="/assets/pf logo.png" alt="Logo" className="h-20" />
                <div>
                  <div className="font-semibold text-lg">Pedro Fonseca</div>
                  <div className="text-sm text-black-400">advogado</div>
                </div>
              </div>
            </div>

            {/* Contato */}
            <div>
              <h3 id='contato' className="text-xl font-bold mb-4">Contato</h3>
              <div className="flex flex-col space-y-2">
                <a href="tel:+5513997262427" className="flex items-center space-x-2 text-black-400 hover:text-black">
                  <PhoneCall size={20} />
                  <span>(13) 99726-2427</span>
                </a>
                <a href="https://wa.me/5513997262427" className="flex items-center space-x-2 text-black-400 hover:text-black">
                  <MessageCircle size={20} />
                  <span>(13) 99726-2427</span>
                </a>
              </div>
            </div>

            {/* Redes Sociais */}
            <div>
              <h3 className="text-xl font-bold mb-4">Minhas redes sociais</h3>
              <div className="flex space-x-4">
                <a  target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/pedro.fonseca.adv/profilecard/?igsh=MTg3dG5mZGU1N2t0eA==" className="text-black-400 hover:text-black">
                  <Instagram size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Copyright e Links */}
          <div className="pt-8 text-center text-sm text-black-400">
            
            <p>© COPYRIGHT 2024 - Pedro Fonseca. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LawFirmLandingPage;