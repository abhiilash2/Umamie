import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const linkClass =
    "px-4 py-2 text-lg font-medium transition-colors duration-300 hover:text-indigo-500";

  const activeClass = "text-indigo-600 border-b-2 border-indigo-600";

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Scroll to top functionality
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* Fixed Navbar */}
      <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50 h-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex justify-between items-center h-full">
            {/* Logo */}
            <div className="flex items-center">
              <NavLink to="/">
                <img src="/logo.png" alt="Logo" className="h-16 w-auto" />
              </NavLink>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `${linkClass} ${isActive ? activeClass : "text-gray-700"}`
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/menu"
                className={({ isActive }) =>
                  `${linkClass} ${isActive ? activeClass : "text-gray-700"}`
                }
              >
                Menu
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `${linkClass} ${isActive ? activeClass : "text-gray-700"}`
                }
              >
                About Us
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `${linkClass} ${isActive ? activeClass : "text-gray-700"}`
                }
              >
                Contact Us
              </NavLink>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-indigo-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {/* Hamburger icon */}
                <svg
                  className={`${isMenuOpen ? "hidden" : "block"} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                {/* Close icon */}
                <svg
                  className={`${isMenuOpen ? "block" : "hidden"} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
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
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`${isMenuOpen ? "block" : "hidden"} md:hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg border-t border-gray-200">
            <NavLink
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `block px-3 py-2 text-base font-medium transition-colors duration-300 hover:text-indigo-500 hover:bg-gray-50 rounded-md ${
                  isActive ? "text-indigo-600 bg-indigo-50" : "text-gray-700"
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/menu"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `block px-3 py-2 text-base font-medium transition-colors duration-300 hover:text-indigo-500 hover:bg-gray-50 rounded-md ${
                  isActive ? "text-indigo-600 bg-indigo-50" : "text-gray-700"
                }`
              }
            >
              Menu
            </NavLink>
            <NavLink
              to="/about"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `block px-3 py-2 text-base font-medium transition-colors duration-300 hover:text-indigo-500 hover:bg-gray-50 rounded-md ${
                  isActive ? "text-indigo-600 bg-indigo-50" : "text-gray-700"
                }`
              }
            >
              About Us
            </NavLink>
            <NavLink
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `block px-3 py-2 text-base font-medium transition-colors duration-300 hover:text-indigo-500 hover:bg-gray-50 rounded-md ${
                  isActive ? "text-indigo-600 bg-indigo-50" : "text-gray-700"
                }`
              }
            >
              Contact Us
            </NavLink>
          </div>
        </div>
      </nav>

      {/* Push page content below navbar */}
      <div className="h-16"></div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-indigo-600 hover:bg-indigo-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 z-50"
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
    </>
  );
}
