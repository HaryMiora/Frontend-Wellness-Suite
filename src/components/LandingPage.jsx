import React from 'react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FAFAF9] to-[#E5E7EB] font-sans text-black">
      {/* Header */}
      <header className="fixed top-0 w-full bg-[#FAFAF9] shadow-lg z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-[#A3B18A]">Wellness Suite</h1>
          <nav className="flex space-x-6">
            <a href="/login" className="bg-[#C1E1C1] text-black px-5 py-3 rounded-lg hover:bg-[#A3B18A] transition-all duration-300">Se connecter</a>
            <a href="/signup" className="bg-[#C1E1C1] text-black px-5 py-3 rounded-lg hover:bg-[#A3B18A] transition-all duration-300">S'inscrire</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 flex items-center justify-center min-h-screen bg-gradient-to-r from-[#CCD5AE] to-[#A3B18A]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
              Bienvenue chez Wellness Suite
            </h2>
            <p className="text-xl mb-8 max-w-xl">
              Plongez dans une oasis de bien-être avec nos services de spa conçus pour apaiser votre corps et votre esprit.
            </p>
            <a
              href="/booking"
              className="inline-block bg-[#C1E1C1] text-black px-8 py-4 rounded-xl text-lg hover:bg-[#A3B18A] transition-all duration-300 hover:shadow-xl"
            >
              Prendre RDV maintenant
            </a>
          </div>
          <div className="lg:w-1/2 mt-10 lg:mt-0">
            <img
              src="https://images.unsplash.com/photo-1614594975525-8fdadad39d4b?auto=format&fit=crop&w=1000&q=80"
              alt="Spa ambiance"
              className="w-full rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-[#FAFAF9]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h3 className="text-4xl font-bold text-center mb-16">Nos Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="p-8 bg-[#E5E7EB] rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <img
                src="https://images.unsplash.com/photo-1519415510236-7184a8212b7e?auto=format&fit=crop&w=400&q=80"
                alt="Massage"
                className="w-full h-60 object-cover rounded-xl mb-6"
              />
              <h4 className="text-2xl font-semibold mb-4">Massages Relaxants</h4>
              <p>
                Profitez de massages apaisants pour relâcher les tensions et revitaliser votre énergie.
              </p>
            </div>
            <div className="p-8 bg-[#E5E7EB] rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <img
                src="https://images.unsplash.com/photo-1600335895229-6e7557d1c3be?auto=format&fit=crop&w=400&q=80"
                alt="Soins du visage"
                className="w-full h-60 object-cover rounded-xl mb-6"
              />
              <h4 className="text-2xl font-semibold mb-4">Soins du Visage</h4>
              <p>
                Des traitements personnalisés pour une peau éclatante et rajeunie.
              </p>
            </div>
            <div className="p-8 bg-[#E5E7EB] rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <img
                src="https://images.unsplash.com/photo-1596433765721-2c087170ba4f?auto=format&fit=crop&w=400&q=80"
                alt="Spa thermal"
                className="w-full h-60 object-cover rounded-xl mb-6"
              />
              <h4 className="text-2xl font-semibold mb-4">Spa Thermal</h4>
              <p>
                Plongez dans nos bains thermaux pour une détente profonde et régénérante.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-[#E5E7EB] to-[#FAFAF9]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h3 className="text-4xl font-bold text-center mb-16">Fonctionnalités Clés</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="flex flex-col items-center text-center p-6 bg-[#E5E7EB] rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <svg className="w-16 h-16 text-[#C1E1C1] mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
              <h4 className="text-2xl font-semibold mb-4">Prise de RDV en Ligne</h4>
              <p>
                Réservez facilement vos rendez-vous en quelques clics, à tout moment.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-[#E5E7EB] rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <svg className="w-16 h-16 text-[#C1E1C1] mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
              </svg>
              <h4 className="text-2xl font-semibold mb-4">Historique des RDV</h4>
              <p>
                Consultez l'historique de vos réservations pour une gestion simplifiée.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-[#E5E7EB] rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <svg className="w-16 h-16 text-[#C1E1C1] mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <h4 className="text-2xl font-semibold mb-4">Code Cadeau</h4>
              <p>
                Vérifiez et utilisez vos codes cadeaux pour des expériences uniques.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-[#A3B18A] text-center">
        <p>© 2025 Wellness Suite. Tous droits réservés.</p>
      </footer>
    </div>
  );
};

export default LandingPage;