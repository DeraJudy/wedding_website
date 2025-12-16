"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Heart, Calendar, MapPin, ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-wedding.jpg";

const WEDDING_DATE_ISO = "2025-12-27T10:00:00+01:00"; // Dec 27, 2025 – 10:00

const HeroSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
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

    update(); // so it doesn't flash zeros

    const timer = setInterval(update, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#87CEEB]"
    >
      {/* Background Image + Overlays */}
      <div className="absolute inset-0">
        {/* Image */}
        <div className="relative w-full h-full">
          <Image
            src={heroImage}
            alt="Beautiful couple portrait"
            priority
            fill
            sizes="100vw"
            style={{ objectFit: "cover" }}
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
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-romantic font-bold mb-2 tracking-wide">
            Dera
          </h1>

          <span
            className="text-4xl sm:text-5xl mx-3"
            style={{ color: "#D4AF37" }} // Gold colour
          >
            &
          </span>

          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-romantic font-bold mt-2 mb-6 tracking-wide">
            Gozie
          </h1>
        </div>

        <p className="text-xl sm:text-2xl font-modern font-light mb-8 text-white/90">
          We can't wait to celebrate with you!
        </p>

        <div className="animate-fade-in flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
          <div className="inline-flex items-center space-x-2 bg-white/15 backdrop-blur-md rounded-full px-6 py-3">
            <Calendar className="h-5 w-5 text-[gold]" />
            <span className="font-modern font-medium">Dec 27, 2025</span>
          </div>
          <div className="inline-flex items-center space-x-2 bg-white/15 backdrop-blur-md rounded-full px-6 py-3">
            <MapPin className="h-5 w-5 text-gold" />
            <span className="font-modern font-medium">Owerri, Imo State</span>
          </div>
        </div>

        <div
          className="animate-fade-in mb-12"
          style={{ animationDelay: "0.5s" }}
        >
          <p className="text-lg font-modern mb-4 text-sky">
            {timeLeft.days} days to go ❤️
          </p>
          <div className="grid grid-cols-4 gap-3 sm:gap-4 max-w-md mx-auto">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div
                key={unit}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-3 sm:p-4 border border-white/20"
              >
                <div className="text-2xl sm:text-4xl font-bold font-elegant text-[gold]">
                  {value}
                </div>
                <div className="text-xs sm:text-sm uppercase tracking-wider font-modern opacity-80">
                  {unit}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className="animate-fade-in"
          style={{ animationDelay: "0.6s" }}
        >
          <button
            className="bg-[skyblue] hover:bg-gold/90 text-foreground font-medium px-10 py-4 rounded-full shadow-gold text-lg inline-flex items-center justify-center"
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
        <div className="absolute top-32 left-10 animate-bounce">
          <Heart
            className="h-8 w-8"
            style={{ color: "#9CAF88" }} // Sage Green
          />
        </div>

        <div
          className="absolute top-48 right-16 animate-bounce"
          style={{ animationDelay: "0.7s" }}
        >
          <Heart
            className="h-10 w-10"
            style={{ color: "#87CEEB" }} // Sky Blue
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
