import React from 'react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-[#F9FBF8] font-sans">
      {/* Header */}
      <header className="fixed top-0 w-full bg-[#F9FBF8] shadow-md z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-[#10B981]">Wellness Suite</h1>
          <nav className="flex space-x-4">
            <a href="/login" className="bg-[#10B981] text-white px-4 py-2 rounded-full hover:bg-[#2E7D32] transition">Se connecter</a>
            <a href="/signup" className="bg-[#10B981] text-white px-4 py-2 rounded-full hover:bg-[#2E7D32] transition">S'inscrire</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-12 flex items-center justify-center min-h-screen bg-gradient-to-b from-[#D1E7DD] to-[#F9FBF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
            <h2 className="text-4xl md:text-5xl font-bold text-[#2E7D32] mb-6 animate-fade-in">
              Bienvenue chez Wellness Suite
            </h2>
            <p className="text-lg md:text-xl text-[#2E7D32] mb-8 max-w-lg mx-auto md:mx-0">
              Plongez dans une oasis de bien-être avec nos services de spa conçus pour apaiser votre corps et votre esprit.
            </p>
            <a
              href="/booking"
              className="inline-block bg-[#10B981] text-white px-6 py-3 rounded-full text-lg hover:bg-[#2E7D32] transition transform hover:scale-105"
            >
              Prendre RDV maintenant
            </a>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img
              src="https://images.unsplash.com/photo-1614594975525-8fdadad39d4b?auto=format&fit=crop&w=800&q=80"
              alt="Spa ambiance"
              className="w-full h-64 md:h-96 object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-[#F9FBF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-[#2E7D32] text-center mb-12">Nos Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-[#D1E7DD] rounded-lg shadow-md hover:shadow-lg transition transform hover:-translate-y-2">
              <img
                src="https://images.unsplash.com/photo-1519415510236-7184a8212b7e?auto=format&fit=crop&w=300&q=80"
                alt="Massage"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h4 className="text-xl font-semibold text-[#2E7D32] mb-4">Massages Relaxants</h4>
              <p className="text-[#2E7D32]">
                Profitez de massages apaisants pour relâcher les tensions et revitaliser votre énergie.
              </p>
            </div>
            <div className="p-6 bg-[#D1E7DD] rounded-lg shadow-md hover:shadow-lg transition transform hover:-translate-y-2">
              <img
                src="https://images.unsplash.com/photo-1600335895229-6e7557d1c3be?auto=format&fit=crop&w=300&q=80"
                alt="Soins du visage"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h4 className="text-xl font-semibold text-[#2E7D32] mb-4">Soins du Visage</h4>
              <p className="text-[#2E7D32]">
                Des traitements personnalisés pour une peau éclatante et rajeunie.
              </p>
            </div>
            <div className="p-6 bg-[#D1E7DD] rounded-lg shadow-md hover:shadow-lg transition transform hover:-translate-y-2">
              <img
                src="https://images.unsplash.com/photo-1596433765721-2c087170ba4f?auto=format&fit=crop&w=300&q=80"
                alt="Spa thermal"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h4 className="text-xl font-semibold text-[#2E7D32] mb-4">Spa Thermal</h4>
              <p className="text-[#2E7D32]">
                Plongez dans nos bains thermaux pour une détente profonde et régénérante.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-[#D1E7DD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-[#2E7D32] text-center mb-12">Fonctionnalités Clés</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <svg className="w-12 h-12 text-[#10B981] mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
              <h4 className="text-xl font-semibold text-[#2E7D32] mb-4">Prise de RDV en Ligne</h4>
              <p className="text-[#2E7D32]">
                Réservez facilement vos rendez-vous en quelques clics, à tout moment.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <svg className="w-12 h-12 text-[#10B981] mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
              </svg>
              <h4 className="text-xl font-semibold text-[#2E7D32] mb-4">Historique des RDV</h4>
              <p className="text-[#2E7D32]">
                Consultez l'historique de vos réservations pour une gestion simplifiée.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <svg className="w-12 h-12 text-[#10B981] mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <h4 className="text-xl font-semibold text-[#2E7D32] mb-4">Code Cadeau</h4>
              <p className="text-[#2E7D32]">
                Vérifiez et utilisez vos codes cadeaux pour des expériences uniques.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-[#10B981] text-center">
        <p className="text-[#F9FBF8]">© 2025 Wellness Suite. Tous droits réservés.</p>
      </footer>
    </div>
  );
};

export default LandingPage;