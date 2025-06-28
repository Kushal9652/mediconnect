import { useState } from "react";
import { Heart, ArrowLeft, TestTube, Droplet, Zap, Stethoscope, ShoppingCart, Plus, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "../components/CartContext";
import Footer from "../components/footer";

const LabTests = () => {
  const { addToCart, cartItems } = useCart();
  const [addedItems, setAddedItems] = useState([]);

  const labTests = [
    {
      id: 101,
      name: "Complete Blood Count (CBC)",
      price: 45,
      purpose: "Blood Analysis",
      description: "Comprehensive blood cell analysis including RBC, WBC, and platelet count",
      icon: Droplet,
      color: "from-red-500 to-red-600",
      bgColor: "from-red-50 to-red-100",
      image: "/placeholder.svg",
      duration: "15 minutes"
    },
    {
      id: 102,
      name: "Urine Analysis",
      price: 35,
      purpose: "Urinalysis",
      description: "Complete urine examination for infections, kidney function, and metabolic disorders",
      icon: TestTube,
      color: "from-yellow-500 to-amber-600",
      bgColor: "from-yellow-50 to-amber-100",
      image: "/placeholder.svg",
      duration: "10 minutes"
    },
    {
      id: 103,
      name: "Chest X-Ray",
      price: 80,
      purpose: "Imaging",
      description: "Digital chest radiography for lung and heart examination",
      icon: Zap,
      color: "from-blue-500 to-blue-600",
      bgColor: "from-blue-50 to-blue-100",
      image: "/placeholder.svg",
      duration: "5 minutes"
    },
    {
      id: 104,
      name: "ECG Test",
      price: 60,
      purpose: "Cardiac Analysis",
      description: "Electrocardiogram to monitor heart rhythm and electrical activity",
      icon: Stethoscope,
      color: "from-green-500 to-green-600",
      bgColor: "from-green-50 to-green-100",
      image: "/placeholder.svg",
      duration: "20 minutes"
    }
  ];

  const handleAddToCart = (test) => {
    addToCart({
      id: test.id,
      name: test.name,
      price: test.price,
      image: test.image,
      purpose: test.purpose
    });
    setAddedItems(prev => [...prev, test.id]);
    setTimeout(() => {
      setAddedItems(prev => prev.filter(id => id !== test.id));
    }, 2000);
  };

  const isInCart = (id) => cartItems.some(item => item.id === id);
  const isJustAdded = (id) => addedItems.includes(id);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Professional <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Lab Tests</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Get accurate results with our state-of-the-art laboratory testing services. 
            Quick, reliable, and performed by certified professionals.
          </p>
        </div>

        {/* Lab Tests Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {labTests.map((test, index) => {
            const IconComponent = test.icon;
            return (
              <div
                key={test.id}
                className="group relative bg-white/70 backdrop-blur-sm rounded-3xl border border-purple-100 p-8 hover:shadow-2xl transition-all duration-700 hover:-translate-y-4 animate-fade-in overflow-hidden"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Background Pattern */}
                <div className={`absolute inset-0 bg-gradient-to-br ${test.bgColor} opacity-0 group-hover:opacity-30 transition-all duration-700 rounded-3xl`} />
                
                {/* Floating Icon */}
                <div className="relative mb-6">
                  <div className={`w-20 h-20 bg-gradient-to-br ${test.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg group-hover:shadow-2xl`}>
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-purple-700 transition-colors duration-300">
                      {test.name}
                    </h3>
                    <div className="inline-block bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
                      {test.purpose}
                    </div>
                  </div>
                </div>

                {/* Test Details */}
                <div className="space-y-4 mb-6">
                  <p className="text-gray-600 text-center leading-relaxed">
                    {test.description}
                  </p>
                  <div className="flex justify-center items-center space-x-4 text-sm text-gray-500">
                    <span className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2" />
                      Duration: {test.duration}
                    </span>
                  </div>
                </div>

                {/* Price and Add to Cart */}
                <div className="relative">
                  <div className="text-center mb-6">
                    <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                      ₹{test.price}
                    </div>
                  </div>
                  
                  <button
                    type="button"
                    onClick={() => handleAddToCart(test)}
                    disabled={isJustAdded(test.id)}
                    className={`w-full h-14 rounded-xl font-semibold text-lg transition-all duration-500 hover:scale-105 ${
                      isJustAdded(test.id)
                        ? "bg-green-500 hover:bg-green-600"
                        : isInCart(test.id)
                        ? "bg-purple-500 hover:bg-purple-600"
                        : "bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                    } text-white shadow-lg hover:shadow-xl flex items-center justify-center`}
                  >
                    {isJustAdded(test.id) ? (
                      <div className="flex items-center space-x-2">
                        <Check className="w-5 h-5" />
                        <span>Added to Cart!</span>
                      </div>
                    ) : (
                      <div className="flex items-center space-x-2">
                        {isInCart(test.id) ? (
                          <>
                            <Plus className="w-5 h-5" />
                            <span>Add More</span>
                          </>
                        ) : (
                          <>
                            <ShoppingCart className="w-5 h-5" />
                            <span>Book Test</span>
                          </>
                        )}
                      </div>
                    )}
                  </button>
                </div>

                {/* Hover Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${test.color} opacity-0 group-hover:opacity-10 transition-all duration-700 rounded-3xl pointer-events-none`} />
              </div>
            );
          })}
        </div>

        {/* Why Choose Our Lab Section */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-12 text-white animate-fade-in">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why Choose Our Laboratory?</h2>
            <p className="text-xl text-purple-100">
              State-of-the-art equipment and certified professionals ensure accurate results
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300">
                <TestTube className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Advanced Equipment</h3>
              <p className="text-purple-100">Latest diagnostic technology for precise results</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300">
                <Stethoscope className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Expert Technicians</h3>
              <p className="text-purple-100">Certified professionals with years of experience</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Quick Results</h3>
              <p className="text-purple-100">Fast turnaround time without compromising accuracy</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LabTests;