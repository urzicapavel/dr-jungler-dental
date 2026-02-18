'use client';

import { useState } from 'react';

type Section = 'home' | 'servicii' | 'personal' | 'contact' | 'despre';

export default function Home() {
  const [activeSection, setActiveSection] = useState<Section>('home');

  const navButtons = [
    { id: 'servicii' as Section, icon: '🦷', label: 'Servicii' },
    { id: 'personal' as Section, icon: '🪥', label: 'Personal' },
    { id: 'despre' as Section, icon: '🏥', label: 'Despre Noi' },
    { id: 'contact' as Section, icon: '📞', label: 'Contact' },
  ];

  const scrollToSection = (section: Section) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg z-50 border-b border-[#06D6A0]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🦷</span>
            <span className="text-lg md:text-xl font-bold bg-gradient-to-r from-[#0077B6] to-[#06D6A0] bg-clip-text text-transparent">
              Dr. Jungler
            </span>
          </div>
          <div className="hidden md:flex gap-2">
            {navButtons.map((btn) => (
              <button
                key={btn.id}
                onClick={() => scrollToSection(btn.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeSection === btn.id
                    ? 'bg-gradient-to-r from-[#0077B6] to-[#06D6A0] text-white shadow-md'
                    : 'bg-[#06D6A0]/10 text-[#0077B6] hover:bg-gradient-to-r hover:from-[#0077B6] hover:to-[#06D6A0] hover:text-white'
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>
          {/* Mobile menu button */}
          <button 
            onClick={() => scrollToSection('contact')}
            className="md:hidden px-4 py-2 bg-gradient-to-r from-[#0077B6] to-[#06D6A0] text-white rounded-full text-sm font-medium shadow-md"
          >
            Contact
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen pt-20 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            
            {/* Left Side - Text Content */}
            <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#0077B6] mb-4">
                Dr. Jungler
              </h1>
              <p className="text-xl sm:text-2xl md:text-3xl text-[#1A1A2E]/80 mb-6 font-medium">
                Clinica Dentară unde zâmbetul este prioritatea nr. 1!
              </p>
              <p className="text-base sm:text-lg text-[#1A1A2E]/60 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Descoperă arta îngrijirii dentare cu o abordare unică. 
                Profesionistul nostru te așteaptă cu cele mai moderne tratamente 
                și cel mai cald zâmbet!
              </p>
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-[#06D6A0] to-[#05b88a] hover:from-[#05b88a] hover:to-[#04a57d] text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
              >
                Programează acum →
              </button>
            </div>

            {/* Right Side - Doctor with Juggling Dental Items */}
            <div className="flex-1 flex justify-center order-1 lg:order-2">
              <div className="relative w-full max-w-md aspect-square flex items-center justify-center">
                {/* Doctor Character */}
                <div className="relative z-10 text-center">
                  <div className="text-7xl sm:text-8xl md:text-9xl drop-shadow-2xl">
                    👨‍⚕️
                  </div>
                  <div className="mt-4">
                    <span className="bg-gradient-to-r from-[#0077B6] to-[#06D6A0] text-white px-8 py-3 rounded-full text-sm font-bold shadow-lg">
                      Dr. Jungler
                    </span>
                  </div>
                </div>

                {/* Static Juggling Arc - Dental Items */}
                <div className="absolute inset-0">
                  {/* Tooth - top right */}
                  <div className="absolute top-[2%] right-[8%] sm:right-[12%] animate-pulse">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full shadow-2xl border-4 border-[#06D6A0] flex items-center justify-center text-3xl sm:text-4xl transform rotate-12">
                      🦷
                    </div>
                  </div>

                  {/* Syringe - upper right */}
                  <div className="absolute top-[15%] right-[0%] sm:right-[3%] animate-pulse" style={{animationDelay: '0.2s'}}>
                    <div className="w-14 h-14 sm:w-18 sm:h-18 bg-white rounded-full shadow-2xl border-4 border-[#00B4D8] flex items-center justify-center text-2xl sm:text-3xl transform -rotate-12">
                      💉
                    </div>
                  </div>

                  {/* Toothbrush - right */}
                  <div className="absolute top-[40%] right-[0%] sm:right-[3%] animate-pulse" style={{animationDelay: '0.4s'}}>
                    <div className="w-14 h-14 sm:w-18 sm:h-18 bg-white rounded-full shadow-2xl border-4 border-[#06D6A0] flex items-center justify-center text-2xl sm:text-3xl">
                      🪥
                    </div>
                  </div>

                  {/* Dental mirror - bottom right */}
                  <div className="absolute bottom-[20%] right-[5%] sm:right-[10%] animate-pulse" style={{animationDelay: '0.6s'}}>
                    <div className="w-14 h-14 sm:w-18 sm:h-18 bg-white rounded-full shadow-2xl border-4 border-[#00B4D8] flex items-center justify-center text-2xl sm:text-3xl transform rotate-6">
                      🔍
                    </div>
                  </div>

                  {/* Sparkles - bottom center */}
                  <div className="absolute bottom-[8%] left-1/2 -translate-x-1/2 animate-pulse" style={{animationDelay: '0.8s'}}>
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-full shadow-2xl border-4 border-[#06D6A0] flex items-center justify-center text-2xl sm:text-2xl">
                      ✨
                    </div>
                  </div>
                </div>

                {/* Arc path indication */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-15" viewBox="0 0 200 200">
                  <path 
                    d="M 100 15 A 85 85 0 0 1 185 100" 
                    fill="none" 
                    stroke="#06D6A0" 
                    strokeWidth="3"
                    strokeDasharray="8,6"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile: Doctor below title */}
        <div className="lg:hidden w-full pb-8">
          <div className="relative w-72 h-72 mx-auto flex items-center justify-center">
            <div className="relative z-10 text-center">
              <div className="text-7xl drop-shadow-xl">
                👨‍⚕️
              </div>
              <div className="mt-3">
                <span className="bg-gradient-to-r from-[#0077B6] to-[#06D6A0] text-white px-6 py-2 rounded-full text-sm font-bold">
                  Dr. Jungler
                </span>
              </div>
            </div>

            {/* Smaller juggling items for mobile */}
            <div className="absolute inset-0">
              <div className="absolute top-[5%] right-[10%] w-14 h-14 bg-white rounded-full shadow-xl border-3 border-[#06D6A0] flex items-center justify-center text-2xl">
                🦷
              </div>
              <div className="absolute top-[25%] right-[2%] w-12 h-12 bg-white rounded-full shadow-lg border-3 border-[#00B4D8] flex items-center justify-center text-xl">
                💉
              </div>
              <div className="absolute top-[50%] right-[0%] w-12 h-12 bg-white rounded-full shadow-lg border-3 border-[#06D6A0] flex items-center justify-center text-xl">
                🪥
              </div>
              <div className="absolute bottom-[25%] right-[8%] w-12 h-12 bg-white rounded-full shadow-lg border-3 border-[#00B4D8] flex items-center justify-center text-xl">
                🔍
              </div>
              <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 w-10 h-10 bg-white rounded-full shadow-lg border-3 border-[#06D6A0] flex items-center justify-center text-lg">
                ✨
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicii" className="py-20 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-5xl font-bold text-[#0077B6] text-center mb-4">
            Serviciile Noastre
          </h2>
          <p className="text-center text-[#1A1A2E]/60 mb-16 text-lg max-w-2xl mx-auto">
            Oferim o gamă completă de servicii dentare pentru întreaga familie
          </p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: '🪥', title: 'Igienizare Dentară', desc: 'Curățare profesională, detartraj și periaj dentar pentru un zâmbet strălucitor.' },
              { icon: '🦷', title: 'Tratamente Carie', desc: 'Obturații estetice și tratamente de canal realizate cu materiale de înaltă calitate.' },
              { icon: '💎', title: 'Albire Dentară', desc: 'Proceduri sigure de albire pentru un zâmbet mai alb și mai strălucitor.' },
              { icon: '👑', title: 'Proteze și Coroane', desc: 'Coroane dentare, proteze parțiale și totale, și restaurări protetice.' },
              { icon: '🔧', title: 'Implanturi', desc: 'Implanturi dentare de ultimă generație pentru înlocuirea dinților lipsă.' },
              { icon: '🎀', title: 'Ortodonție', desc: 'Aparate dentare pentru copii și adulți, inclusiv alignere invizibile.' },
            ].map((service, i) => (
              <div key={i} className="bg-gradient-to-br from-[#f0f9ff] to-white p-8 rounded-3xl shadow-lg border border-[#06D6A0]/20 hover:shadow-2xl hover:border-[#06D6A0]/50 transition-all group">
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-[#0077B6] mb-3">{service.title}</h3>
                <p className="text-[#1A1A2E]/70 leading-relaxed">{service.desc}</p>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="mt-6 text-[#06D6A0] font-semibold hover:text-[#05b88a] transition-colors flex items-center gap-2"
                >
                  Programează acum →
                </button>
              </div>
            ))}
          </div>
          
          {/* CTA after services */}
          <div className="text-center mt-16">
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-[#06D6A0] to-[#05b88a] hover:from-[#05b88a] hover:to-[#04a57d] text-white px-10 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
            >
              Programează acum
            </button>
          </div>
        </div>
      </section>

      {/* Personal/Team Section - Only Dr. Jungler */}
      <section id="personal" className="py-20 md:py-32 bg-gradient-to-br from-[#e0f2fe] to-[#f0f9ff]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-5xl font-bold text-[#0077B6] text-center mb-4">
            Cine Suntem
          </h2>
          <p className="text-center text-[#1A1A2E]/60 mb-16 text-lg max-w-2xl mx-auto">
            Profesionist dedicat cu experiență vastă în stomatologie
          </p>
          
          {/* Only Dr. Jungler - No fake team members */}
          <div className="flex flex-col items-center">
            <div className="bg-white p-12 rounded-3xl shadow-2xl text-center max-w-2xl w-full">
              <div className="text-8xl mb-6">
                👨‍⚕️
              </div>
              <h3 className="text-3xl font-bold text-[#0077B6] mb-2">Dr. Jungler</h3>
              <p className="text-[#06D6A0] font-semibold text-lg mb-6">Medic Stomatolog</p>
              <p className="text-[#1A1A2E]/70 leading-relaxed">
                Cu o pasiune pentru stomatologie și atenție la detalii, Dr. Jungler oferă 
                îngrijire dentară de calitate superioară. Fiecare pacient este tratat 
                cu grijă și profesionalism, într-un mediu relaxant și prietenos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="despre" className="py-20 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-5xl font-bold text-[#0077B6] text-center mb-16">
            Despre Noi
          </h2>
          
          <div className="bg-gradient-to-br from-[#f0f9ff] to-white p-10 md:p-14 rounded-3xl shadow-2xl">
            <div className="text-center mb-10">
              <span className="text-8xl">🦷</span>
              <h3 className="text-3xl font-bold text-[#0077B6] mt-6 mb-2">Dr. Jungler Dental Clinic</h3>
              <p className="text-[#06D6A0] font-medium">Unde fiecare zâmbet contează</p>
            </div>
            
            <div className="space-y-6 text-[#1A1A2E]/80 leading-relaxed text-lg">
              <p>
                <strong>Bine ai venit!</strong> La Clinica Stomatologică Dr. Jungler, credem că 
                îngrijirea dentară poate fi o experiență plăcută. De aceea, echipa noastră 
                vine în fiecare zi cu zâmbetul pe buze și cu energie pozitivă!
              </p>
              <p>
                Clinica noastră oferă servicii stomatologice complete, cu atenție la fiecare 
                detaliu. Folosim doar tehnologii de ultimă generație și materiale certificate 
                pentru a asigura rezultate durabile.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-12">
              <div className="bg-gradient-to-r from-[#0077B6] to-[#005a8c] text-white p-6 rounded-2xl text-center">
                <div className="text-3xl md:text-4xl font-bold">5000+</div>
                <div className="text-sm mt-1">Pacienți</div>
              </div>
              <div className="bg-gradient-to-r from-[#00B4D8] to-[#0096c7] text-white p-6 rounded-2xl text-center">
                <div className="text-3xl md:text-4xl font-bold">15+</div>
                <div className="text-sm mt-1">Ani Experiență</div>
              </div>
              <div className="bg-gradient-to-r from-[#06D6A0] to-[#05b88a] text-white p-6 rounded-2xl text-center">
                <div className="text-3xl md:text-4xl font-bold">98%</div>
                <div className="text-sm mt-1">Satisfacție</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-32 bg-gradient-to-br from-[#0077B6] via-[#005a8c] to-[#06D6A0] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
            Contactează-Ne
          </h2>
          <p className="text-center text-white/80 mb-16 text-lg max-w-2xl mx-auto">
            Suntem aici să te ajutăm. Programează-ți consultația acum!
          </p>
          
          <div className="grid md:grid-cols-2 gap-10">
            {/* Contact Info */}
            <div className="bg-white/10 backdrop-blur-md p-10 rounded-3xl">
              <h3 className="text-2xl font-bold mb-8">Informații de Contact</h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-5">
                  <span className="text-3xl">📍</span>
                  <div>
                    <p className="font-semibold text-lg">Adresa</p>
                    <p className="text-white/80">Strada Exemplu Nr. 123, București, Sector 1</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-5">
                  <span className="text-3xl">📞</span>
                  <div>
                    <p className="font-semibold text-lg">Telefon</p>
                    <p className="text-white/80">+40 21 123 4567</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-5">
                  <span className="text-3xl">✉️</span>
                  <div>
                    <p className="font-semibold text-lg">Email</p>
                    <p className="text-white/80">contact@drjungler.ro</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-5">
                  <span className="text-3xl">🕐</span>
                  <div>
                    <p className="font-semibold text-lg">Program</p>
                    <p className="text-white/80">Luni - Vineri: 09:00 - 20:00<br/>Sâmbăta: 09:00 - 14:00</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white text-[#1A1A2E] p-10 rounded-3xl">
              <h3 className="text-2xl font-bold mb-6 text-[#0077B6]">Programează-te</h3>
              
              <form className="space-y-5">
                <div>
                  <label className="block text-sm font-medium mb-2">Numele tău</label>
                  <input
                    type="text"
                    className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-[#06D6A0] focus:ring-2 focus:ring-[#06D6A0]/20 outline-none transition-all text-lg"
                    placeholder="Ion Popescu"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Telefon</label>
                  <input
                    type="tel"
                    className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-[#06D6A0] focus:ring-2 focus:ring-[#06D6A0]/20 outline-none transition-all text-lg"
                    placeholder="+40 7xx xxx xxx"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-[#06D6A0] focus:ring-2 focus:ring-[#06D6A0]/20 outline-none transition-all text-lg"
                    placeholder="ion@email.ro"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Mesaj</label>
                  <textarea
                    className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-[#06D6A0] focus:ring-2 focus:ring-[#06D6A0]/20 outline-none transition-all text-lg"
                    rows={4}
                    placeholder="Spune-ne cum te putem ajuta..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#06D6A0] to-[#05b88a] hover:from-[#05b88a] hover:to-[#04a57d] text-white font-semibold py-4 rounded-xl transition-all transform hover:scale-[1.02] text-lg shadow-lg"
                >
                  Programează acum →
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A1A2E] text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <div className="flex justify-center gap-3 mb-6">
            <span className="text-3xl">🦷</span>
            <span className="text-xl font-bold bg-gradient-to-r from-[#0077B6] to-[#06D6A0] bg-clip-text text-transparent">
              Dr. Jungler
            </span>
          </div>
          <p className="text-white/60 mb-6 text-lg">
            Clinica Dentară - Unde fiecare zâmbet contează!
          </p>
          <p className="text-white/40 text-sm">
            © 2025 Dr. Jungler Dental Clinic. Toate drepturile rezervate.
          </p>
        </div>
      </footer>
    </div>
  );
}
