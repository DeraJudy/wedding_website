"use client"
import { Heart, Gift, CreditCard, Building, Coffee } from 'lucide-react';

const SendBlessingSection = () => {
  return (
    <section id="gift" className="py-24 bg-linear-to-b from-white to-[#F3F7F2]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <Gift className="h-12 w-12 text-[gold] mx-auto mb-6" />
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-700 mb-6">
            Gift Registry
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto font-modern">
            Your presence is our greatest gift! But if you'd like to bless our new journey, here's how you can.
          </p>
        </div>

        <div className="shadow-elegant mb-8 animate-fade-in bg-white rounded-2xl p-9 
        border-gray-700" style={{ animationDelay: '0.2s' }}>
          <div>
            <div className="flex items-center text-gray-700 font-elegant text-xl">
              <Building className="mr-3 h-6 w-6 text-[#9CAF88]" />
              Bank Account Details
            </div>
          </div>
          <div className="space-y-4 mt-3">
            <div className="bg-[#9CAF88] rounded-xl p-6">
              <p className="font-modern text-sm text-gray-8 00 mb-2">Account Name</p>
              <p className="font-semibold text-gray-100 text-lg">Dera & Gozie Wedding</p>
            </div>
            <div className="grid sm:grid-cols-2 mt-3 gap-4">
              <div className="bg-secondary/50 rounded-xl p-4">
                <p className="font-modern text-sm text-muted-foreground mb-1">Bank</p>
                <p className="font-semibold text-foreground">First Bank Nigeria</p>
              </div>
              <div className="bg-secondary/50 rounded-xl p-4">
                <p className="font-modern text-sm text-muted-foreground mb-1">Account Number</p>
                <p className="font-semibold text-gold text-lg">1234567890</p>
              </div>
            </div>
          </div>
        </div>

        <div className="shadow-soft animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="p-8 text-center">
            <Coffee className="h-10 w-10 text-[gold] mx-auto mb-4" />
            <h4 className="font-elegant text-xl font-semibold text-foreground mb-4">
              Send a Little Love
            </h4>
            <p className="text-muted-foreground font-modern mb-6">
              Support us through Buy Me a Coffee
            </p>
            <button 
              size="lg"
              className="bg-[gold] hover:bg-[gold]/90 text-gray-800 font-medium px-8"
              onClick={() => window.open('https://buymeacoffee.com/deragozie', '_blank')}
            >
              <Heart className="mr-2 h-5 w-5" fill="currentColor" />
              Buy Us a Coffee
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SendBlessingSection;
