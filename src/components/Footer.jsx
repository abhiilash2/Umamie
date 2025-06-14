import {
  MapPin,
  Phone,
  Clock,
  Mail,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-50 via-white to-slate-100 text-slate-800 border-t border-slate-200/50">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Restaurant Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-slate-800 via-slate-600 to-slate-800 bg-clip-text text-transparent mb-3">
                Umamie Noodles
              </h3>
              <div className="w-12 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
            </div>
            <p className="text-slate-600 leading-relaxed text-lg">
              Authentic Asian noodles crafted with love and tradition. From
              hand-pulled ramen to spicy dan dan, we bring you the finest
              flavors of the East.
            </p>
            <div className="flex space-x-4 pt-2">
              <div className="p-3 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl border border-white/20 hover:scale-105 transition-all duration-300 group">
                <Facebook className="w-6 h-6 text-slate-600 group-hover:text-cyan-600 transition-colors" />
              </div>
              <div className="p-3 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl border border-white/20 hover:scale-105 transition-all duration-300 group">
                <Instagram className="w-6 h-6 text-slate-600 group-hover:text-cyan-600 transition-colors" />
              </div>
              <div className="p-3 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl border border-white/20 hover:scale-105 transition-all duration-300 group">
                <Twitter className="w-6 h-6 text-slate-600 group-hover:text-cyan-600 transition-colors" />
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div>
              <h4 className="text-2xl font-bold text-slate-800 mb-3">
                Contact Us
              </h4>
              <div className="w-8 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
            </div>
            <div className="space-y-4">
              <div className="group p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-slate-600 leading-relaxed">
                    123 Noodle Street, Food District, City 12345
                  </span>
                </div>
              </div>
              <div className="group p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-slate-600 font-semibold">
                    (555) 123-NOODLE
                  </span>
                </div>
              </div>
              <div className="group p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-slate-600">
                    hello@goldennoodlehouse.com
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-6">
            <div>
              <h4 className="text-2xl font-bold text-slate-800 mb-3">
                Opening Hours
              </h4>
              <div className="w-8 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
            </div>
            <div className="p-6 bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg border border-white/20">
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-slate-600">
                    <div className="font-semibold text-slate-800">
                      Mon - Fri
                    </div>
                    <div className="text-slate-600">11:00 AM - 10:00 PM</div>
                  </div>
                </div>
                <div className="ml-12">
                  <div className="text-slate-600">
                    <div className="font-semibold text-slate-800">
                      Sat - Sun
                    </div>
                    <div className="text-slate-600">11:00 AM - 11:00 PM</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <div>
              <h4 className="text-2xl font-bold text-slate-800 mb-3">
                Quick Links
              </h4>
              <div className="w-8 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
            </div>
            <nav className="space-y-2">
              {[
                { text: "Our Menu", href: "/menu" },
                { text: "About Us", href: "/about" },
                { text: "Delivery", href: "#delivery" },
                { text: "Catering", href: "#catering" },
                { text: "Reservations", href: "#reservations" },
                { text: "Reviews", href: "#reviews" },
              ].map((link, index) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="group flex items-center space-x-3 p-3 bg-white/40 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/80 hover:shadow-lg transition-all duration-300 hover:scale-105"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-2 h-2 bg-cyan-500 rounded-full group-hover:bg-blue-500 transition-colors duration-300"></div>
                  <span className="text-slate-600 group-hover:text-cyan-700 font-medium transition-colors duration-300">
                    {link.text}
                  </span>
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Floating decorative elements */}
      <div
        className="absolute bottom-20 left-20 w-3 h-3 bg-cyan-400 rounded-full opacity-60 animate-bounce"
        style={{ animationDelay: "0.5s" }}
      ></div>
      <div
        className="absolute bottom-32 right-32 w-2 h-2 bg-blue-400 rounded-full opacity-40 animate-bounce"
        style={{ animationDelay: "1s" }}
      ></div>
    </footer>
  );
}
