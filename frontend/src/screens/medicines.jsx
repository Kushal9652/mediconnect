import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import MedicineCard from "../components/MedicineCard";
import Footer from "../components/footer";
import AOS from "aos";
import "aos/dist/aos.css";

const medicinesData = [
  {
    id: 1,
    name: "Paracetamol",
    price: 12.99,
    originalPrice: 15.99,
    purpose: "Pain Relief & Fever Reduction",
    description: "Effective relief from headaches, muscle pain, and fever",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=300&fit=crop",
    inStock: true,
    rating: 4.8,
    reviews: 324,
    dosage: "500mg"
  },
  {
    id: 2,
    name: "Vitamin D3",
    price: 24.99,
    originalPrice: 29.99,
    purpose: "Bone Health & Immunity",
    description: "Essential vitamin for strong bones and immune support",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
    inStock: true,
    rating: 4.9,
    reviews: 156,
    dosage: "1000 IU"
  },
  {
    id: 3,
    name: "Omega-3",
    price: 34.99,
    originalPrice: 39.99,
    purpose: "Heart & Brain Health",
    description: "Premium fish oil for cardiovascular and cognitive support",
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400&h=300&fit=crop",
    inStock: true,
    rating: 4.7,
    reviews: 289,
    dosage: "1200mg"
  },
  {
    id: 4,
    name: "Probiotics",
    price: 28.99,
    originalPrice: 32.99,
    purpose: "Digestive Health",
    description: "Advanced formula for gut health and digestive wellness",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
    inStock: false,
    rating: 4.6,
    reviews: 203,
    dosage: "50 Billion CFU"
  },
  {
    id: 5,
    name: "Multivitamin",
    price: 19.99,
    originalPrice: 24.99,
    purpose: "Complete Nutrition",
    description: "Essential daily vitamins and minerals for overall health",
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400&h=300&fit=crop",
    inStock: true,
    rating: 4.5,
    reviews: 412,
    dosage: "Daily Formula"
  },
  {
    id: 6,
    name: "Magnesium",
    price: 16.99,
    originalPrice: 19.99,
    purpose: "Muscle & Sleep Support",
    description: "Natural muscle relaxation and better sleep quality",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=300&fit=crop",
    inStock: true,
    rating: 4.8,
    reviews: 178,
    dosage: "400mg"
  }
];

const Medicines = ({ onAddToCart }) => {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, offset: 80 });
  }, []);

  const filteredMedicines = medicinesData.filter(medicine =>
    medicine.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    medicine.purpose.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      {/* Search Bar Only (centered at the top) */}
      <div className="max-w-2xl mx-auto px-4 py-8 flex items-center justify-center">
        <div className="relative w-full">
          <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-400" />
          <input
            type="text"
            placeholder="Search medicines..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 pr-4 py-2 bg-white/70 border border-purple-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 w-full"
          />
        </div>
      </div>
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 py-12" data-aos="fade-down">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Premium <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Medicines</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Discover our curated collection of high-quality medicines and supplements, 
            carefully selected for your health and wellness needs.
          </p>
        </div>
        {/* Medicines Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-aos="fade-up">
          {filteredMedicines.map((medicine, index) => (
            <MedicineCard
              key={medicine.id}
              medicine={medicine}
              onAddToCart={onAddToCart}
              animationDelay={index * 0.1}
            />
          ))}
        </div>
        {filteredMedicines.length === 0 && (
          <div className="text-center py-20 animate-fade-in">
            <div className="w-24 h-24 bg-gradient-to-br from-purple-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-12 h-12 text-purple-600" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">No medicines found</h3>
            <p className="text-gray-600">Try adjusting your search terms to find what you're looking for.</p>
          </div>
        )}
      </section>
      {/* Trust Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 py-16 mt-20" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-4 text-center text-white animate-fade-in">
          <h2 className="text-3xl font-bold mb-4">Trusted by Thousands</h2>
          <p className="text-xl text-purple-100 mb-8">
            All our medicines are FDA approved and sourced from certified manufacturers
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2">
              <div className="text-3xl font-bold mb-2">99.9%</div>
              <div className="text-purple-100">Customer Satisfaction</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2">
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-purple-100">Expert Support</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2">
              <div className="text-3xl font-bold mb-2">Free</div>
              <div className="text-purple-100">Fast Delivery</div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Medicines;
