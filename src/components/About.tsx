import React from 'react';
import { Microscope, Brain, Heart, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Leading the Future of Dental Imaging
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our state-of-the-art CBCT technology delivers unparalleled precision in 3D dental and facial imaging, 
            revolutionizing diagnosis and treatment planning.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
          {/* CBCT Technology Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">
              Advanced CBCT Technology
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Cone Beam Computed Tomography (CBCT) represents the pinnacle of dental imaging technology. 
              Our advanced CBCT system provides detailed 3D images with minimal radiation exposure, 
              enabling precise diagnosis and optimal treatment planning.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">High Resolution 3D Imaging</h4>
                  <p className="text-gray-600">Crystal clear images with sub-millimeter accuracy</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Low Radiation Dose</h4>
                  <p className="text-gray-600">Up to 90% less radiation than traditional CT scans</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Fast Scanning</h4>
                  <p className="text-gray-600">Complete scans in under 20 seconds</p>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Representation */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8">
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                <Microscope className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Precision</h4>
                <p className="text-sm text-gray-600">0.1mm accuracy</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                <Brain className="w-8 h-8 text-green-600 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">AI Enhanced</h4>
                <p className="text-sm text-gray-600">Smart diagnostics</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                <Heart className="w-8 h-8 text-red-600 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Patient Care</h4>
                <p className="text-sm text-gray-600">Comfort focused</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                <Users className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Expert Team</h4>
                <p className="text-sm text-gray-600">Certified technicians</p>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="bg-blue-50 rounded-2xl p-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">10,000+</div>
              <div className="text-gray-700">Scans Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">99.8%</div>
              <div className="text-gray-700">Accuracy Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
              <div className="text-gray-700">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-700">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;