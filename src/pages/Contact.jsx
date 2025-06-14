import { useState, useEffect } from "react";
import { MapPin, Phone, Mail, Send, MessageCircle } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    reservationDate: "",
    partySize: "2",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Header Section */}
      <div className="relative bg-gradient-to-r from-slate-800 via-slate-600 to-slate-800 text-white py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-blue-500/10"></div>
        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent mb-4">
            Contact Us
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl opacity-90">
            We'd love to hear from you! Reach out to share the feedback!
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="group bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-700 ease-out border border-white/20 p-8 transform hover:scale-[1.02]">
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>

              <div className="relative">
                <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center group-hover:text-cyan-700 transition-colors duration-300">
                  <MessageCircle className="mr-3 text-cyan-500" size={32} />
                  Get In Touch
                </h2>
                <div className="w-12 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 mb-6"></div>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4 p-4 bg-slate-100/60 rounded-2xl hover:bg-cyan-100/60 hover:shadow-md transition-all duration-300 group/item">
                    <MapPin
                      className="text-cyan-600 mt-1 flex-shrink-0 group-hover/item:text-blue-600 transition-colors duration-300"
                      size={24}
                    />
                    <div>
                      <h3 className="font-semibold text-slate-800 group-hover/item:text-cyan-700 transition-colors duration-300">
                        Visit Us
                      </h3>
                      <p className="text-slate-600">
                        123 Noodle Street
                        <br />
                        Flavor District, FD 12345
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-4 bg-slate-100/60 rounded-2xl hover:bg-cyan-100/60 hover:shadow-md transition-all duration-300 group/item">
                    <Phone
                      className="text-cyan-600 mt-1 flex-shrink-0 group-hover/item:text-blue-600 transition-colors duration-300"
                      size={24}
                    />
                    <div>
                      <h3 className="font-semibold text-slate-800 group-hover/item:text-cyan-700 transition-colors duration-300">
                        Call Us
                      </h3>
                      <p className="text-slate-600">
                        (555) 123-NOOD
                        <br />
                        For reservations & takeout
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-4 bg-slate-100/60 rounded-2xl hover:bg-cyan-100/60 hover:shadow-md transition-all duration-300 group/item">
                    <Mail
                      className="text-cyan-600 mt-1 flex-shrink-0 group-hover/item:text-blue-600 transition-colors duration-300"
                      size={24}
                    />
                    <div>
                      <h3 className="font-semibold text-slate-800 group-hover/item:text-cyan-700 transition-colors duration-300">
                        Email Us
                      </h3>
                      <p className="text-slate-600">
                        hello@goldennoodlehouse.com
                        <br />
                        We respond within 24 hours
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating decorative elements */}
              <div
                className="absolute top-6 right-6 w-3 h-3 bg-cyan-400 rounded-full opacity-60 animate-bounce"
                style={{ animationDelay: "0.5s" }}
              ></div>
              <div
                className="absolute bottom-6 left-1/4 w-2 h-2 bg-blue-400 rounded-full opacity-40 animate-bounce"
                style={{ animationDelay: "1s" }}
              ></div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="group bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-700 ease-out border border-white/20 p-8 transform hover:scale-[1.02]">
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>

            <div className="relative">
              <h2 className="text-3xl font-bold text-slate-800 mb-6 group-hover:text-cyan-700 transition-colors duration-300">
                Send Us a Message
              </h2>
              <div className="w-12 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 mb-6"></div>

              {submitted ? (
                <div className="text-center py-12">
                  <div className="bg-cyan-100 text-cyan-800 p-6 rounded-2xl border border-cyan-200">
                    <h3 className="text-xl font-semibold mb-2">
                      Message Sent!
                    </h3>
                    <p>
                      Thank you for contacting us. We'll get back to you soon!
                    </p>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-slate-300 rounded-2xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all hover:border-cyan-300 bg-white/80 backdrop-blur-sm"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-slate-300 rounded-2xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all hover:border-cyan-300 bg-white/80 backdrop-blur-sm"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows="5"
                      className="w-full px-4 py-3 border border-slate-300 rounded-2xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all hover:border-cyan-300 resize-none bg-white/80 backdrop-blur-sm"
                      placeholder="Tell us how we can help you..."
                    ></textarea>
                  </div>

                  <div className="relative group/btn">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`relative w-full py-4 px-6 rounded-2xl font-semibold text-white transition-all transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-2xl border border-white/20 backdrop-blur-sm overflow-hidden ${
                        isSubmitting
                          ? "bg-slate-400 cursor-not-allowed"
                          : "bg-gradient-to-br from-cyan-500 via-cyan-600 to-blue-600 hover:from-cyan-600 hover:via-cyan-700 hover:to-blue-700"
                      }`}
                    >
                      {/* Button background animation */}
                      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -skew-x-12 transform -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 ease-out"></div>

                      <div className="relative">
                        {isSubmitting ? (
                          <div className="flex items-center justify-center">
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                            Sending...
                          </div>
                        ) : (
                          <div className="flex items-center justify-center">
                            <Send className="mr-2" size={20} />
                            Send Message
                          </div>
                        )}
                      </div>
                    </button>

                    {/* Floating elements around button */}
                    <div
                      className="absolute -top-2 -right-2 w-4 h-4 bg-blue-400 rounded-full opacity-60 animate-bounce"
                      style={{ animationDelay: "0.3s" }}
                    ></div>
                    <div
                      className="absolute -bottom-1 -left-1 w-3 h-3 bg-cyan-300 rounded-full opacity-50 animate-bounce"
                      style={{ animationDelay: "0.7s" }}
                    ></div>
                  </div>
                </div>
              )}
            </div>

            {/* Floating decorative elements */}
            <div
              className="absolute top-6 right-6 w-3 h-3 bg-cyan-400 rounded-full opacity-60 animate-bounce"
              style={{ animationDelay: "0.5s" }}
            ></div>
            <div
              className="absolute bottom-6 left-1/3 w-2 h-2 bg-blue-400 rounded-full opacity-40 animate-bounce"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
