import { useState, useEffect } from "react";

export default function Home() {
  const navigate = () => console.log("Navigate to menu");
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Scroll to top when component mounts (page navigation)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Show scroll to top button when user scrolls down
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Blurred Background */}
      <div
        className="absolute inset-0 bg-[url('/Home/bg.avif')] bg-cover bg-center scale-110 blur-sm"
        style={{ filter: "blur(4px)" }}
      ></div>

      {/* Dark Overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6">
        <div className="text-center max-w-4xl">
          {/* Brand Name */}
          <h1 className="text-7xl md:text-8xl font-bold mb-4 tracking-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Umamie
            </span>
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-slate-300 mb-8 font-light tracking-wide">
            "Slurp, Savor, Satisfy"
          </p>

          {/* Description */}
          <div className="backdrop-blur-md bg-slate-900 bg-opacity-60 rounded-2xl p-8 md:p-12 border border-slate-700 border-opacity-50 shadow-2xl">
            <p className="text-lg md:text-xl text-slate-200 leading-relaxed font-medium">
              At Umamie, we believe taste should never be ordinary! Offering
              instant noodles with authentic international flavors, high quality
              ingredients, and real inclusions – Gourmet street-food experience
              in just 3 minutes
            </p>
          </div>

          {/* CTA Button */}
          <div className="mt-12">
            <button
              onClick={() => navigate("/menu")}
              className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-out"
            >
              <span className="relative z-10">Discover Flavors</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>

          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-cyan-400 bg-opacity-20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-32 right-16 w-16 h-16 bg-blue-500 bg-opacity-20 rounded-full blur-lg animate-pulse delay-1000"></div>
          <div className="absolute top-1/3 right-8 w-12 h-12 bg-purple-400 bg-opacity-20 rounded-full blur-md animate-pulse delay-500"></div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 ease-out opacity-90 hover:opacity-100"
          aria-label="Scroll to top"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      )}
    </div>
  );
}
