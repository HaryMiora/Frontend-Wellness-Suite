import React, { useState } from 'react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleGoogleLogin = () => {
    alert('Connexion avec Google en cours... (À implémenter avec une API)');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Connexion avec email: ${email} et mot de passe: ${password} (À implémenter)`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FAFAF9] to-[#E5E7EB] flex items-center justify-center font-sans">
      <div className="max-w-sm w-full p-5 bg-white rounded-2xl shadow-2xl">
        <h2 className="text-2xl font-bold text-black mb-2 text-center">Connexion</h2>
        <p className="text-center text-gray-600 mb-5 text-sm">
          Se connecter à <span className="font-semibold text-[#BECDAC]">Wellness Suite</span>
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-xs font-medium text-black mb-1">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#BECDAC] text-sm"
              placeholder="votre.email@exemple.com"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-xs font-medium text-black mb-1">Mot de passe</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#BECDAC] text-sm"
              placeholder="••••••••"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#BECDAC] text-white py-2 rounded-lg hover:bg-opacity-80 font-medium text-sm transition"
          >
            Se connecter
          </button>
        </form>

        <div className="mt-4">
          <button
            onClick={handleGoogleLogin}
            className="w-full bg-white border border-gray-300 text-black py-2 rounded-lg hover:bg-gray-50 flex items-center justify-center space-x-2 text-sm"
          >
            <svg className="w-4 h-4" viewBox="0 0 533.5 544.3" xmlns="http://www.w3.org/2000/svg">
              <path fill="#4285F4" d="M533.5 278.4c0-17.4-1.5-34.1-4.4-50.4H272v95.4h146.9c-6.3 34.1-25.1 62.9-53.5 82v68h86.5c50.7-46.7 81.6-115.6 81.6-195z"/>
              <path fill="#34A853" d="M272 544.3c72.6 0 133.6-24 178.2-65.3l-86.5-68c-24 16.1-54.6 25.6-91.7 25.6-70.5 0-130.2-47.6-151.6-111.5h-90.3v69.8C75.8 486.8 167.1 544.3 272 544.3z"/>
              <path fill="#FBBC05" d="M120.4 325.1c-10.9-32.7-10.9-68.1 0-100.8V154.5h-90.3c-38.6 76.5-38.6 168.8 0 245.3l90.3-69.8z"/>
              <path fill="#EA4335" d="M272 107.6c39.5 0 75 13.6 102.9 40.3l77.1-77.1C405.6 24 344.6 0 272 0 167.1 0 75.8 57.5 30.1 154.5l90.3 69.8c21.4-63.9 81.1-111.5 151.6-111.5z"/>
            </svg>
            <span>Se connecter avec Google</span>
          </button>
        </div>

        <p className="mt-3 text-center text-xs text-gray-600">
          Pas encore de compte ?{' '}
          <a href="/register" className="text-[#BECDAC] hover:underline">S'inscrire</a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
