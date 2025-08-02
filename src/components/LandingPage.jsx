import React, { useState, useEffect } from 'react';

const LandingPage = () => {
  const testimonials = [
    { text: "Une expérience incroyable, le massage était divin et le personnel très attentionné.", author: "Sarah M." },
    { text: "Je me suis senti complètement revitalisé, une pause bien méritée.", author: "David L." },
    { text: "L'ambiance était apaisante, ma peau n'a jamais été aussi radieuse.", author: "Emily R." },
  ];

  const [randomTestimonial, setRandomTestimonial] = useState({});

  useEffect(() => {
    setRandomTestimonial(testimonials[Math.floor(Math.random() * testimonials.length)]);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FAFAF9] to-[#E5E7EB] font-sans text-black">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white shadow-md z-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex justify-between items-center">
          <h1 className="text-3xl font-bold">Wellness Suite</h1>
          <div className="flex items-center space-x-12">
            <nav className="flex space-x-8">
              <a href="#presentation" className="hover:text-[#BECDAC] transition-colors">Présentation</a>
              <a href="#services" className="hover:text-[#BECDAC] transition-colors">Services</a>
              <a href="#carte-cadeau" className="hover:text-[#BECDAC] transition-colors">Carte Cadeau</a>
              <a href="#contact" className="hover:text-[#BECDAC] transition-colors">Contact</a>
            </nav>
            <div className="flex space-x-4">
              <a href="/login" className="bg-[#BECDAC] text-white px-4 py-2 rounded-lg hover:bg-opacity-80 transition-all duration-300">Se connecter</a>
              <a href="/register" className="bg-[#BECDAC] text-white px-4 py-2 rounded-lg hover:bg-opacity-80 transition-all duration-300">S'inscrire</a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-36 pb-20 flex items-center justify-center min-h-screen bg-[url('https://images.unsplash.com/photo-1614594975525-8fdadad39d4b?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center bg-no-repeat relative">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 text-center">
          <h2 className="text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
            Bienvenue chez Wellness Suite
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Découvrez une oasis de paix avec nos soins luxueux pour revitaliser corps et esprit.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <img
              src="https://images.unsplash.com/photo-1519415510236-7184a8212b7e?auto=format&fit=crop&w=300&q=80"
              alt="Massage"
              className="w-full h-40 object-cover rounded-lg shadow-md rotate-2 hover:rotate-0 transition-transform duration-300"
            />
            <img
              src="https://images.unsplash.com/photo-1600335895229-6e7557d1c3be?auto=format&fit=crop&w=300&q=80"
              alt="Soins du visage"
              className="w-full h-40 object-cover rounded-lg shadow-md -rotate-2 hover:rotate-0 transition-transform duration-300"
            />
            <img
              src="https://images.unsplash.com/photo-1596433765721-2c087170ba4f?auto=format&fit=crop&w=300&q=80"
              alt="Spa thermal"
              className="w-full h-40 object-cover rounded-lg shadow-md rotate-1 hover:rotate-0 transition-transform duration-300"
            />
            <img
              src="https://images.unsplash.com/photo-1614594975525-8fdadad39d4b?auto=format&fit=crop&w=300&q=80"
              alt="Ambiance spa"
              className="w-full h-40 object-cover rounded-lg shadow-md -rotate-1 hover:rotate-0 transition-transform duration-300"
            />
          </div>
          <a
            href="/booking"
            className="inline-block bg-[#BECDAC] text-white px-8 py-4 rounded-lg text-lg hover:bg-opacity-80 transition-all duration-300"
          >
            Prendre RDV
          </a>
        </div>
      </section>

      {/* Presentation Section */}
      <section id="presentation" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <h3 className="text-4xl font-bold mb-10">Présentation du Spa</h3>
          <p className="text-lg max-w-2xl mx-auto mb-12">
            Wellness Suite est un sanctuaire de bien-être où chaque détail est pensé pour offrir une expérience de relaxation ultime. Nos experts vous accompagnent dans un voyage sensoriel unique.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-br from-[#E5E7EB] to-[#FAFAF9]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h3 className="text-4xl font-bold text-center mb-16">Services Mis en Avant</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="p-6 rounded-xl hover:shadow-xl transition-all duration-300">
              <img
                src="https://images.unsplash.com/photo-1519415510236-7184a8212b7e?auto=format&fit=crop&w=400&q=80"
                alt="Massage"
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <h4 className="text-2xl font-semibold mb-4">Massages Relaxants</h4>
              <p>60 min - 80€ - Des massages apaisants pour libérer les tensions.</p>
              <a href="/services/1" className="mt-4 inline-block bg-[#BECDAC] text-white px-4 py-2 rounded-lg hover:bg-opacity-80 transition-all duration-300">Réserver ce soin</a>
            </div>
            <div className="p-6 rounded-xl hover:shadow-xl transition-all duration-300">
              <img
                src="https://images.unsplash.com/photo-1600335895229-6e7557d1c3be?auto=format&fit=crop&w=400&q=80"
                alt="Soins du visage"
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <h4 className="text-2xl font-semibold mb-4">Soins du Visage</h4>
              <p>45 min - 60€ - Traitements pour une peau éclatante.</p>
              <a href="/services/2" className="mt-4 inline-block bg-[#BECDAC] text-white px-4 py-2 rounded-lg hover:bg-opacity-80 transition-all duration-300">Réserver ce soin</a>
            </div>
            <div className="p-6 rounded-xl hover:shadow-xl transition-all duration-300">
              <img
                src="https://images.unsplash.com/photo-1596433765721-2c087170ba4f?auto=format&fit=crop&w=400&q=80"
                alt="Spa thermal"
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <h4 className="text-2xl font-semibold mb-4">Spa Thermal</h4>
              <p>90 min - 120€ - Bains thermaux pour une détente profonde.</p>
              <a href="/services/3" className="mt-4 inline-block bg-[#BECDAC] text-white px-4 py-2 rounded-lg hover:bg-opacity-80 transition-all duration-300">Réserver ce soin</a>
            </div>
          </div>
        </div>
      </section>

      {/* Carte Cadeau Section */}
      <section id="carte-cadeau" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <h3 className="text-4xl font-bold mb-10">Carte Cadeau</h3>
          <p className="text-lg max-w-2xl mx-auto mb-12">
            Offrez une expérience de bien-être avec nos cartes cadeaux personnalisables. Entrez un code ou achetez-en une dès maintenant.
          </p>
          <a
            href="/carte-cadeau"
            className="inline-block bg-[#BECDAC] text-white px-6 py-3 rounded-lg hover:bg-opacity-80 transition-all duration-300"
          >
            Acheter une carte
          </a>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-[#E5E7EB] to-[#FAFAF9]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <h3 className="text-4xl font-bold mb-12">Témoignages</h3>
          <div className="p-6 rounded-xl bg-[#E5E7EB] shadow-md">
            <p className="mb-4">{randomTestimonial.text}</p>
            <p className="font-semibold">{randomTestimonial.author}</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <h3 className="text-4xl font-bold mb-10">Contactez-Nous</h3>
          <p className="text-lg max-w-xl mx-auto mb-8">
            Prenez rendez-vous ou posez vos questions. Horaires : 9h-20h. Adresse : 123 Rue du Spa, Paris.
          </p>
          <a
            href="/contact"
            className="inline-block bg-[#BECDAC] text-white px-6 py-3 rounded-lg hover:bg-opacity-80 transition-all duration-300"
          >
            Nous écrire
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black text-center">
        <p className="text-white text-sm">© 2025 Wellness Suite. Tous droits réservés. | <a href="/mentions-legales" className="underline hover:text-[#BECDAC]">Mentions Légales</a></p>
      </footer>
    </div>
  );
};

export default LandingPage;