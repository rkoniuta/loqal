import React from 'react';
import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';

const LocalBusiness = () => {
  const navigate = useNavigate();

  const goToTestimonials = () => {
    navigate('/');
    setTimeout(() => {
      const element = document.getElementById('testimonials-section');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            Reach Residents Right Where They Live.
          </h1>
          <p className="mt-3 max-w-md mx-auto text-xl text-gray-500 sm:text-2xl md:mt-5 md:max-w-3xl">
            Advertise in residential buildings near your store. Offer exclusive perks to nearby tenants and grow your local customer base.
          </p>
        </div>

        <div className="mt-16 bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-12">
            Why Partner With Loqal?
          </h2>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
            {/* Left Column */}
            <div className="space-y-8">
              <div className="flex items-start transform transition-all hover:scale-105">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🎯</span>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">Targeted Reach</h3>
                  <p className="text-gray-600">Target buildings within 0.5–2 miles of your business</p>
                </div>
              </div>
              
              <div className="flex items-start transform transition-all hover:scale-105">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">💰</span>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">Cost Effective</h3>
                  <p className="text-gray-600">More efficient than Google or Facebook ads</p>
                </div>
              </div>
              
              <div className="flex items-start transform transition-all hover:scale-105">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🏆</span>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">Exclusive Access</h3>
                  <p className="text-gray-600">Limited category slots ensure no competition</p>
                </div>
              </div>
              
              <div className="flex items-start transform transition-all hover:scale-105">
                <div className="flex-shrink-0 w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">📊</span>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">Track Results</h3>
                  <p className="text-gray-600">QR-enabled promotions with real-time analytics</p>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              <div className="flex items-start transform transition-all hover:scale-105">
                <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🤝</span>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">Full Support</h3>
                  <p className="text-gray-600">Dedicated account manager for your success</p>
                </div>
              </div>
              
              <div className="flex items-start transform transition-all hover:scale-105">
                <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">📱</span>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">Digital Integration</h3>
                  <p className="text-gray-600">Seamless mobile and physical presence</p>
                </div>
              </div>
              
              <div className="flex items-start transform transition-all hover:scale-105">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">⚡</span>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">Quick Setup</h3>
                  <p className="text-gray-600">Launch your campaign in under 48 hours</p>
                </div>
              </div>
              
              <div className="flex items-start transform transition-all hover:scale-105">
                <div className="flex-shrink-0 w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🔄</span>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">Flexible Terms</h3>
                  <p className="text-gray-600">Monthly plans with no long-term commitment</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 shadow-xl text-white">
          <h2 className="text-3xl font-bold text-center">
            Ready to Grow Your Local Customer Base?
          </h2>
          <div className="mt-8 flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
            <a
              href="tel:3475700319"
              className="flex items-center text-lg bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors duration-300"
            >
              <PhoneIcon className="h-6 w-6 mr-2" />
              Call (347) 570-0319
            </a>
            <a
              href="mailto:partners@buyloqal.com"
              className="flex items-center text-lg bg-white text-green-600 px-6 py-3 rounded-lg hover:bg-green-50 transition-colors duration-300"
            >
              <EnvelopeIcon className="h-6 w-6 mr-2" />
              Email partners@buyloqal.com
            </a>
          </div>
          <button
            onClick={goToTestimonials}
            className="mt-6 text-blue-600 bg-white/90 hover:bg-white px-6 py-3 rounded-lg transition-colors duration-300 mx-auto block"
          >
            View Success Stories
          </button>
        </div>
      </div>
    </div>
  );
};

export default LocalBusiness; 