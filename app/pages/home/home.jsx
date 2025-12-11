import React from 'react';
import CtaButton from '../../components/CTA-Button/CTA-Button';
import { ShoppingCart, Clock, MapPin, Star, Zap, Users } from 'lucide-react';
import { useState } from 'react';
import { NavLink } from 'react-router';
export default function Homepage() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>

    <main className="container mx-auto px-6 py-16 bg-[#7FD6A9]">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Faites vos courses plus
            <span className="block bg-white text-[#5ABD88] px-4 py-2 rounded-lg inline-block mt-2">
              rapidement et efficacement
            </span>
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Optimisez votre parcours en magasin, gagnez du temps et profitez d'une expérience d'achat révolutionnée
          </p>
         <NavLink to="/inscription">
          <button
            className="px-8 py-4 bg-white text-[#5ABD88] rounded-full font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            S’inscrire
          </button>
        </NavLink>
            
     
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/95 backdrop-blur rounded-2xl p-8 hover:shadow-2xl transform hover:-translate-y-2 transition-all">
            <div className="bg-[#7FD6A9] w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <Clock className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">Gain de temps</h3>
            <p className="text-gray-600">
              Réduisez jusqu'à 40% le temps passé en magasin grâce à notre parcours optimisé
            </p>
          </div>

          <div className="bg-white/95 backdrop-blur rounded-2xl p-8 hover:shadow-2xl transform hover:-translate-y-2 transition-all">
            <div className="bg-[#7FD6A9] w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <MapPin className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">Parcours optimisé</h3>
            <p className="text-gray-600">
              Suivez le meilleur itinéraire dans le magasin pour trouver tous vos produits rapidement
            </p>
          </div>

          <div className="bg-white/95 backdrop-blur rounded-2xl p-8 hover:shadow-2xl transform hover:-translate-y-2 transition-all">
            <div className="bg-[#7FD6A9] w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <Star className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">Expérience améliorée</h3>
            <p className="text-gray-600">
              Profitez d'une expérience d'achat fluide et agréable à chaque visite
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-white/20 backdrop-blur rounded-3xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Ils nous font déjà confiance</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-5xl font-bold text-white mb-2">50K+</div>
              <div className="text-white/90">Utilisateurs actifs</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-white mb-2">40%</div>
              <div className="text-white/90">Temps économisé</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-white mb-2">4.8★</div>
              <div className="text-white/90">Note moyenne</div>
            </div>
          </div>
        </div>
      </main>

    </>
  );
}
