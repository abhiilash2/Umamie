import { useState, useEffect, useCallback } from "react";
import menuData from "./menuData";

export default function Menu() {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [showNutritionPopup, setShowNutritionPopup] = useState(false);
  const [selectedNutrition, setSelectedNutrition] = useState(null);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  const openNutritionPopup = useCallback((nutritionImage, title) => {
    setSelectedNutrition({ image: nutritionImage, title });
    setShowNutritionPopup(true);
    document.body.style.overflow = "hidden";
  }, []);

  const closeNutritionPopup = useCallback(() => {
    setShowNutritionPopup(false);
    document.body.style.overflow = "unset";
    setTimeout(() => setSelectedNutrition(null), 300);
  }, []);

  // Optimized event handlers
  const handleItemHover = useCallback((itemId) => setHoveredItem(itemId), []);
  const handleItemLeave = useCallback(() => setHoveredItem(null), []);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && showNutritionPopup) {
        closeNutritionPopup();
      }
    };

    if (showNutritionPopup) {
      document.addEventListener("keydown", handleEscape);
      return () => {
        document.removeEventListener("keydown", handleEscape);
        document.body.style.overflow = "unset";
      };
    }
  }, [showNutritionPopup, closeNutritionPopup]);

  // Enhanced scroll to top functionality
  useEffect(() => {
    let scrollTimeout;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowScrollTop(scrollY > 300);

      // Track scrolling state for visual feedback
      setIsScrolling(true);
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 150);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  // Memoized menu items to prevent unnecessary re-renders
  const menuItems = menuData.map((item, index) => (
    <MenuItem
      key={item.id}
      item={item}
      index={index}
      isHovered={hoveredItem === item.id}
      onHover={handleItemHover}
      onLeave={handleItemLeave}
      onNutritionClick={openNutritionPopup}
    />
  ));

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <Header />
        <div className="space-y-6 lg:space-y-8">{menuItems}</div>
      </div>

      <NutritionPopup
        isOpen={showNutritionPopup}
        nutrition={selectedNutrition}
        onClose={closeNutritionPopup}
      />

      {/* Enhanced Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 bg-gradient-to-br from-cyan-500 via-cyan-600 to-blue-600 hover:from-cyan-600 hover:via-cyan-700 hover:to-blue-700 text-white p-3.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 transform hover:scale-110 active:scale-95 ${
          showScrollTop
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "translate-y-16 opacity-0 pointer-events-none"
        } ${isScrolling ? "ring-4 ring-cyan-400/30" : ""}`}
        aria-label="Scroll to top"
        style={{
          backdropFilter: "blur(8px)",
        }}
      >
        <div className="relative">
          <svg
            className={`w-6 h-6 transition-transform duration-300 ${
              isScrolling ? "animate-bounce" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>

          {/* Subtle glow effect */}
          <div className="absolute inset-0 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
        </div>

        {/* Progress indicator ring */}
        <svg
          className="absolute inset-0 w-full h-full -rotate-90"
          viewBox="0 0 50 50"
        >
          <circle
            cx="25"
            cy="25"
            r="20"
            fill="none"
            stroke="rgba(255,255,255,0.2)"
            strokeWidth="2"
          />
          <circle
            cx="25"
            cy="25"
            r="20"
            fill="none"
            stroke="rgba(255,255,255,0.6)"
            strokeWidth="2"
            strokeDasharray={`${Math.PI * 40}`}
            strokeDashoffset={`${
              Math.PI *
              40 *
              (1 -
                Math.min(
                  window.scrollY /
                    (document.documentElement.scrollHeight -
                      window.innerHeight),
                  1
                ))
            }`}
            className="transition-all duration-300"
            style={{
              strokeLinecap: "round",
            }}
          />
        </svg>
      </button>
    </div>
  );
}

// Responsive Header component
const Header = () => (
  <div className="text-center mb-8 sm:mb-12 lg:mb-16">
    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-slate-800 via-slate-600 to-slate-800 bg-clip-text text-transparent mb-4 animate-fade-in">
      Our Menu
    </h1>
    <div className="w-16 sm:w-20 lg:w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
  </div>
);

// Responsive MenuItem component
const MenuItem = ({
  item,
  index,
  isHovered,
  onHover,
  onLeave,
  onNutritionClick,
}) => {
  const handleMouseEnter = useCallback(
    () => onHover(item.id),
    [item.id, onHover]
  );
  const handleNutritionClick = useCallback(
    () => onNutritionClick(item.nutrition, item.title),
    [item.nutrition, item.title, onNutritionClick]
  );

  return (
    <div
      className={`group relative bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-700 ease-out border border-white/20 overflow-hidden ${
        isHovered ? "lg:scale-[1.02] shadow-cyan-200/50" : ""
      }`}
      style={{
        animationDelay: `${index * 0.2}s`,
        animation: "slideInUp 0.8s ease-out forwards",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={onLeave}
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Mobile Layout (stacked) */}
      <div className="lg:hidden relative p-4 sm:p-6 space-y-4">
        {/* Mobile Image */}
        <div className="relative overflow-hidden rounded-xl h-48 sm:h-56">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>

        {/* Mobile Content */}
        <div className="space-y-4">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-2 group-hover:text-cyan-700 transition-colors duration-300">
              {item.title}
            </h3>
            <div className="w-8 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
          </div>

          <p className="text-lg font-semibold text-slate-700 leading-relaxed">
            {item.text}
          </p>

          <p className="text-slate-600 leading-relaxed mb-4 opacity-90 group-hover:opacity-100 transition-opacity duration-300">
            {item.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {item.specs.split(" • ").map((spec, i) => (
              <span
                key={i}
                className="px-3 py-1.5 bg-slate-100 text-slate-700 rounded-full text-xs sm:text-sm font-medium hover:bg-cyan-100 hover:text-cyan-700 transition-all duration-300"
              >
                {spec}
              </span>
            ))}
          </div>

          {/* Mobile Footer */}
          {item.footer && (
            <div className="pt-4 border-t border-slate-200/50">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></div>
                <p className="text-cyan-700 font-medium text-xs sm:text-sm tracking-wide uppercase">
                  {item.footer}
                </p>
              </div>
            </div>
          )}

          {/* Mobile Nutrition Button */}
          <button
            onClick={handleNutritionClick}
            className="w-full mt-4 px-6 py-3 bg-gradient-to-br from-cyan-500 via-cyan-600 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:via-cyan-700 hover:to-blue-700 transform hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl border border-white/20"
          >
            View Nutrition Info
          </button>
        </div>
      </div>

      {/* Desktop Layout (horizontal) */}
      <div className="hidden lg:flex items-stretch min-h-[300px]">
        {/* Left Section - Title and Image */}
        <div className="flex-shrink-0 w-80 p-8 flex flex-col">
          <div className="mb-6">
            <h3 className="text-3xl font-bold text-slate-800 mb-2 group-hover:text-cyan-700 transition-colors duration-300">
              {item.title}
            </h3>
            <div className="w-12 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
          </div>

          <div className="relative flex-1 overflow-hidden rounded-2xl group-hover:rounded-3xl transition-all duration-500 h-48">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </div>

        {/* Middle Section - Content */}
        <div className="flex-1 p-8 flex flex-col justify-center space-y-6">
          <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
            <p className="text-xl font-semibold text-slate-700 mb-4 leading-relaxed">
              {item.text}
            </p>

            <p className="text-slate-600 leading-relaxed text-lg mb-6 opacity-90 group-hover:opacity-100 transition-opacity duration-300">
              {item.description}
            </p>

            <div className="flex flex-wrap gap-3">
              {item.specs.split(" • ").map((spec, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm font-medium hover:bg-cyan-100 hover:text-cyan-700 transition-all duration-300 transform hover:scale-105"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  {spec}
                </span>
              ))}
            </div>
          </div>

          {/* Desktop Footer */}
          {item.footer && (
            <div className="mt-auto pt-6 border-t border-slate-200/50">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></div>
                <p className="text-cyan-700 font-medium text-sm tracking-wide uppercase">
                  {item.footer}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Right Section - Nutrition Button (Desktop only) */}
        <NutritionButton onClick={handleNutritionClick} />
      </div>

      {/* Floating decorative elements */}
      <div
        className="absolute top-4 right-4 lg:top-6 lg:right-6 w-2 lg:w-3 h-2 lg:h-3 bg-cyan-400 rounded-full opacity-60 animate-bounce"
        style={{ animationDelay: "0.5s" }}
      ></div>
      <div
        className="absolute bottom-4 left-1/2 lg:bottom-6 w-1.5 lg:w-2 h-1.5 lg:h-2 bg-blue-400 rounded-full opacity-40 animate-bounce"
        style={{ animationDelay: "1s" }}
      ></div>
    </div>
  );
};

// Desktop-only NutritionButton component
const NutritionButton = ({ onClick }) => (
  <div className="flex-shrink-0 w-64 p-8 flex flex-col justify-center items-center">
    <div className="text-center mb-6"></div>

    <div className="relative group/btn">
      <button
        onClick={onClick}
        className="relative px-8 py-6 bg-gradient-to-br from-cyan-500 via-cyan-600 to-blue-600 text-white rounded-2xl font-semibold text-lg hover:from-cyan-600 hover:via-cyan-700 hover:to-blue-700 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-2xl border border-white/20 backdrop-blur-sm overflow-hidden"
      >
        {/* Button background animation */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -skew-x-12 transform -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 ease-out"></div>

        <div className="relative flex items-center space-x-3">
          <span>View Nutrition Info</span>
        </div>
      </button>

      {/* Floating elements around button */}
      <div
        className="absolute -top-2 -right-2 w-4 h-4 bg-purple-400 rounded-full opacity-60 animate-bounce"
        style={{ animationDelay: "0.3s" }}
      ></div>
      <div
        className="absolute -bottom-1 -left-1 w-3 h-3 bg-cyan-300 rounded-full opacity-50 animate-bounce"
        style={{ animationDelay: "0.7s" }}
      ></div>
    </div>
  </div>
);

// Responsive NutritionPopup component
const NutritionPopup = ({ isOpen, nutrition, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      ></div>

      {/* Modal Content - Responsive positioning */}
      <div
        className={`relative bg-white rounded-2xl sm:rounded-3xl shadow-2xl w-full max-w-sm sm:max-w-md lg:max-w-2xl xl:max-w-4xl max-h-[90vh] flex flex-col transform transition-all duration-500 ease-out ${
          isOpen
            ? "scale-100 opacity-100 translate-y-0"
            : "scale-95 opacity-0 translate-y-8"
        }`}
      >
        {/* Header */}
        <div className="relative px-4 sm:px-6 py-3 sm:py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-t-2xl sm:rounded-t-3xl flex-shrink-0">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg sm:text-xl font-bold mb-1">
                Nutrition Information
              </h3>
              <p className="text-cyan-100 text-sm">{nutrition?.title}</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/20 rounded-full transition-colors duration-200 group flex-shrink-0"
              aria-label="Close nutrition popup"
            >
              <svg
                className="w-5 h-5 transform group-hover:rotate-90 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Animated underline */}
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-white/30 to-white/10 transform scale-x-0 animate-scale-x"></div>
        </div>

        {/* Image Content - Responsive display */}
        <div className="flex-1 p-4 sm:p-6 flex items-center justify-center overflow-auto">
          <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-lg group w-full max-w-full">
            <img
              src={nutrition?.image}
              alt="Nutrition facts"
              className="block w-full h-auto object-contain transform group-hover:scale-105 transition-transform duration-500"
              style={{
                imageRendering: "crisp-edges",
                maxHeight: "60vh",
              }}
            />
            <div className="absolute inset-0 ring-1 ring-slate-200 rounded-xl sm:rounded-2xl pointer-events-none"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scale-x {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-scale-x {
          animation: scale-x 0.6s ease-out 0.2s forwards;
        }
      `}</style>
    </div>
  );
};
