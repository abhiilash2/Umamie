import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="relative bg-gradient-to-r from-slate-800 via-slate-600 to-slate-800 text-white py-20">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-blue-500/10"></div>
          <div className="relative max-w-6xl mx-auto px-4 text-center">
            <h1 className="text-6xl font-bold bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent mb-4">
              About Us
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full mb-6"></div>
            <p className="text-xl opacity-90">
              Serving authentic, handcrafted noodles with love and tradition
              since day one.
            </p>
          </div>
        </div>

        {/* Story Section */}
        <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 p-8 mb-8 border border-white/20 group overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
          <div className="relative">
            <h3 className="text-2xl font-semibold text-slate-800 mb-4 group-hover:text-cyan-700 transition-colors duration-300">
              Our Story
            </h3>
            <div className="w-12 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 mb-4"></div>
            <p className="text-slate-700 leading-relaxed mb-4 text-lg">
              What started as a family dream has grown into a beloved
              neighborhood destination. Our recipes have been passed down
              through generations, combining traditional techniques with fresh,
              locally-sourced ingredients.
            </p>
            <p className="text-slate-700 leading-relaxed text-lg">
              Every bowl tells a story of craftsmanship, patience, and the
              belief that a perfect meal brings people together. From our
              kitchen to your table, we pour our heart into every dish.
            </p>
          </div>
        </div>

        {/* Specialties Section */}
        <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 p-8 mb-8 border border-white/20 group overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
          <div className="relative">
            <h3 className="text-2xl font-semibold text-slate-800 mb-6 group-hover:text-blue-700 transition-colors duration-300">
              Our Specialties
            </h3>
            <div className="w-12 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 mb-6"></div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4 group/item hover:transform hover:scale-105 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover/item:shadow-xl transition-shadow duration-300">
                  <span className="text-white font-bold text-lg">🍜</span>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-1 group-hover/item:text-blue-600 transition-colors duration-300">
                    Signature Ramen
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Rich, flavorful broths simmered for hours with handmade
                    noodles
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group/item hover:transform hover:scale-105 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover/item:shadow-xl transition-shadow duration-300">
                  <span className="text-white font-bold text-lg">🥢</span>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-1 group-hover/item:text-cyan-600 transition-colors duration-300">
                    Hand-Pulled Noodles
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Fresh noodles made to order using traditional techniques
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group/item hover:transform hover:scale-105 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover/item:shadow-xl transition-shadow duration-300">
                  <span className="text-white font-bold text-lg">🥗</span>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-1 group-hover/item:text-teal-600 transition-colors duration-300">
                    Fresh Sides
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Crisp vegetables and appetizers that complement every meal
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group/item hover:transform hover:scale-105 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover/item:shadow-xl transition-shadow duration-300">
                  <span className="text-white font-bold text-lg">🍵</span>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-1 group-hover/item:text-indigo-600 transition-colors duration-300">
                    Traditional Teas
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Carefully selected teas to enhance your dining experience
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white py-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-blue-500/10"></div>
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <p className="text-slate-300 mb-6 text-lg">
            Ready to taste the difference? Visit us today!
          </p>
          <div className="space-y-2 mb-8">
            <p className="text-sm text-slate-400">
              123 Noodle Street, Food District
            </p>
            <p className="text-sm text-slate-400">Open Daily: 11am - 10pm</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => navigate("/menu")}
              className="group relative px-8 py-4 bg-gradient-to-br from-cyan-500 via-cyan-600 to-blue-600 text-white rounded-2xl font-semibold hover:from-cyan-600 hover:via-cyan-700 hover:to-blue-700 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-2xl border border-white/20 backdrop-blur-sm overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
              <span className="relative">View Menu</span>
            </button>
            <button
              onClick={() => navigate("/contact")}
              className="group px-8 py-4 border-2 border-slate-600 hover:border-cyan-500 text-white rounded-2xl font-semibold hover:bg-cyan-500/10 transform hover:scale-105 transition-all duration-300 backdrop-blur-sm"
            >
              <span className="group-hover:text-cyan-300 transition-colors duration-300">
                Contact Us
              </span>
            </button>
          </div>
        </div>

        {/* Floating decorative elements */}
        <div
          className="absolute top-8 left-1/4 w-3 h-3 bg-cyan-400 rounded-full opacity-60 animate-bounce"
          style={{ animationDelay: "0.5s" }}
        ></div>
        <div
          className="absolute bottom-8 right-1/3 w-2 h-2 bg-blue-400 rounded-full opacity-40 animate-bounce"
          style={{ animationDelay: "1s" }}
        ></div>
      </footer>
    </div>
  );
}
