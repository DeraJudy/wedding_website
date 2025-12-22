"use client";
import { useState } from 'react';
import { Menu, X, Heart } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Our Story', href: '#story' },
    { label: 'Details', href: '#details' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Bridal Party', href: '#party' },
    { label: 'Gift', href: '#gift' },
    { label: 'Wishes', href: '#wishes' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-transparent backdrop-blur-md z-50 shadow-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Heart className="h-6 w-6 text-[gold]" fill="currentColor" />
            <span className="font-elegant text-2xl font-semibold text-black">D&G</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-6">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-black hover:text-[skyblue] transition-colors duration-300 
                  text-sm font-medium font-modern relative after:absolute after:bottom-0 
                  after:left-0 after:w-0 after:h-0.5 after:bg-[gold] after:transition-all 
                  hover:after:w-full"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-black"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`lg:hidden fixed inset-0 top-0 z-40 transition-all duration-300 ease-in-out ${
        isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        <div className="absolute inset-0 bg-black/50" onClick={() => setIsOpen(false)} />
        <div className={`absolute left-0 top-0 h-screen w-1/2 bg-white shadow-lg transform transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}>
            <div className="p-6">
              <div className="space-y-4">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block py-3 text-gray-800 hover:text-[#4682B4] text-lg font-medium"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;