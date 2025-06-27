import React from 'react';
import { ArrowRight, Shield, Zap, Award } from 'lucide-react';

const Hero = () => {
  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="bg-gradient-to-br from-sky-100 via-blue-50 to-cyan-50 py-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-sky-200/20 to-blue-200/20"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-sky-300/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-blue-300/10 to-transparent rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Advanced <span className="text-blue-600">3D Dental</span> & Facial Imaging
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                State-of-the-art CBCT technology providing precise, high-resolution 3D imaging for superior diagnostic accuracy and treatment planning.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={scrollToServices}
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center space-x-2 group shadow-lg hover:shadow-xl"
              >
                <span>View Services</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-colors bg-white/80 backdrop-blur-sm">
                Learn More
              </button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3 shadow-sm">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <p className="text-sm font-semibold text-gray-700">Safe & Precise</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3 shadow-sm">
                  <Zap className="w-6 h-6 text-green-600" />
                </div>
                <p className="text-sm font-semibold text-gray-700">Fast Results</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3 shadow-sm">
                  <Award className="w-6 h-6 text-purple-600" />
                </div>
                <p className="text-sm font-semibold text-gray-700">Expert Care</p>
              </div>
            </div>
          </div>

          {/* Right Content - CBCT Machine Image */}
          <div className="relative">
            {/* Main CBCT Machine Image Container */}
            <div className="relative bg-gradient-to-br from-white/90 to-sky-50/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20">
              {/* CBCT Machine Image */}
              <div className="aspect-square bg-gradient-to-br from-sky-100 to-blue-100 rounded-2xl overflow-hidden shadow-inner">
                <img 
                  src="https://i0.wp.com/capitaldentalequipment.com/wp-content/uploads/2021/10/hepworth-img-1.jpg?fit=848%2C545&ssl=1" 
                  alt="CBCT 3D Dental Imaging Machine"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              {/* Machine Info Overlay */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <h3 className="text-lg font-bold text-gray-800 mb-1">CBCT 3D Scanner</h3>
                <p className="text-sm text-gray-600">Advanced Cone Beam Technology</p>
              </div>
            </div>
            
            {/* Floating Stats Cards */}
            <div className="absolute -top-6 -right-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-xl border border-sky-200/50">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">99.8%</div>
                <div className="text-sm text-gray-600">Accuracy</div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-xl border border-sky-200/50">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">{"< 20s"}</div>
                <div className="text-sm text-gray-600">Scan Time</div>
              </div>
            </div>

            <div className="absolute top-1/2 -right-8 transform -translate-y-1/2 bg-white/95 backdrop-blur-sm p-3 rounded-xl shadow-xl border border-sky-200/50">
              <div className="text-center">
                <div className="text-xl font-bold text-purple-600">3D</div>
                <div className="text-xs text-gray-600">Imaging</div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -z-10 top-8 right-8 w-32 h-32 bg-gradient-to-br from-sky-300/20 to-blue-300/20 rounded-full blur-2xl"></div>
            <div className="absolute -z-10 bottom-8 left-8 w-24 h-24 bg-gradient-to-tr from-cyan-300/20 to-sky-300/20 rounded-full blur-xl"></div>
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="mt-20 text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-sky-200/30">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Our CBCT Technology?</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-blue-600">0.1mm</div>
                <div className="text-sm text-gray-600">Resolution</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-green-600">90%</div>
                <div className="text-sm text-gray-600">Less Radiation</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-purple-600">360°</div>
                <div className="text-sm text-gray-600">Full View</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-orange-600">3+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;