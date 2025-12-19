"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { Heart, Calendar, MapPin, ChevronDown } from "lucide-react";

const HERO_IMAGE_URL =
  "https://res.cloudinary.com/diae7jcps/image/upload/f_auto,q_auto,w_2000/hero-wedding_trhtf0.jpg";


const WEDDING_DATE_ISO = "2025-12-27T10:00:00+01:00"; // Dec 27, 2025 – 10:00

const HeroSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    setMounted(true);
    
    const weddingDate = new Date(WEDDING_DATE_ISO);

    function update() {
      const now = Date.now();
      let distance = weddingDate.getTime() - now;

      if (distance < 0) distance = 0;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor(
          (distance % (1000 * 60 * 60)) / (1000 * 60)
        ),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }

    update();
    const timer = setInterval(update, 1000);

    // Intersection Observer for animations
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      clearInterval(timer);
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#87CEEB]"
    >
      {/* Background Image + Overlays */}
      <div className="absolute inset-0">
        {/* Image */}
        <div className="relative w-full h-full">
          <Image
            src={HERO_IMAGE_URL}
            alt="Beautiful couple portrait"
            priority
            fill
            sizes="100vw"
            className="object-cover"
          />

        </div>

        {/* Sky blue overlay ON TOP of image */}
        <div className="absolute inset-0 bg-[#D4AF37] opacity-60" />

        {/* Existing gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-[rgba(156,175,136,0.18)] to-[rgba(212,175,55,0.10)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto pt-16">
        {/* <p className="font-modern text-lg sm:text-xl tracking-widest uppercase mb-4 opacity-90 animate-fade-in">
          We are Getting Married
        </p> */}

        {/* Names */}
        <div className="text-center">
          <h1 className={`text-6xl sm:text-7xl lg:text-8xl font-romantic font-bold mb-2 tracking-wide transition-all duration-1000 ease-out ${
            isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-95'
          }`}>
            Dera
          </h1>

          <span
            className={`text-4xl sm:text-5xl mx-3 transition-all duration-1000 ease-out delay-200 ${
              isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-95'
            }`}
            style={{ color: "#000" }}
          >
            &
          </span>

          <h1 className={`text-6xl sm:text-7xl lg:text-8xl font-romantic font-bold mt-2 mb-6 tracking-wide transition-all duration-1000 ease-out delay-300 ${
            isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-95'
          }`}>
            Goziem
          </h1>
        </div>

        <p className={`text-xl sm:text-2xl font-modern font-light mb-8 text-white/90 transition-all duration-1000 ease-out delay-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          We can't wait to celebrate with you!
        </p>

        <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-10 transition-all duration-1000 ease-out delay-700 ${
          isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
        }`}>
          <div className="inline-flex items-center space-x-2 bg-white/15 backdrop-blur-md rounded-full px-6 py-3 hover:bg-white/25 transition-all duration-300">
            <Calendar className="h-5 w-5 text-[gold]" />
            <span className="font-modern font-medium">Dec 27, 2025</span>
          </div>
          <div className="inline-flex items-center space-x-2 bg-white/15 backdrop-blur-md rounded-full px-6 py-3 hover:bg-white/25 transition-all duration-300">
            <MapPin className="h-5 w-5 text-gold" />
            <span className="font-modern font-medium">Owerri, Imo State</span>
          </div>
        </div>

        <div className={`mb-12 transition-all duration-1000 ease-out delay-900 ${
          isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-95'
        }`}>
          <p className="text-lg font-modern mb-4 text-sky">
            {mounted ? `${timeLeft.days} days to go ❤️` : 'Loading...'}
          </p>
          <div className="grid grid-cols-4 gap-3 sm:gap-4 max-w-md mx-auto">
            {mounted ? Object.entries(timeLeft).map(([unit, value], index) => (
              <div
                key={unit}
                className={`bg-white/10 backdrop-blur-md rounded-2xl p-3 sm:p-4 border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-500 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                }`}
                style={{ transitionDelay: `${1100 + index * 100}ms` }}
              >
                <div className="text-2xl sm:text-4xl font-bold font-elegant text-[gold]">
                  {value}
                </div>
                <div className="text-xs sm:text-sm uppercase tracking-wider font-modern opacity-80">
                  {unit}
                </div>
              </div>
            )) : (
              // Placeholder during SSR
              ['days', 'hours', 'minutes', 'seconds'].map((unit, index) => (
                <div
                  key={unit}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-3 sm:p-4 border border-white/20"
                >
                  <div className="text-2xl sm:text-4xl font-bold font-elegant text-[gold]">
                    0
                  </div>
                  <div className="text-xs sm:text-sm uppercase tracking-wider font-modern opacity-80">
                    {unit}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        <div className={`transition-all duration-1000 ease-out delay-1000 ${
          isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-95'
        }`}>
          <button
            className="bg-[#A89957] hover:bg-[#A89957]/90 hover:scale-105 text-white font-medium px-10 py-4 rounded-full shadow-gold text-lg inline-flex items-center justify-center transition-all duration-300 transform"
            onClick={() =>
              document
                .getElementById("details")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <Heart className="mr-2 h-5 w-5" /> View Wedding Details
          </button>
        </div>

        {/* Floating hearts */}
        <div className={`absolute top-32 left-10 animate-bounce transition-all duration-1000 delay-1200 ${
          isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
        }`}>
          <Heart
            className="h-8 w-8 hover:scale-110 transition-transform duration-300"
            style={{ color: "#000" }}
          />
        </div>

        <div className={`absolute top-48 right-16 animate-bounce transition-all duration-1000 delay-1400 ${
          isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
        }`}>
          <Heart
            className="h-10 w-10 hover:scale-110 transition-transform duration-300"
            style={{ color: "#87CEEB" }}
          />
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-8 w-8 text-white/60" />
      </div>
    </section>
  );
};

export default HeroSection;
