"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { Heart, Calendar, Sparkles, Diamond, Camera } from "lucide-react";

import dateImg1 from "@/assets/date1.jpeg";
import dateImg2 from "@/assets/date2.jpeg";
import dateImg3 from "@/assets/date3.jpeg";
import dateImg4 from "@/assets/date4.jpeg";
import dateImg5 from "@/assets/date5.jpeg";
import dateImg6 from "@/assets/date6.jpeg";
import dateImg16 from "@/assets/date16.jpg";

const OurStory = () => {
  const [visibleItems, setVisibleItems] = useState(new Set());
  const sectionRef = useRef(null);
  const itemRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = itemRefs.current.indexOf(entry.target);
            if (index !== -1) {
              setVisibleItems(prev => new Set([...prev, index]));
            }
          }
        });
      },
      { threshold: 0.3, rootMargin: '50px' }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const storyMilestones = [
    {
      icon: Heart,
      date: "June 2023",
      title: "A Seed Planted 🌱",
      description:
        "Every love story starts somewhere — ours began with a conversation. Chidera was a young software developer, fresh out of Imo State University, waiting to begin her NYSC journey. Through a long-standing family connection, her name came up in a casual conversation with my dad. I didn’t know her yet, but I liked what I heard. Curious, I reached out to my younger brother, who had been mentoring her, only to be told, “If you want to know her, go and find out yourself.” So I did. On June 3rd, 2023, I reached out — nervous but hopeful. What began as professional mentorship slowly turned into genuine friendship.",
    },
    {
      icon: Calendar,
      date: "August – September 2023",
      title: "From Mentors to Something More 💻❤️",
      description:
        "What started as guidance soon became connection. Working closely together allowed us to see beyond code and projects. We laughed, learned, and grew — not just as professionals, but as people. When I finally expressed my feelings, Chidera set a boundary: she couldn’t date someone she hadn’t met in person. Distance stood between us, but we agreed to let the first meeting decide.",
    },
    {
      icon: Sparkles,
      date: "October 2023",
      title: "October 13th — Love Chose Us 🎬🏖️",
      description:
        "On October 12th, 2023, we met for the first time in Lagos. Our first date was at the movies, but the film didn’t stand a chance against her smile. The next day at Badagry Beach, I asked the question — and she said yes. That moment marked the official beginning of us.",
    },
    {
      icon: Diamond,
      date: "2024 – 2025",
      title: "Built to Last — From Yes to Forever 💍",
      description:
        "When Chidera began her NYSC, we ensured distance would never test us again. Posted to Ogun State, we built a life rooted in faith, friendship, and shared dreams. On May 28th, 2025, we sealed our union traditionally. Now, as we prepare for our white wedding, we look back knowing this journey was always meant to lead here.",
    },
  ];

  const photos = [
    "https://res.cloudinary.com/diae7jcps/image/upload/v1766076737/WhatsApp_Image_2025-12-16_at_02.32.23_1_splmih.jpg",
    "https://res.cloudinary.com/diae7jcps/image/upload/v1766076731/date1_uq7ycb.jpg",
    "https://res.cloudinary.com/diae7jcps/image/upload/v1766076732/date4_nphdqm.jpg",
    "https://res.cloudinary.com/diae7jcps/image/upload/v1766076741/date6_kztfxb.jpg",
    // dateImg16,
  ];

  return (
    <section ref={sectionRef} id="story" className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#9CAF88] rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#A89957] rounded-full blur-3xl" />
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div 
          ref={(el) => itemRefs.current[0] = el}
          className={`text-center mb-20 transition-all duration-1000 ease-out ${
            visibleItems.has(0) ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <p className="text-[gold] uppercase tracking-widest text-sm mb-4 font-medium">
            Our Journey
          </p>
          <h2 className="text-black text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text">
            Our Love Story
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed text-lg">
            Every love story is beautiful, but ours is our favorite.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mb-20">
          {/* Animated Timeline Line */}
          <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-gray-300 overflow-hidden">
            <div 
              className="w-full bg-gradient-to-b from-[#9CAF88] to-[#A89957] transition-all duration-2000 ease-out"
              style={{ 
                height: visibleItems.size > 1 ? `${(visibleItems.size - 1) * 25}%` : '0%'
              }}
            />
          </div>

          <div className="space-y-16">
            {storyMilestones.map((milestone, index) => {
              const itemIndex = index + 1;
              const isVisible = visibleItems.has(itemIndex);
              const isEven = index % 2 === 0;
              
              return (
                <div
                  key={index}
                  ref={(el) => itemRefs.current[itemIndex] = el}
                  className={`flex items-start transition-all duration-1000 ease-out ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  } ${
                    isVisible 
                      ? 'translate-y-0 opacity-100' 
                      : `translate-y-12 opacity-0 ${isEven ? 'translate-x-8' : '-translate-x-8'}`
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  {/* Timeline Dot */}
                  <div
                    className={`absolute left-2 md:left-1/2 w-6 h-6 rounded-full border-4 border-white shadow-lg transition-all duration-500 z-10 ${
                      isVisible ? 'scale-100 bg-[#9CAF88]' : 'scale-75 bg-gray-300'
                    }`}
                    style={{ 
                      transform: 'translateX(-50%)',
                      transitionDelay: `${index * 200 + 300}ms`
                    }}
                  >
                    <div className={`absolute inset-1 rounded-full transition-all duration-500 ${
                      isVisible ? 'bg-white scale-100' : 'bg-transparent scale-0'
                    }`} />
                  </div>

                  <div
                    className={`w-full md:w-5/12 ml-12 md:ml-0 ${
                      isEven
                        ? "md:mr-auto md:pr-12"
                        : "md:ml-auto md:pl-12"
                    }`}
                  >
                    <div className="bg-white border border-gray-200 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 group overflow-hidden">
                      <div className="p-6 sm:p-8 relative">
                        {/* Gradient Background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        
                        <div className="relative z-10">
                          <div className="flex items-center mb-6">
                            <div className={`p-4 rounded-2xl mr-4 transition-all duration-500 ${
                              isVisible 
                                ? 'bg-[#9CAF88]/10 border-2 border-[#9CAF88]/20 scale-100' 
                                : 'bg-gray-100 border-2 border-gray-200 scale-90'
                            }`}>
                              <milestone.icon className={`h-7 w-7 transition-colors duration-500 ${
                                isVisible ? 'text-[#9CAF88]' : 'text-gray-400'
                              }`} />
                            </div>
                            <div>
                              <span className="text-sm text-[#A89957] font-bold uppercase tracking-wider">
                                {milestone.date}
                              </span>
                              <h3 className="text-2xl font-bold text-gray-800 mt-1">
                                {milestone.title}
                              </h3>
                            </div>
                          </div>
                          <p className="text-gray-600 leading-relaxed text-base">
                            {milestone.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Modern Memory Showcase */}
        <div 
          ref={(el) => itemRefs.current[5] = el}
          className={`mb-20 transition-all duration-1000 ease-out ${
            visibleItems.has(5) ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          {/* Modern Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-4 mb-6">
              <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-[#A89957]" />
              <div className="relative">
                <div className="absolute inset-0 bg-[#A89957]/20 blur-xl rounded-full" />
                <div className="relative p-4 bg-white rounded-2xl shadow-lg border border-gray-100">
                  <Camera className="h-7 w-7 text-[#A89957]" />
                </div>
              </div>
              <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-[#A89957]" />
            </div>
            
            <h3 className="text-4xl sm:text-5xl font-black text-gray-800 mb-4">
              <span className="bg-gradient-to-r from-[#A89957] to-[#9CAF88] bg-clip-text text-transparent">
                Memory
              </span>
              <span className="text-gray-800"> Reel</span>
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Swipe through the moments that shaped our love story
            </p>
          </div>

          {/* Interactive Photo Cards */}
          <div className="relative">
            {/* Gradient Fade Edges */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
            
            <div className="flex overflow-x-auto gap-8 pb-8 snap-x snap-mandatory scrollbar-hide px-4">
              {photos.map((photo, index) => {
                const isCenter = index === 2; // Highlight center image
                return (
                  <div 
                    key={index} 
                    className={`shrink-0 snap-center transition-all duration-700 ease-out group ${
                      visibleItems.has(5) 
                        ? 'translate-y-0 opacity-100 scale-100' 
                        : 'translate-y-12 opacity-0 scale-90'
                    }`}
                    style={{ transitionDelay: `${index * 120}ms` }}
                  >
                    <div className={`relative overflow-hidden rounded-3xl transition-all duration-500 ${
                      isCenter 
                        ? 'w-72 h-80 shadow-2xl ring-4 ring-[#A89957]/30' 
                        : 'w-64 h-72 shadow-xl hover:shadow-2xl'
                    }`}>
                      {/* Image */}
                      <Image
                        src={photo}
                        alt={`Memory ${index + 1}`}
                        fill
                        className="object-cover transition-all duration-700 group-hover:scale-110"
                      />
                      
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                      
                      {/* Content */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30">
                              <Heart className="h-5 w-5 text-white" fill="currentColor" />
                            </div>
                            <div>
                              <p className="text-white font-medium text-sm">Memory #{index + 1}</p>
                              <p className="text-white/80 text-xs">Our Journey</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Floating Badge */}
                      {isCenter && (
                        <div className="absolute top-4 left-4">
                          <div className="px-3 py-1 bg-[#A89957] rounded-full">
                            <span className="text-white text-xs font-bold">FEATURED</span>
                          </div>
                        </div>
                      )}
                      
                      {/* Corner Decoration */}
                      <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-75 group-hover:scale-100">
                        <Camera className="h-4 w-4 text-white" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            
            {/* Navigation Hint */}
            <div className="flex justify-center mt-8">
              <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full">
                <div className="flex gap-1">
                  {photos.map((_, index) => (
                    <div key={index} className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === 2 ? 'bg-[#A89957] w-6' : 'bg-gray-300'
                    }`} />
                  ))}
                </div>
                <span className="text-gray-500 text-xs ml-2">Swipe to explore</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quote */}
        <div 
          ref={(el) => itemRefs.current[6] = el}
          className={`text-center transition-all duration-1000 ease-out ${
            visibleItems.has(6) ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-12 opacity-0 scale-95'
          }`}
        >
          <div className="max-w-4xl mx-auto rounded-3xl bg-gradient-to-br from-[#9CAF88] to-[#A89957] shadow-2xl p-12 relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-4 left-4 w-20 h-20 bg-white/10 rounded-full blur-xl" />
            <div className="absolute bottom-4 right-4 w-32 h-32 bg-white/5 rounded-full blur-2xl" />
            
            <div className="relative z-10">
              <div className="mb-8">
                <Heart
                  className="h-12 w-12 mx-auto text-white animate-pulse"
                  fill="currentColor"
                />
              </div>
              <blockquote className="text-2xl sm:text-3xl lg:text-4xl italic text-white mb-8 font-light leading-relaxed">
                "Being deeply loved by someone gives you strength, while loving
                someone deeply gives you courage."
              </blockquote>
              <cite className="text-white/90 text-lg font-medium">— Lao Tzu</cite>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default OurStory;
