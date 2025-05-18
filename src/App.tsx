import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom'
import LocalBusiness from './pages/LocalBusiness'
import PropertyManagers from './pages/PropertyManagers'

function Navigation({ isMenuOpen, setIsMenuOpen }: { isMenuOpen: boolean; setIsMenuOpen: (open: boolean) => void }) {
  const location = useLocation()
  const navigate = useNavigate()

  const scrollToTestimonials = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    if (location.pathname !== '/') {
      navigate('/')
      // Wait for navigation to complete before scrolling
      setTimeout(() => {
        const element = document.getElementById('testimonials-section')
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    } else {
      const element = document.getElementById('testimonials-section')
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <>
      <nav className="bg-white shadow-sm fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="text-2xl font-bold text-[#2C3E50]">Loqal</Link>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <Link to="/property-managers" className="text-gray-700 hover:text-[#27AE60]">For Buildings</Link>
              <Link to="/local-business" className="text-gray-700 hover:text-[#27AE60]">For Businesses</Link>
              <a href="#testimonials-section" onClick={scrollToTestimonials} className="text-gray-700 hover:text-[#27AE60]">Testimonials</a>
              <button className="bg-[#27AE60] text-white px-4 py-2 rounded-md hover:bg-[#219653] transition-colors">
                Get Started
              </button>
            </div>
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg fixed w-full z-10 top-16">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/property-managers" className="block px-3 py-2 text-gray-700 hover:text-[#27AE60]">For Buildings</Link>
            <Link to="/local-business" className="block px-3 py-2 text-gray-700 hover:text-[#27AE60]">For Businesses</Link>
            <a href="#testimonials-section" onClick={scrollToTestimonials} className="block px-3 py-2 text-gray-700 hover:text-[#27AE60]">Testimonials</a>
          </div>
        </div>
      )}
    </>
  )
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

        <Routes>
          <Route path="/local-business" element={<LocalBusiness />} />
          <Route path="/property-managers" element={<PropertyManagers />} />
          <Route path="/" element={
            <>
              {/* Hero Section */}
              <div className="pt-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                  <div className="lg:flex items-center gap-12">
                    <div className="lg:w-1/2">
                      <h1 className="text-4xl sm:text-5xl font-bold text-[#2C3E50] leading-tight">
                        Grow Local. Advertise Where Your Customers Live.
                      </h1>
                      <p className="mt-6 text-xl text-gray-600">
                        Offer exclusive discounts to building residents and get prime ad space in their lobbies, elevators, and mailrooms.
                      </p>
                      <div className="mt-8 flex flex-col sm:flex-row gap-4">
                        <Link to="/local-business" className="px-8 py-4 bg-[#2C3E50] text-white rounded-lg hover:bg-[#243444] transition-colors text-lg font-semibold text-center">
                          I'm a Local Business
                        </Link>
                        <Link to="/property-managers" className="px-8 py-4 bg-[#27AE60] text-white rounded-lg hover:bg-[#219653] transition-colors text-lg font-semibold text-center">
                          I Manage a Building
                        </Link>
                      </div>
                      <p className="mt-6 text-gray-600 text-lg italic">Used and loved by 500+ buildings & businesses in New York & Chicago ❤️</p>
                    </div>
                    <div className="lg:w-1/2 mt-12 lg:mt-0">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="rounded-lg overflow-hidden shadow-lg">
                          <img 
                            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=500"
                            alt="Business owner with discount sign"
                            className="w-full h-64 object-cover"
                          />
                        </div>
                        <div className="rounded-lg overflow-hidden shadow-lg">
                          <img 
                            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500"
                            alt="Modern building lobby"
                            className="w-full h-64 object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* How It Works Section */}
              <div id="how-it-works" className="bg-gray-50 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <h2 className="text-3xl font-bold text-center text-[#2C3E50] mb-4">
                    Simple. Local. Effective.
                  </h2>
                  <div className="mt-16 grid md:grid-cols-2 gap-12">
                    <div className="space-y-12">
                      <h3 className="text-2xl font-semibold text-[#2C3E50] mb-8">For Businesses</h3>
                      {[
                        { step: '1', title: 'Sign up and create a discount' },
                        { step: '2', title: 'Target nearby buildings' },
                        { step: '3', title: 'Track results, get new customers' }
                      ].map((item) => (
                        <div key={item.step} className="flex items-start">
                          <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#2C3E50] text-white flex items-center justify-center font-bold">
                            {item.step}
                          </div>
                          <div className="ml-4">
                            <p className="text-lg font-medium text-gray-900">{item.title}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="space-y-12">
                      <h3 className="text-2xl font-semibold text-[#27AE60] mb-8">For Buildings</h3>
                      {[
                        { step: '1', title: 'Approve ad space' },
                        { step: '2', title: 'Receive perks for residents' },
                        { step: '3', title: 'Enhance resident experience' }
                      ].map((item) => (
                        <div key={item.step} className="flex items-start">
                          <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#27AE60] text-white flex items-center justify-center font-bold">
                            {item.step}
                          </div>
                          <div className="ml-4">
                            <p className="text-lg font-medium text-gray-900">{item.title}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Benefits Section */}
              <div id="benefits" className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="grid md:grid-cols-2 gap-16">
                    <div>
                      <h3 className="text-2xl font-bold text-[#2C3E50] mb-8">For Local Businesses</h3>
                      <div className="space-y-6">
                        {[
                          { icon: '🎯', title: 'Hyper-targeted exposure', description: 'Up to 5x conversion vs digital ads' },
                          { icon: '💵', title: 'Pay only for results', description: 'Discount redemptions or ad time' },
                          { icon: '📊', title: 'Real-time tracking & ROI insights', description: 'Monitor performance instantly' }
                        ].map((benefit) => (
                          <div key={benefit.title} className="flex items-start">
                            <div className="text-3xl">{benefit.icon}</div>
                            <div className="ml-4">
                              <h4 className="text-lg font-semibold text-gray-900">{benefit.title}</h4>
                              <p className="text-gray-600">{benefit.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-[#27AE60] mb-8">For Buildings</h3>
                      <div className="space-y-6">
                        {[
                          { icon: '🎁', title: 'Perks for residents', description: 'Exclusive local discounts' },
                          { icon: '💰', title: 'Revenue-share', description: 'Or amenity upgrade options' },
                          { icon: '🛠️', title: 'Zero-maintenance', description: 'We handle install & support' }
                        ].map((benefit) => (
                          <div key={benefit.title} className="flex items-start">
                            <div className="text-3xl">{benefit.icon}</div>
                            <div className="ml-4">
                              <h4 className="text-lg font-semibold text-gray-900">{benefit.title}</h4>
                              <p className="text-gray-600">{benefit.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonials Section */}
              <div id="testimonials-section" className="bg-gray-50 py-12 md:py-20 overflow-hidden">
                <div className="max-w-[95vw] md:max-w-[90vw] mx-auto">
                  <h2 className="text-2xl md:text-3xl font-bold text-center text-[#2C3E50] mb-8 md:mb-12 px-4">
                    What Our Partners Say
                  </h2>
                  <div className="relative">
                    {/* Gradient overlays for scroll effect */}
                    <div className="absolute left-0 top-0 bottom-0 w-8 md:w-48 bg-gradient-to-r from-gray-50 via-gray-50 to-transparent z-10"></div>
                    <div className="absolute right-0 top-0 bottom-0 w-8 md:w-48 bg-gradient-to-l from-gray-50 via-gray-50 to-transparent z-10"></div>
                    
                    {/* Scrolling testimonials container */}
                    <div className="flex gap-4 md:gap-6 overflow-hidden px-4 md:px-32">
                      <div className="testimonial-track flex gap-4 md:gap-6">
                        {[
                          {
                            quote: "Loqal made it easy to turn our lobby into something valuable for us and our residents.",
                            author: "Sarah",
                            company: "Optima Lakeview",
                            type: "building"
                          },
                          {
                            quote: "No maintenance, no complaints. Just a simple way to bring in extra income.",
                            author: "Michael",
                            company: "727 West Madison",
                            type: "building"
                          },
                          {
                            quote: "We've had great feedback from residents and zero extra work for staff.",
                            author: "Dana",
                            company: "The Sinclair",
                            type: "building"
                          },
                          {
                            quote: "It's a smart upgrade that pays for itself.",
                            author: "Alex",
                            company: "The Paragon Chicago",
                            type: "building"
                          },
                          {
                            quote: "We get regular foot traffic from nearby buildings thanks to Loqal.",
                            author: "Tom",
                            company: "ChiBrew Coffee",
                            type: "business"
                          },
                          {
                            quote: "Loqal helped people in the neighborhood actually find us.",
                            author: "Lena",
                            company: "SliceHouse Pizza",
                            type: "business"
                          },
                          {
                            quote: "It's like having a mini billboard inside the building.",
                            author: "Mark",
                            company: "FreshBar Salon",
                            type: "business"
                          },
                          {
                            quote: "Simple, local, and effective — just what we needed.",
                            author: "Priya",
                            company: "Pure Fit Studio",
                            type: "business"
                          }
                        ].map((testimonial, index) => (
                          <div
                            key={`original-${index}`}
                            className="flex-none w-[280px] md:w-[350px] bg-white rounded-xl shadow-lg p-4 md:p-6 transform transition-transform hover:scale-105"
                          >
                            <div className="h-full flex flex-col justify-between min-h-[200px]">
                              <div>
                                <div className="text-xl md:text-2xl text-[#2C3E50] mb-2">❝</div>
                                <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
                                  {testimonial.quote}
                                </p>
                              </div>
                              <div>
                                <p className="font-semibold text-[#2C3E50] text-sm md:text-base">
                                  {testimonial.author}
                                </p>
                                <p className="text-xs md:text-sm text-gray-600">
                                  {testimonial.company}
                                </p>
                                <div className={`mt-2 inline-block px-2 md:px-3 py-1 rounded-full text-xs ${
                                  testimonial.type === 'building' 
                                    ? 'bg-[#27AE60] text-white' 
                                    : 'bg-[#2C3E50] text-white'
                                }`}>
                                  {testimonial.type === 'building' ? 'Building Partner' : 'Business Partner'}
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                        {/* Duplicate testimonials for seamless loop - with same mobile responsive classes */}
                        {[
                          {
                            quote: "Loqal made it easy to turn our lobby into something valuable for us and our residents.",
                            author: "Sarah",
                            company: "Optima Lakeview",
                            type: "building"
                          },
                          {
                            quote: "No maintenance, no complaints. Just a simple way to bring in extra income.",
                            author: "Michael",
                            company: "727 West Madison",
                            type: "building"
                          },
                          {
                            quote: "We've had great feedback from residents and zero extra work for staff.",
                            author: "Dana",
                            company: "The Sinclair",
                            type: "building"
                          },
                          {
                            quote: "It's a smart upgrade that pays for itself.",
                            author: "Alex",
                            company: "The Paragon Chicago",
                            type: "building"
                          },
                          {
                            quote: "We get regular foot traffic from nearby buildings thanks to Loqal.",
                            author: "Tom",
                            company: "ChiBrew Coffee",
                            type: "business"
                          },
                          {
                            quote: "Loqal helped people in the neighborhood actually find us.",
                            author: "Lena",
                            company: "SliceHouse Pizza",
                            type: "business"
                          },
                          {
                            quote: "It's like having a mini billboard inside the building.",
                            author: "Mark",
                            company: "FreshBar Salon",
                            type: "business"
                          },
                          {
                            quote: "Simple, local, and effective — just what we needed.",
                            author: "Priya",
                            company: "Pure Fit Studio",
                            type: "business"
                          }
                        ].map((testimonial, index) => (
                          <div
                            key={`duplicate-${index}`}
                            className="flex-none w-[280px] md:w-[350px] bg-white rounded-xl shadow-lg p-4 md:p-6 transform transition-transform hover:scale-105"
                          >
                            <div className="h-full flex flex-col justify-between min-h-[200px]">
                              <div>
                                <div className="text-xl md:text-2xl text-[#2C3E50] mb-2">❝</div>
                                <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
                                  {testimonial.quote}
                                </p>
                              </div>
                              <div>
                                <p className="font-semibold text-[#2C3E50] text-sm md:text-base">
                                  {testimonial.author}
                                </p>
                                <p className="text-xs md:text-sm text-gray-600">
                                  {testimonial.company}
                                </p>
                                <div className={`mt-2 inline-block px-2 md:px-3 py-1 rounded-full text-xs ${
                                  testimonial.type === 'building' 
                                    ? 'bg-[#27AE60] text-white' 
                                    : 'bg-[#2C3E50] text-white'
                                }`}>
                                  {testimonial.type === 'building' ? 'Building Partner' : 'Business Partner'}
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Final CTA Section */}
              <div className="bg-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                  <h2 className="text-3xl font-bold text-[#2C3E50] mb-8">
                    Start reaching customers in your neighborhood today.
                  </h2>
                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <button className="px-8 py-4 bg-[#2C3E50] text-white rounded-lg hover:bg-[#243444] transition-colors text-lg font-semibold">
                      Get Started as a Business
                    </button>
                    <button className="px-8 py-4 bg-[#27AE60] text-white rounded-lg hover:bg-[#219653] transition-colors text-lg font-semibold">
                      Join as a Building Partner
                    </button>
                  </div>
                </div>
              </div>
            </>
          } />
        </Routes>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center text-gray-400">
              <p>&copy; 2024 BuyLoqal. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  )
}

export default App 