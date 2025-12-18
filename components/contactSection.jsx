"use client";
import { Phone, Mail, MessageCircle } from 'lucide-react';

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="py-24"
      style={{ backgroundColor: "#F3F7F2" }} // very light sage green
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <Phone className="h-12 w-12 text-[gold] mx-auto mb-6" />
          <h2 className="font-elegant text-4xl sm:text-5xl font-bold text-black mb-6">
            Contact Us
          </h2>
          <p className="text-lg text-gray-500 font-modern">
            Have questions? We’re here to help!
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 gap-6">

          {/* WhatsApp */}
          <div
            className="shadow-soft bg-white border rounded-2xl hover:shadow-romantic transition-all animate-fade-in"
            style={{ borderColor: "#9CAF88" }} // sage green border
          >
            <div className="p-8 text-center">
              <MessageCircle
                className="h-10 w-10 mx-auto mb-4"
                style={{ color: "#9CAF88" }} // sage green icon
              />
              <h4 className="text-black text-xl font-semibold mb-4">WhatsApp</h4>

              <button
                className="w-full text-white py-2 rounded-lg font-medium transition-all"
                style={{ backgroundColor: "#9CAF88" }} // sage green button
                onClick={() => window.open('https://wa.me/2348067593064', '_blank')}
              >
                Chat with Us
              </button>
            </div>
          </div>

          {/* Email */}
          <div
            className="shadow-soft bg-white border rounded-2xl hover:shadow-romantic 
            transition-all animate-fade-in"
            style={{ borderColor: "#87CEEB", animationDelay: "0.2s" }} // sky blue border
          >
            <div className="p-8 text-center">
              <Mail
                className="h-10 w-10 mx-auto mb-4"
                style={{ color: "#87CEEB" }} // sky blue icon
              />
              <h4 className="text-black text-xl font-semibold mb-4">Email</h4>


              <a
                href="mailto:alienjudy25@pematrix.com"
                aria-label="Send us an email"
                className="w-full py-2 rounded-lg font-medium transition-all 
    bg-white border-2 border-[#87CEEB] 
    flex items-center justify-center gap-2
    hover:bg-[#87CEEB]/10"
                style={{ color: "#000" }}
              >
                <Mail className="h-5 w-5" />
                <span>Send us a message</span>
              </a>



            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
