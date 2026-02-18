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
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg z-50 border-b border-[#00B4D8]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🦷</span>
            <span className="text-lg md:text-xl font-bold text-[#0077B6]">Dr. Jungler</span>
          </div>
          <div className="hidden md:flex gap-2">
            {navButtons.map((btn) => (
              <button
                key={btn.id}
                onClick={() => scrollToSection(btn.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeSection === btn.id
                    ? 'bg-[#0077B6] text-white shadow-md'
                    : 'bg-[#00B4D8]/10 text-[#0077B6] hover:bg-[#0077B6] hover:text-white'
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>
          {/* Mobile menu button */}
          <button 
            onClick={() => scrollToSection('contact')}
            className="md:hidden px-3 py-2 bg-[#0077B6] text-white rounded-full text-sm font-medium"
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
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#0077B6] mb-4">
                Dr. Jungler
              </h1>
              <p className="text-xl sm:text-2xl text-[#1A1A2E]/80 mb-6 font-medium">
                Clinica Dentară unde zâmbetul este prioritatea nr. 1!
              </p>
              <p className="text-base sm:text-lg text-[#1A1A2E]/60 mb-8 max-w-xl mx-auto lg:mx-0">
                Descoperă arta îngrijirii dentare cu o abordare unică. 
                Echipa noastră de profesioniști te așteaptă cu cele mai moderne tratamente 
                și cel mai cald zâmbet!
              </p>
              <button
                onClick={() => scrollToSection('servicii')}
                className="bg-[#06D6A0] hover:bg-[#05b88a] text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
              >
                Descoperă Serviciile Noastre →
              </button>
            </div>

            {/* Right Side - Doctor with Juggling Buttons */}
            <div className="flex-1 flex justify-center order-1 lg:order-2">
              <div className="relative w-full max-w-md aspect-square flex items-center justify-center">
                {/* Doctor Character */}
                <div className="relative z-10 text-center">
                  <div className="text-7xl sm:text-8xl md:text-9xl">
                    👨‍⚕️
                  </div>
                  <div className="mt-2">
                    <span className="bg-[#0077B6] text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                      Dr. Jungler
                    </span>
                  </div>
                </div>

                {/* Static Juggling Buttons in Arc */}
                <div className="absolute inset-0">
                  {/* Tooth - top right */}
                  <button
                    onClick={() => scrollToSection('servicii')}
                    className="absolute top-[5%] right-[10%] sm:right-[15%] w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-full shadow-xl border-3 border-[#00B4D8] flex items-center justify-center text-2xl sm:text-3xl hover:scale-110 hover:border-[#06D6A0] transition-all cursor-pointer"
                    title="Servicii"
                  >
                    🦷
                  </button>

                  {/* Toothbrush - right */}
                  <button
                    onClick={() => scrollToSection('personal')}
                    className="absolute top-[35%] right-[0%] sm:right-[5%] w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-full shadow-xl border-3 border-[#00B4D8] flex items-center justify-center text-2xl sm:text-3xl hover:scale-110 hover:border-[#06D6A0] transition-all cursor-pointer"
                    title="Personal"
                  >
                    🪥
                  </button>

                  {/* Dental mirror - bottom right */}
                  <button
                    onClick={() => scrollToSection('despre')}
                    className="absolute bottom-[15%] right-[10%] sm:right-[15%] w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-full shadow-xl border-3 border-[#00B4D8] flex items-center justify-center text-2xl sm:text-3xl hover:scale-110 hover:border-[#06D6A0] transition-all cursor-pointer"
                    title="Despre Noi"
                  >
                    🔍
                  </button>

                  {/* Contact - bottom */}
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="absolute bottom-[5%] left-1/2 -translate-x-1/2 w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-full shadow-xl border-3 border-[#00B4D8] flex items-center justify-center text-2xl sm:text-3xl hover:scale-110 hover:border-[#06D6A0] transition-all cursor-pointer"
                    title="Contact"
                  >
                    📞
                  </button>
                </div>

                {/* Subtle arc indication */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" viewBox="0 0 200 200">
                  <path 
                    d="M 100 20 A 80 80 0 0 1 180 100" 
                    fill="none" 
                    stroke="#0077B6" 
                    strokeWidth="2" 
                    strokeDasharray="5,5"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile: Doctor below title */}
        <div className="lg:hidden w-full pb-8">
          <div className="relative w-64 h-64 mx-auto flex items-center justify-center">
            <div className="relative z-10 text-center">
              <div className="text-6xl">
                👨‍⚕️
              </div>
              <div className="mt-2">
                <span className="bg-[#0077B6] text-white px-4 py-1 rounded-full text-xs font-bold">
                  Dr. Jungler
                </span>
              </div>
            </div>

            {/* Smaller juggling buttons for mobile */}
            <div className="absolute inset-0">
              <button
                onClick={() => scrollToSection('servicii')}
                className="absolute top-[10%] right-[15%] w-12 h-12 bg-white rounded-full shadow-lg border-2 border-[#00B4D8] flex items-center justify-center text-xl hover:scale-110 transition-all"
              >
                🦷
              </button>
              <button
                onClick={() => scrollToSection('personal')}
                className="absolute top-[40%] right-[5%] w-12 h-12 bg-white rounded-full shadow-lg border-2 border-[#00B4D8] flex items-center justify-center text-xl hover:scale-110 transition-all"
              >
                🪥
              </button>
              <button
                onClick={() => scrollToSection('despre')}
                className="absolute bottom-[20%] right-[15%] w-12 h-12 bg-white rounded-full shadow-lg border-2 border-[#00B4D8] flex items-center justify-center text-xl hover:scale-110 transition-all"
              >
                🔍
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="absolute bottom-[10%] left-1/2 -translate-x-1/2 w-12 h-12 bg-white rounded-full shadow-lg border-2 border-[#00B4D8] flex items-center justify-center text-xl hover:scale-110 transition-all"
              >
                📞
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicii" className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0077B6] text-center mb-3">
            Serviciile Noastre
          </h2>
          <p className="text-center text-[#1A1A2E]/60 mb-12 text-lg">
            Oferim o gamă completă de servicii dentare pentru întreaga familie
          </p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '🪥', title: 'Igienizare Dentară', desc: 'Curățare profesională, detartraj și periaj dentar pentru un zâmbet strălucitor.' },
              { icon: '🦷', title: 'Tratamente Carie', desc: 'Obturații estetice și tratamente de canal realizate cu materiale de înaltă calitate.' },
              { icon: '💎', title: 'Albire Dentară', desc: 'Proceduri sigure de albire pentru un zâmbet mai alb și mai strălucitor.' },
              { icon: '👑', title: 'Proteze și Coroane', desc: 'Coroane dentare, proteze parțiale și totale, și restaurări protetice.' },
              { icon: '🔧', title: 'Implanturi', desc: 'Implanturi dentare de ultimă generație pentru înlocuirea dinților lipsă.' },
              { icon: '🎀', title: 'Ortodonție', desc: 'Aparate dentare pentru copii și adulți, inclusiv alignere invizibile.' },
            ].map((service, i) => (
              <div key={i} className="bg-gradient-to-br from-[#f0f9ff] to-white p-6 rounded-2xl shadow-lg border border-[#00B4D8]/20 hover:shadow-xl hover:border-[#06D6A0]/30 transition-all group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-[#0077B6] mb-2">{service.title}</h3>
                <p className="text-[#1A1A2E]/70 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Personal/Team Section */}
      <section id="personal" className="py-16 md:py-24 bg-gradient-to-br from-[#e0f2fe] to-[#f0f9ff]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0077B6] text-center mb-3">
            Echipa Noastră
          </h2>
          <p className="text-center text-[#1A1A2E]/60 mb-12 text-lg">
            Profesioniști dedicați cu experiență vastă în stomatologie
          </p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Dr. Ana Popescu', role: 'Medic Stomatolog General', icon: '👩‍⚕️', desc: 'Specialist în stomatologie generală cu 15 ani experiență.' },
              { name: 'Dr. Maria Ionescu', role: 'Ortodont', icon: '👩‍⚕️', desc: 'Expert în corectarea poziției dinților și alignere invizibile.' },
              { name: 'Dr. Cristian Dumitrescu', role: 'Chirurg Stomatolog', icon: '👨‍⚕️', desc: 'Specialist în implanturi și extracții dentare complexe.' },
              { name: 'Dr. Elena Georgescu', role: 'Endodont', icon: '👩‍⚕️', desc: 'Maestră în tratamente de canal și proceduri microscopice.' },
              { name: 'Dr. Andrei Munteanu', role: 'Paradontolog', icon: '👨‍⚕️', desc: 'Specialist în tratamentul bolilor parodontale.' },
              { name: 'Dr. Sofia Radu', role: 'Stomatolog Pediatric', icon: '👩‍⚕️', desc: 'Îngrijire dentară blândă și prietenoasă pentru copii.' },
            ].map((member, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all group">
                <div className="text-6xl mb-4 group-hover:scale-105 transition-transform">
                  {member.icon}
                </div>
                <h3 className="text-lg font-bold text-[#0077B6]">{member.name}</h3>
                <p className="text-[#00B4D8] font-medium mb-2 text-sm">{member.role}</p>
                <p className="text-[#1A1A2E]/60 text-sm">{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="despre" className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0077B6] text-center mb-8">
            Despre Noi
          </h2>
          
          <div className="bg-gradient-to-br from-[#f0f9ff] to-white p-8 rounded-3xl shadow-lg">
            <div className="text-center mb-8">
              <span className="text-7xl">🦷</span>
              <h3 className="text-2xl font-bold text-[#0077B6] mt-4">Dr. Jungler Dental Clinic</h3>
            </div>
            
            <div className="space-y-4 text-[#1A1A2E]/80 leading-relaxed">
              <p>
                <strong>Bine ai venit!</strong> La Clinica Stomatologică Dr. Jungler, credem că 
                îngrijirea dentară poate fi o experiență plăcută și chiar amuzantă. De aceea, 
                echipa noastră vine în fiecare zi cu zâmbetul pe buze și cu energie pozitivă!
              </p>
              <p>
                Fondată în <strong>2015</strong>, clinica noastră a crescut dintr-un cabinet mic 
                într-o clinică modernă cu <strong>6 specialități</strong> și o echipă de 
                <strong> peste 15 profesioniști</strong> dedicați.
              </p>
              <p>
                Misiunea noastră este să oferim fiecărui pacient un zâmbet sănătos și frumos, 
                într-un mediu relaxant și prietenos. Folosim doar tehnologii de ultimă generație 
                și materiale certificate pentru a asigura rezultate durabile.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-8 text-center">
              <div className="bg-[#0077B6] text-white p-4 rounded-xl">
                <div className="text-2xl md:text-3xl font-bold">5000+</div>
                <div className="text-xs md:text-sm">Pacienți</div>
              </div>
              <div className="bg-[#00B4D8] text-white p-4 rounded-xl">
                <div className="text-2xl md:text-3xl font-bold">15+</div>
                <div className="text-xs md:text-sm">Ani Experiență</div>
              </div>
              <div className="bg-[#06D6A0] text-white p-4 rounded-xl">
                <div className="text-2xl md:text-3xl font-bold">98%</div>
                <div className="text-xs md:text-sm">Satisfacție</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 bg-gradient-to-br from-[#0077B6] to-[#005a8c] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">
            Contactează-Ne
          </h2>
          <p className="text-center text-white/80 mb-12 text-lg">
            Suntem aici să te ajutăm. Programează-ți consultația acum!
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl">
              <h3 className="text-xl font-bold mb-6">Informații de Contact</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <span className="text-2xl">📍</span>
                  <div>
                    <p className="font-semibold">Adresa</p>
                    <p className="text-white/80 text-sm">Strada Exemplu Nr. 123, București, Sector 1</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <span className="text-2xl">📞</span>
                  <div>
                    <p className="font-semibold">Telefon</p>
                    <p className="text-white/80">+40 21 123 4567</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <span className="text-2xl">✉️</span>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-white/80">contact@drjungler.ro</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <span className="text-2xl">🕐</span>
                  <div>
                    <p className="font-semibold">Program</p>
                    <p className="text-white/80 text-sm">Luni - Vineri: 09:00 - 20:00<br/>Sâmbăta: 09:00 - 14:00</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white text-[#1A1A2E] p-8 rounded-3xl">
              <h3 className="text-xl font-bold mb-6 text-[#0077B6]">Programează-te</h3>
              
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Numele tău</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#0077B6] focus:ring-2 focus:ring-[#0077B6]/20 outline-none transition-all"
                    placeholder="Ion Popescu"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Telefon</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#0077B6] focus:ring-2 focus:ring-[#0077B6]/20 outline-none transition-all"
                    placeholder="+40 7xx xxx xxx"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#0077B6] focus:ring-2 focus:ring-[#0077B6]/20 outline-none transition-all"
                    placeholder="ion@email.ro"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Mesaj</label>
                  <textarea
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#0077B6] focus:ring-2 focus:ring-[#0077B6]/20 outline-none transition-all"
                    rows={3}
                    placeholder="Spune-ne cum te putem ajuta..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-[#06D6A0] hover:bg-[#05b88a] text-white font-semibold py-3 rounded-lg transition-all transform hover:scale-[1.02]"
                >
                  Trimite Mesajul →
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A1A2E] text-white py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <div className="flex justify-center gap-2 mb-4">
            <span className="text-2xl">🦷</span>
            <span className="text-lg font-bold">Dr. Jungler</span>
          </div>
          <p className="text-white/60 mb-4 text-sm">
            Clinica Dentară - Unde fiecare zâmbet contează!
          </p>
          <p className="text-white/40 text-xs">
            © 2025 Dr. Jungler Dental Clinic. Toate drepturile rezervate.
          </p>
        </div>
      </footer>
    </div>
  );
}
