import { useState, useEffect } from 'react';
import { Phone, ShieldCheck, Wrench, Thermometer, MapPin, Clock, Menu, X } from 'lucide-react';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-deep-navy/80 backdrop-blur-xl py-4 border-b border-white/5 shadow-lg shadow-black/20' 
          : 'bg-transparent py-6'
      }`}>
        <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
          <div className="text-xl md:text-2xl font-bold tracking-tight text-white uppercase">
            Auto Serwis <span className="text-brand-orange">Premium</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-2 text-steel-gray hover:text-white transition-colors">
              <Phone className="text-brand-orange" size={20} />
              <span className="font-semibold text-lg tracking-wide">+48 123 456 789</span>
            </div>
            <a href="tel:+48123456789" className="bg-brand-orange hover:bg-[#E66000] text-white px-6 py-2.5 rounded-xl font-semibold transition-all shadow-lg shadow-brand-orange/20 active:scale-95 border border-transparent hover:border-white/10">
              Zadzwoń teraz
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsOpen(true)}
          >
            <Menu size={28} />
          </button>
        </div>

        {/* Animated horizontal white line */}
        <div 
          className="absolute bottom-0 left-0 h-[1px] bg-white/10 transition-all duration-700 ease-out" 
          style={{ width: isScrolled ? '100%' : '0%' }}
        />
      </nav>

      {/* Luksusowe Mobilne Menu - Wjazd od prawej */}
      <div className={`fixed top-0 right-0 h-[100dvh] w-full max-w-sm bg-deep-navy/95 backdrop-blur-2xl z-50 transform transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-6 flex justify-end">
          <button onClick={() => setIsOpen(false)} className="text-white hover:text-brand-orange transition-colors">
            <X size={32} />
          </button>
        </div>
        <div className="flex flex-col items-center justify-center h-3/4 space-y-8 px-6">
          <div className="flex items-center gap-2 text-white">
            <Phone className="text-brand-orange" size={24} />
            <span className="font-semibold text-2xl tracking-wide">+48 123 456 789</span>
          </div>
          <a href="tel:+48123456789" onClick={() => setIsOpen(false)} className="w-full text-center bg-brand-orange hover:bg-[#E66000] text-white px-8 py-4 rounded-xl font-bold text-xl transition-all shadow-lg shadow-brand-orange/20 border border-transparent hover:border-white/10 active:scale-95">
            Zadzwoń teraz
          </a>
        </div>
      </div>
    </>
  );
}

function Hero() {
  return (
    <section className="relative h-[100dvh] w-full flex flex-col justify-center pt-32 md:pt-40 pb-16 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          alt="Nowoczesny warsztat samochodowy" 
          className="w-full h-full object-cover object-center scale-105 transform" 
          src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=2574&auto=format&fit=crop" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-deep-navy/80 via-deep-navy/60 to-deep-navy/95"></div>
      </div>
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl">
          <div className="overflow-hidden pb-4">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight md:leading-[1.1] tracking-tighter drop-shadow-2xl">
              Pewność na drodze.<br />
              <span className="text-brand-orange">Zaczyna się tutaj.</span>
            </h1>
          </div>
          <div className="overflow-hidden pb-2 mt-6">
            <p className="text-lg md:text-2xl text-steel-gray/90 max-w-2xl font-medium drop-shadow-md">
              Nie wymieniamy części w ciemno. Diagnozujemy problem u źródła. Uczciwe ceny, transparentne naprawy i gwarancja na każdą usługę w Oławie.
            </p>
          </div>
          <div className="mt-10">
            <a href="tel:+48123456789" className="inline-flex items-center gap-3 bg-brand-orange hover:bg-[#E66000] text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-xl shadow-brand-orange/20 hover:shadow-brand-orange/40 active:scale-95 border border-transparent hover:border-white/10 group">
              <Phone className="group-hover:rotate-12 transition-transform" size={24} />
              Umów wizytę telefonicznie
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Specializations() {
  return (
    <section className="py-24 bg-deep-navy relative z-10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Nasze Specjalizacje</h2>
          <div className="w-20 h-1 bg-brand-orange mt-6 rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="group relative h-[400px] rounded-2xl overflow-hidden bg-carbon flex flex-col justify-end p-8 border border-white/5 hover:border-brand-orange/50 transition-colors duration-500">
            <div className="absolute inset-0 z-0">
              <img 
                alt="Zaawansowana Diagnostyka" 
                className="w-full h-full object-cover opacity-20 group-hover:opacity-40 group-hover:scale-110 transition-all duration-700 ease-out" 
                src="https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&q=80&w=800" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-carbon via-carbon/80 to-transparent"></div>
            </div>
            <div className="relative z-10 flex flex-col">
              <div className="w-14 h-14 rounded-xl bg-brand-orange/10 backdrop-blur-sm flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-brand-orange transition-all duration-500">
                <ShieldCheck className="text-brand-orange group-hover:text-white transition-colors" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">Zaawansowana Diagnostyka</h3>
              <p className="text-steel-gray/80 leading-relaxed font-medium">
                Komputerowe wykrywanie usterek. Precyzyjna analiza systemów silnika, elektroniki i modułów komfortu.
              </p>
            </div>
          </div>
          <div className="group relative h-[400px] rounded-2xl overflow-hidden bg-carbon flex flex-col justify-end p-8 border border-white/5 hover:border-brand-orange/50 transition-colors duration-500">
            <div className="absolute inset-0 z-0">
              <img 
                alt="Mechanika Pojazdowa" 
                className="w-full h-full object-cover opacity-20 group-hover:opacity-40 group-hover:scale-110 transition-all duration-700 ease-out" 
                src="https://images.unsplash.com/photo-1615906655593-ad0386982a0f?auto=format&fit=crop&q=80&w=800" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-carbon via-carbon/80 to-transparent"></div>
            </div>
            <div className="relative z-10 flex flex-col">
              <div className="w-14 h-14 rounded-xl bg-brand-orange/10 backdrop-blur-sm flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-brand-orange transition-all duration-500">
                <Wrench className="text-brand-orange group-hover:text-white transition-colors" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">Mechanika Pojazdowa</h3>
              <p className="text-steel-gray/80 leading-relaxed font-medium">
                Kompleksowe naprawy silników, skrzyń biegów, układów zawieszenia oraz precyzyjny serwis hamulców.
              </p>
            </div>
          </div>
          <div className="group relative h-[400px] rounded-2xl overflow-hidden bg-carbon flex flex-col justify-end p-8 border border-white/5 hover:border-brand-orange/50 transition-colors duration-500">
            <div className="absolute inset-0 z-0">
              <img 
                alt="Serwis Klimatyzacji" 
                className="w-full h-full object-cover opacity-20 group-hover:opacity-40 group-hover:scale-110 transition-all duration-700 ease-out" 
                src="https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=80&w=800" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-carbon via-carbon/80 to-transparent"></div>
            </div>
            <div className="relative z-10 flex flex-col">
              <div className="w-14 h-14 rounded-xl bg-brand-orange/10 backdrop-blur-sm flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-brand-orange transition-all duration-500">
                <Thermometer className="text-brand-orange group-hover:text-white transition-colors" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">Serwis Klimatyzacji</h3>
              <p className="text-steel-gray/80 leading-relaxed font-medium">
                Odgrzybianie ozonowe, sprawdzanie szczelności układu i dobijanie czynnika. Pełna gotowość na sezon.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustSection() {
  return (
    <section className="py-32 bg-deep-navy border-y border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 text-center">
        <div className="max-w-4xl mx-auto space-y-8 [perspective:1000px]">
          <h2 className="trust-text text-3xl md:text-5xl lg:text-6xl font-black text-white tracking-tight">
            Mówimy <span className="text-brand-orange">wprost.</span>
          </h2>
          <h2 className="trust-text text-3xl md:text-5xl lg:text-6xl font-black text-white tracking-tight">
            Działamy <span className="text-brand-orange">czysto.</span>
          </h2>
          <h2 className="trust-text text-3xl md:text-5xl lg:text-6xl font-black text-white tracking-tight">
            Naprawiamy <span className="text-brand-orange">skutecznie.</span>
          </h2>
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="py-24 bg-carbon">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Prosty proces naprawy</h2>
          <div className="w-20 h-1 bg-brand-orange mt-6 rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-deep-navy p-8 rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
            <div className="text-4xl font-black text-brand-orange mb-4 opacity-50">01.</div>
            <h3 className="text-xl font-bold text-white mb-3">Przyjmujemy auto i diagnozujemy</h3>
            <p className="text-steel-gray/80 leading-relaxed font-medium">
              Szybki wywiad, precyzyjne odczyty z komputerów diagnostycznych i fizyczne oględziny bez zgadywania.
            </p>
          </div>
          <div className="bg-deep-navy p-8 rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
            <div className="text-4xl font-black text-brand-orange mb-4 opacity-50">02.</div>
            <h3 className="text-xl font-bold text-white mb-3">Dzwonimy z dokładną wyceną</h3>
            <p className="text-steel-gray/80 leading-relaxed font-medium">
              Przed jakąkolwiek ingerencją weryfikujemy części i koszty. Zero niespodzianek przy odbiorze.
            </p>
          </div>
          <div className="bg-deep-navy p-8 rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
            <div className="text-4xl font-black text-brand-orange mb-4 opacity-50">03.</div>
            <h3 className="text-xl font-bold text-white mb-3">Naprawiamy i testujemy</h3>
            <p className="text-steel-gray/80 leading-relaxed font-medium">
              Montujemy zaufane podzespoły, przeprowadzamy jazdę testową i oddajemy pewne, sprawdzone auto.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-deep-navy pt-24 pb-12 border-t border-white/5 relative z-10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          <div className="space-y-12">
            <div>
              <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-4">
                Czekamy.<br />
                <span className="text-brand-orange">Zadzwoń.</span>
              </h2>
              <a href="tel:+48123456789" className="text-4xl md:text-5xl font-bold text-white hover:text-brand-orange transition-colors tracking-tight flex items-center gap-4 mt-8">
                <Phone className="text-brand-orange" size={40} />
                +48 123 456 789
              </a>
            </div>
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="flex items-start gap-4">
                <div className="bg-brand-orange/10 p-3 rounded-xl">
                  <MapPin className="text-brand-orange" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Centryczny Adres</h4>
                  <p className="text-steel-gray font-medium">ul. Przykładowa 12<br />55-200 Oława</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-brand-orange/10 p-3 rounded-xl">
                  <Clock className="text-brand-orange" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Godziny otwarcia</h4>
                  <p className="text-steel-gray font-medium">Pon - Pt: 8:00 - 18:00<br />Sobota: 9:00 - 13:00</p>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[400px] lg:h-auto rounded-2xl overflow-hidden border border-white/10 grayscale hover:grayscale-0 transition-all duration-700">
            <iframe 
              src="https://maps.google.com/maps?q=O%C5%82awa&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%" 
              height="100%" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade" 
              className="w-full h-full pointer-events-auto" 
              title="Mapa dojazdu" 
              style={{ border: 0 }}
            ></iframe>
          </div>
        </div>
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-steel-gray/60 font-medium">
          <p>© 2026 Auto Serwis Premium Oława. Wszelkie prawa zastrzeżone.</p>
          <p>Solidna mechanika na Dolnym Śląsku.</p>
        </div>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div className="overflow-x-hidden w-full bg-deep-navy text-steel-gray min-h-screen selection:bg-brand-orange selection:text-white pb-0">
      <div className="noise-overlay"></div>
      <Navbar />
      <Hero />
      <Specializations />
      <TrustSection />
      <Process />
      <Footer />
    </div>
  );
}

export default App;
