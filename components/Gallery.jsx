"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Heart, Camera } from "lucide-react";

import dateImg1 from "@/assets/date1.jpeg";
import dateImg2 from "@/assets/date2.jpeg";
import dateImg3 from "@/assets/date3.jpeg";
import dateImg4 from "@/assets/date4.jpeg";
import dateImg5 from "@/assets/date5.jpeg";
import dateImg6 from "@/assets/date6.jpeg";
import dateImg7 from "@/assets/date7.jpeg";
import dateImg8 from "@/assets/date8.jpeg";
import dateImg9 from "@/assets/date9.jpeg";
import dateImg10 from "@/assets/date10.jpeg";
import dateImg11 from "@/assets/date11.jpg";
import dateImg12 from "@/assets/date12.jpg";
import dateImg13 from "@/assets/date13.jpg";
import dateImg14 from "@/assets/date14.jpg";
import dateImg15 from "@/assets/date15.jpg";

const categories = [
  { id: "all", label: "All Photos" },
  { id: "prewedding", label: "Pre-Wedding" },
  { id: "traditional", label: "Traditional" },
  { id: "engagement", label: "Engagement" },
  { id: "portraits", label: "Portraits" },
  { id: "fun", label: "Fun Moments" },
];

const galleryImages = [
  { src: dateImg12, alt: "Pre-wedding beach shoot", category: "prewedding" },
  { src: dateImg2, alt: "Traditional ceremony setup", category: "traditional" },
  { src: dateImg3, alt: "Couple laughing together", category: "fun" },
  { src: dateImg14, alt: "Engagement ring moment", category: "engagement" },
  { src: dateImg6, alt: "Sunset couple portrait", category: "portraits" },
  {
    src: dateImg7,
    alt: "Pre-wedding dinner",
    category: "prewedding",
  },
   { src: dateImg13, alt: "Dancing together at the reception", category: "fun" },
  {
    src: dateImg8,
    alt: "Travel adventure together",
    category: "fun",
  },
  {
    src: dateImg9,
    alt: "Travel adventure together",
    category: "fun",
  },
  {
    src: dateImg10,
    alt: "Travel adventure together",
    category: "fun",
  },
   { src: dateImg15, alt: "Dancing together at the reception", category: "fun" },
  {
    src: dateImg4,
    alt: "Romantic classic portrait",
    category: "portraits",
  },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const filteredImages =
    activeCategory === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  // SAFE derived value (prevents undefined crash)
  const selectedImage =
    selectedImageIndex !== null ? filteredImages[selectedImageIndex] : null;

  const openModal = (index) => {
    setSelectedImageIndex(index);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedImageIndex(null);
    document.body.style.overflow = "auto";
  };

  const navigateImage = (direction) => {
    if (!selectedImage) return;

    const lastIndex = filteredImages.length - 1;

    setSelectedImageIndex((prev) =>
      direction === "prev"
        ? prev === 0
          ? lastIndex
          : prev - 1
        : prev === lastIndex
        ? 0
        : prev + 1
    );
  };

  return (
    <section
      id="gallery"
      className="py-24 bg-linear-to-b from-white to-[#F3F7F2]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[gold] uppercase tracking-widest text-sm mb-4">
            Captured Moments
          </p>
          <h2 className="font-elegant text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-6">
            Our Gallery
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl px-5 mx-auto font-modern">
            A collection of our favorite memories together – from quiet moments to joyful celebrations.
          </p>
        </div>

        {/* Categories */}
        {/* <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => {
                setSelectedImageIndex(null);
                setActiveCategory(category.id);
              }}
              className={`px-5 py-2 rounded-full text-sm transition ${
                activeCategory === category.id
                  ? "bg-gold text-black shadow-romantic"
                  : "bg-[#9CAF88] text-white hover:opacity-90"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div> */}

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              onClick={() => openModal(index)}
              className="group cursor-pointer overflow-hidden rounded-2xl bg-white shadow-soft hover:shadow-romantic transition"
            >
              <div className="relative aspect-3/4">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover rounded-2xl"
                />

                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-end justify-center pb-5">
                  <div className="flex items-center gap-2 text-white">
                    <Camera className="h-5 w-5" />
                    <span className="text-sm">View Photo</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl w-full">

              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-white p-2 hover:bg-white/20 rounded-full"
              >
                <X />
              </button>

              <button
                onClick={() => navigateImage("prev")}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white p-2 hover:bg-white/20 rounded-full"
              >
                <ChevronLeft size={32} />
              </button>

              <button
                onClick={() => navigateImage("next")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white p-2 hover:bg-white/20 rounded-full"
              >
                <ChevronRight size={32} />
              </button>

              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                width={1200}
                height={1600}
                className="max-h-[85vh] mx-auto object-contain rounded-xl"
              />

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/90 px-6 py-2 rounded-full text-sm">
                {selectedImageIndex + 1} of {filteredImages.length}
              </div>
            </div>
          </div>
        )}

        {/* Hashtag */}
        <div className="text-center mt-16">
          <div className="max-w-2xl mx-auto bg-[#9dac8e] rounded-3xl shadow-soft p-10">
            <Heart className="h-8 w-8 text-[gold] mx-auto mb-4" fill="currentColor" />
            <h4 className="text-2xl font-semibold mb-4">
              Share Your Moments With Us
            </h4>
            <p className="text-gray-600 mb-6">
              Tag your photos from the day — we'd love to see them!
            </p>
            <span className="inline-block bg-[gold] px-8 py-3 rounded-full font-medium">
              #alienJudy25
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
