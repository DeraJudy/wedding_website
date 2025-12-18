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
    <nav className="fixed top-0 w-full bg-white backdrop-blur-md z-50 border-b border-primary/10 shadow-soft">
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
      {isOpen && (
        <div className="lg:hidden animate-fade-in">
          <div className="px-4 pt-2 pb-4 space-y-1 bg-background border-b border-primary/10">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 text-black hover:text-[skyblue] hover:bg-secondary/50 rounded-lg transition-all duration-200 text-base font-medium font-modern"
              >
                {item.label}
              </a>
              // <a href={ll} className="">Login</a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
