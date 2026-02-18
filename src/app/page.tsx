'use client';

import { useState, useEffect } from 'react';

type Section = 'home' | 'servicii' | 'personal' | 'contact' | 'despre';

export default function Home() {
  const [activeSection, setActiveSection] = useState<Section>('home');
  const [isJuggling, setIsJuggling] = useState(true);

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
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md shadow-lg z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-3xl">🦷</span>
            <span className="text-xl font-bold text-[#0077B6]">Dr. Jungler</span>
          </div>
          <div className="flex gap-2 flex-wrap justify-center">
            {navButtons.map((btn) => (
              <button
                key={btn.id}
                onClick={() => scrollToSection(btn.id)}
                className={`nav-item px-4 py-2 rounded-full font-medium transition-all ${
                  activeSection === btn.id
                    ? 'bg-[#0077B6] text-white'
                    : 'bg-[#00B4D8]/20 text-[#0077B6] hover:bg-[#0077B6] hover:text-white'
                }`}
              >
                <span className="mr-1">{btn.icon}</span>
                {btn.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section with Dr. Jungler */}
      <section id="home" className="section flex flex-col items-center justify-center min-h-screen pt-20 relative overflow-hidden">
        <div className="text-center z-10">
          <h1 className="text-5xl md:text-7xl font-bold text-[#0077B6] mb-4">
            Dr. Jungler 🦷
          </h1>
          <p className="text-xl md:text-2xl text-[#1A1A2E]/70 mb-8">
            Clinica Dentară unde zâmbetul este prioritatea nr. 1!
          </p>
          <p className="text-lg text-[#1A1A2E]/60 mb-12 max-w-2xl mx-auto">
            Descoperă arta îngrijirii dentare cu o abordare unică și distractivă. 
            Echipa noastră de profesioniști te așteaptă cu cele mai moderne tratamente 
            și cel mai cald zâmbet!
          </p>
          <button
            onClick={() => scrollToSection('servicii')}
            className="bg-[#06D6A0] hover:bg-[#05c090] text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
          >
            Descoperă Serviciile Noastre →
          </button>
        </div>

        {/* Juggling Animation Area */}
        <div className="relative w-full max-w-2xl h-64 mt-12">
          {/* Dr. Jungler Character */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="juggler text-8xl md:text-9xl">
              🤹
            </div>
            <div className="text-center mt-2">
              <span className="bg-[#0077B6] text-white px-4 py-1 rounded-full text-sm font-bold">
                Dr. Jungler
              </span>
            </div>
          </div>

          {/* Juggling Buttons */}
          {isJuggling && navButtons.map((btn, index) => (
            <div
              key={btn.id}
              className="juggling-button"
              style={{
                animationDelay: `${index * 0.4}s`,
                left: `${20 + index * 15}%`,
                top: `${40 + (index % 2) * 20}%`,
              }}
            >
              <button
                onClick={() => scrollToSection(btn.id)}
                className="nav-item bg-white shadow-xl rounded-full w-16 h-16 md:w-20 md:h-20 flex items-center justify-center text-2xl md:text-3xl border-4 border-[#00B4D8] hover:border-[#06D6A0] transition-all transform hover:scale-110"
              >
                {btn.icon}
              </button>
            </div>
          ))}
        </div>

        <p className="text-sm text-[#1A1A2E]/50 mt-8">
          ✨ Click pe butoane pentru a naviga!
        </p>
      </section>

      {/* Services Section */}
      <section id="servicii" className="section bg-white">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0077B6] text-center mb-4">
            Serviciile Noastre 🦷
          </h2>
          <p className="text-center text-[#1A1A2E]/60 mb-12 text-lg">
            Oferim o gamă completă de servicii dentare pentru întreaga familie
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '🪥', title: 'Igienizare Dentară', desc: 'Curățare profesională, detartraj și periaj dentar pentru un zâmbet strălucitor.' },
              { icon: '🦷', title: 'Tratamente Carie', desc: 'Obturații estetice și tratamente de canal realizate cu materiale de înaltă calitate.' },
              { icon: '💎', title: 'Albire Dentară', desc: 'Proceduri sigure de albire pentru un zâmbet mai alb și mai strălucitor.' },
              { icon: '👑', title: 'Proteze și Coroane', desc: 'Coroane dentare, proteze parțiale și totale, și restaurări protetice.' },
              { icon: '🔧', title: 'Implanturi', desc: 'Implanturi dentare de ultimă generație pentru înlocuirea dinților lipsă.' },
              { icon: '🎀', title: 'Ortodonție', desc: 'Aparate dentare pentru copii și adulți, inclusiv alignere invizibile.' },
            ].map((service, i) => (
              <div key={i} className="nav-item bg-gradient-to-br from-[#f0f9ff] to-white p-6 rounded-2xl shadow-lg border border-[#00B4D8]/20 hover:border-[#06D6A0]">
                <div className="text-5xl mb-4 floating" style={{ animationDelay: `${i * 0.2}s` }}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-[#0077B6] mb-2">{service.title}</h3>
                <p className="text-[#1A1A2E]/70">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Personal/Team Section */}
      <section id="personal" className="section bg-gradient-to-br from-[#e0f2fe] to-[#f0f9ff]">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0077B6] text-center mb-4">
            Echipa Noastră 👨‍⚕️👩‍⚕️
          </h2>
          <p className="text-center text-[#1A1A2E]/60 mb-12 text-lg">
            Profesioniști dedicați cu experiență vastă în stomatologie
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Dr. Ana Popescu', role: 'Medic Stomatolog General', icon: '👩‍⚕️', desc: 'Specialist în stomatologie generală cu 15 ani experiență.' },
              { name: 'Dr. Maria Ionescu', role: 'Ortodont', icon: '👩‍⚕️', desc: 'Expert în corectarea poziției dinților și alignere invizibile.' },
              { name: 'Dr. Cristian Dumitrescu', role: 'Chirurg Stomatolog', icon: '👨‍⚕️', desc: 'Specialist în implanturi și extracții dentare complexe.' },
              { name: 'Dr. Elena Georgescu', role: 'Endodont', icon: '👩‍⚕️', desc: 'Maestră în tratamente de canal și proceduri microscopice.' },
              { name: 'Dr. Andrei Munteanu', role: 'Paradontolog', icon: '👨‍⚕️', desc: 'Specialist în tratamentul bolilor parodontale.' },
              { name: 'Dr. Sofia Radu', role: 'Stomatolog Pediatric', icon: '👩‍⚕️', desc: 'Îngrijire dentară blândă și prietenoasă pentru copii.' },
            ].map((member, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all">
                <div className="text-7xl mb-4 floating" style={{ animationDelay: `${i * 0.15}s` }}>
                  {member.icon}
                </div>
                <h3 className="text-xl font-bold text-[#0077B6]">{member.name}</h3>
                <p className="text-[#00B4D8] font-medium mb-2">{member.role}</p>
                <p className="text-[#1A1A2E]/60 text-sm">{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="despre" className="section bg-white">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0077B6] text-center mb-8">
            Despre Noi 🏥
          </h2>
          
          <div className="bg-gradient-to-br from-[#f0f9ff] to-white p-8 rounded-3xl shadow-lg">
            <div className="text-center mb-8">
              <span className="text-8xl">🦷</span>
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
              <p>
                <strong>De ce să ne alegi?</strong> Pentru că la noi, stomatologia nu este doar 
                despre dinți - este despre oameni, încredere și zâmbete care luminează întreaga zi!
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-8 text-center">
              <div className="bg-[#0077B6] text-white p-4 rounded-xl">
                <div className="text-3xl font-bold">5000+</div>
                <div className="text-sm">Pacienți</div>
              </div>
              <div className="bg-[#00B4D8] text-white p-4 rounded-xl">
                <div className="text-3xl font-bold">15+</div>
                <div className="text-sm">Ani Experiență</div>
              </div>
              <div className="bg-[#06D6A0] text-white p-4 rounded-xl">
                <div className="text-3xl font-bold">98%</div>
                <div className="text-sm">Satisfacție</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section bg-gradient-to-br from-[#0077B6] to-[#005a8c] text-white">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Contactează-Ne 📞
          </h2>
          <p className="text-center text-white/80 mb-12 text-lg">
            Suntem aici să te ajutăm. Programează-ți consultația acum!
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl">
              <h3 className="text-2xl font-bold mb-6">Informații de Contact</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <span className="text-3xl">📍</span>
                  <div>
                    <p className="font-semibold">Adresa</p>
                    <p className="text-white/80">Strada Exemplu Nr. 123, București, Sector 1</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <span className="text-3xl">📞</span>
                  <div>
                    <p className="font-semibold">Telefon</p>
                    <p className="text-white/80">+40 21 123 4567</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <span className="text-3xl">✉️</span>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-white/80">contact@drjungler.ro</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <span className="text-3xl">🕐</span>
                  <div>
                    <p className="font-semibold">Program</p>
                    <p className="text-white/80">Luni - Vineri: 09:00 - 20:00<br/>Sâmbăta: 09:00 - 14:00</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white text-[#1A1A2E] p-8 rounded-3xl">
              <h3 className="text-2xl font-bold mb-6 text-[#0077B6]">Programează-te</h3>
              
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
                  className="w-full bg-[#06D6A0] hover:bg-[#05c090] text-white font-semibold py-3 rounded-lg transition-all transform hover:scale-[1.02]"
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
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="flex justify-center gap-2 mb-4">
            <span className="text-3xl">🦷</span>
            <span className="text-xl font-bold">Dr. Jungler</span>
          </div>
          <p className="text-white/60 mb-4">
            Clinica Dentară - Unde fiecare zâmbete contează!
          </p>
          <p className="text-white/40 text-sm">
            © 2025 Dr. Jungler Dental Clinic. Toate drepturile rezervate.
          </p>
        </div>
      </footer>
    </div>
  );
}
