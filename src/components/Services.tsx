import React, { useState } from 'react';
import { Search, Filter, IndianRupee } from 'lucide-react';

interface Service {
  name: string;
  type: string;
  price: number;
  description?: string;
  category: '3D' | '2D' | 'Film';
}

const Services = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const services: Service[] = [
    { name: 'Only Film', type: 'Film', price: 200, category: 'Film' },
    { name: 'CBCT Report', type: 'Report', price: 100, category: '3D' },
    { name: 'Bilateral Styloid Process', type: '3D Type', price: 2500, category: '3D' },
    { name: 'OMV View', type: '2D Type', price: 600, category: '2D' },
    { name: 'CBCT Dual Tooth (Endo)', type: '3D Type', price: 1700, category: '3D', description: 'Dual Scanning' },
    { name: 'CBCT Quad Lower Ant', type: '3D Type', price: 1500, category: '3D' },
    { name: 'CBCT Quad Upper Ant', type: '3D Type', price: 1500, category: '3D' },
    { name: 'CBCT Ramus (One Side)', type: '3D Type', price: 1500, category: '3D' },
    { name: 'CBCT Max Sinus (Bilateral)', type: '3D Type', price: 2500, category: '3D' },
    { name: 'CBCT Max Sinus (Unilateral)', type: '3D Type', price: 1500, category: '3D' },
    { name: 'CBCT TMJ (Bilateral)', type: '3D Type', price: 2500, category: '3D' },
    { name: 'CBCT TMJ (Unilateral)', type: '3D Type', price: 1500, category: '3D' },
    { name: 'CBCT Full Mouth', type: '3D Type', price: 3800, category: '3D' },
    { name: 'CBCT Arch', type: '3D Type', price: 2500, category: '3D' },
    { name: 'CBCT Quadrant (LR)', type: '3D Type', price: 1500, category: '3D' },
    { name: 'CBCT Quadrant (LL)', type: '3D Type', price: 1500, category: '3D' },
    { name: 'CBCT Quadrant (UR)', type: '3D Type', price: 1500, category: '3D' },
    { name: 'CBCT Quadrant (UL)', type: '3D Type', price: 1500, category: '3D' },
    { name: 'CBCT Single Tooth (Endo)', type: '3D Type', price: 850, category: '3D' },
    { name: 'PNS', type: '2D Type', price: 600, category: '2D' },
    { name: 'TMJ (Open & Closed)', type: '2D Type', price: 600, category: '2D' },
    { name: 'Hand Wrist', type: '2D Type', price: 600, category: '2D' },
    { name: 'Digital OPG + Lateral Ceph', type: '2D Type', price: 1000, category: '2D' },
    { name: 'Ceph AP', type: '2D Type', price: 600, category: '2D' },
    { name: 'Ceph PA', type: '2D Type', price: 600, category: '2D' },
    { name: 'Ceph-Lateral', type: '2D Type', price: 600, category: '2D' },
    { name: 'Digital OPG', type: '2D Type', price: 500, category: '2D' }
  ];

  const filteredServices = services.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.type.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = ['All', '3D', '2D', 'Film'];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case '3D': return 'bg-blue-100 text-blue-800';
      case '2D': return 'bg-green-100 text-green-800';
      case 'Film': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services & Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive dental imaging services with transparent pricing. 
            Choose from our wide range of 2D and 3D imaging options.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search services..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          
          <div className="flex items-center space-x-2">
            <Filter className="w-5 h-5 text-gray-600" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              {categories.map(category => (
                <option key={category} value={category}>{category} Services</option>
              ))}
            </select>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {service.name}
                  </h3>
                  <div className="flex items-center space-x-2 mb-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(service.category)}`}>
                      {service.category}
                    </span>
                    <span className="text-sm text-gray-500">{service.type}</span>
                  </div>
                  {service.description && (
                    <p className="text-sm text-gray-600 mb-2">{service.description}</p>
                  )}
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-1 text-2xl font-bold text-blue-600">
                  <IndianRupee className="w-5 h-5" />
                  <span>{service.price}</span>
                </div>
                <a href="http://wa.me/919778310668" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                  Book Now
                </a>
              </div>
            </div>
          ))}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No services found matching your criteria.</p>
          </div>
        )}

        {/* Contact CTA */}
        <div className="text-center mt-16">
          <div className="bg-blue-600 text-white rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">Need a Custom Package?</h3>
            <p className="text-blue-100 mb-6">
              Contact us for personalized pricing and package deals for multiple services.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;