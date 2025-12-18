"use client";

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
    dateImg5,
    dateImg1,
    dateImg4,
    dateImg6,
    dateImg16,
  ];

  return (
    <section id="story" className="py-24 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-[gold] uppercase tracking-widest text-sm mb-4">
            Our Journey
          </p>
          <h2 className="text-black text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Our Love Story
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Every love story is beautiful, but ours is our favorite.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mb-20">
          <div
            className="absolute left-4 md:left-1/2 h-full w-0.5"
            style={{ backgroundColor: "#9CAF88" }}
          />

          <div className="space-y-16">
            {storyMilestones.map((milestone, index) => (
              <div
                key={index}
                className={`flex items-start ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div
                  className="absolute left-2 md:left-1/2 w-5 h-5 rounded-full border-4 border-white"
                  style={{ backgroundColor: "#9CAF88" }}
                />

                <div
                  className={`w-full md:w-5/12 ml-12 md:ml-0 ${
                    index % 2 === 0
                      ? "md:mr-auto md:pr-12"
                      : "md:ml-auto md:pl-12"
                  }`}
                >
                  <div className="bg-black text-white rounded-2xl shadow-soft">
                    <div className="p-6 sm:p-8">
                      <div className="flex items-center mb-4">
                        <div className="p-3 rounded-xl border border-gold/40 mr-4">
                          <milestone.icon className="h-6 w-6 text-[#9CAF88]" />
                        </div>
                        <div>
                          <span className="text-sm text-[gold] font-semibold">
                            {milestone.date}
                          </span>
                          <h3 className="text-2xl font-semibold">
                            {milestone.title}
                          </h3>
                        </div>
                      </div>
                      <p className="text-gray-300 leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Photo Timeline */}
        <div className="mb-16">
          <div className="flex items-center justify-center gap-2 mb-8">
            <Camera className="h-5 w-5 text-[gold]" />
            <h3 className="text-2xl font-semibold text-gray-600">Our Memories</h3>
          </div>

          <div className="flex overflow-x-auto gap-4 pb-4 snap-x snap-mandatory">
            {photos.map((photo, index) => (
              <div key={index} className="shrink-0 snap-center">
                <Image
                  src={photo}
                  alt={`Our memory ${index + 1}`}
                  width={224}
                  height={224}
                  className="w-48 h-48 sm:w-56 sm:h-56 object-cover rounded-2xl shadow-soft hover:shadow-romantic transition"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Quote */}
        <div className="text-center">
          <div className="max-w-3xl mx-auto rounded-3xl bg-[#9CAF88] shadow-soft p-10">
            <Heart
              className="h-10 w-10 mx-auto mb-6 text-white"
              fill="currentColor"
            />
            <blockquote className="text-2xl sm:text-3xl italic text-white mb-6">
              "Being deeply loved by someone gives you strength, while loving
              someone deeply gives you courage."
            </blockquote>
            <cite className="text-white/80">— Lao Tzu</cite>
          </div>
        </div>

      </div>
    </section>
  );
};

export default OurStory;
