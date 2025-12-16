"use client";

import { useState } from "react";
import { X, ChevronLeft, ChevronRight, Heart, Camera } from "lucide-react";

const categories = [
  { id: "all", label: "All Photos" },
  { id: "prewedding", label: "Pre-Wedding" },
  { id: "traditional", label: "Traditional" },
  { id: "engagement", label: "Engagement" },
  { id: "portraits", label: "Portraits" },
  { id: "fun", label: "Fun Moments" },
];

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=900&h=1200&fit=crop",
    alt: "Pre-wedding beach shoot",
    category: "prewedding",
  },
  {
    src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=900&h=600&fit=crop",
    alt: "Traditional ceremony setup",
    category: "traditional",
  },
  {
    src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=900&h=900&fit=crop",
    alt: "Couple laughing together",
    category: "fun",
  },
  {
    src: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=900&h=900&fit=crop",
    alt: "Engagement ring moment",
    category: "engagement",
  },
  {
    src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=900&h=600&fit=crop",
    alt: "Dancing together at the reception",
    category: "fun",
  },
  {
    src: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=900&h=900&fit=crop",
    alt: "Sunset couple portrait",
    category: "portraits",
  },
  {
    src: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=900&h=1200&fit=crop",
    alt: "Pre-wedding dinner",
    category: "prewedding",
  },
  {
    src: "https://images.unsplash.com/photo-1529636798458-92182e662485?w=900&h=600&fit=crop",
    alt: "Travel adventure together",
    category: "fun",
  },
  {
    src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=900&h=600&fit=crop",
    alt: "Romantic classic portrait",
    category: "portraits",
  },
];

const Gallery = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredImages =
    activeCategory === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  const openModal = (index) => {
    setSelectedImageIndex(index);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedImageIndex(null);
    document.body.style.overflow = "auto";
  };

  const navigateImage = (direction) => {
    if (selectedImageIndex === null) return;

    const lastIndex = filteredImages.length - 1;
    const newIndex =
      direction === "prev"
        ? (selectedImageIndex === 0 ? lastIndex : selectedImageIndex - 1)
        : (selectedImageIndex === lastIndex ? 0 : selectedImageIndex + 1);

    setSelectedImageIndex(newIndex);
  };

  return (
    <section
      id="gallery"
      className="py-24 bg-linear-to-b from-white to-[#F3F7F2]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <p className="text-[gold] uppercase tracking-widest text-sm mb-4">
            Captured Moments
          </p>
          <h2 className="font-elegant text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-6">
            Our Gallery
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-modern">
            A collection of our favorite memories together – from quiet, intimate moments to joyful celebrations.
          </p>
        </div>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => {
                setActiveCategory(category.id);
                setSelectedImageIndex(null);
              }}
              className={`px-5 py-2 rounded-full font-modern text-sm transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-gold text-black shadow-romantic"
                  : "bg-[#9CAF88] text-white hover:opacity-90"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className="group cursor-pointer overflow-hidden rounded-2xl shadow-soft hover:shadow-romantic transition-all duration-300 hover:-translate-y-2 bg-white"
              style={{ animationDelay: `${0.25 + index * 0.08}s` }}
              onClick={() => openModal(index)}
            >
              <div className="relative">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 
                transition-opacity duration-300 flex items-end justify-center pb-5">
                  <div className="flex items-center gap-2 text-white">
                    <Camera className="h-5 w-5" />
                    <span className="font-modern text-sm">View Photo</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImageIndex !== null && filteredImages[selectedImageIndex] && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">

              {/* Close */}
              <button
                className="absolute top-4 right-4 text-white hover:bg-white/20 rounded-full p-2"
                onClick={closeModal}
              >
                <X className="h-6 w-6" />
              </button>

              {/* Prev */}
              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 rounded-full p-2"
                onClick={() => navigateImage("prev")}
              >
                <ChevronLeft className="h-8 w-8" />
              </button>

              {/* Next */}
              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 rounded-full p-2"
                onClick={() => navigateImage("next")}
              >
                <ChevronRight className="h-8 w-8" />
              </button>

              <img
                src={filteredImages[selectedImageIndex].src}
                alt=""
                className="max-w-full max-h-[85vh] object-contain rounded-xl"
              />

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/90 text-black px-6 py-2 rounded-full font-modern text-sm">
                {selectedImageIndex + 1} of {filteredImages.length}
              </div>
            </div>
          </div>
        )}

        {/* Hashtag Section */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="max-w-2xl mx-auto bg-[#9dac8e] border border-gold/40 rounded-3xl shadow-soft">
            <div className="p-10">
              <Heart className="h-8 w-8 text-[gold] mx-auto mb-4" fill="currentColor" />
              <h4 className=" text-2xl font-semibold text-black mb-4">
                Share Your Moments With Us
              </h4>
              <p className="text-gray-600 font-modern mb-6">
                Tag your photos from the day — we'd love to see them!
              </p>

              <button className="inline-flex items-center gap-2 rounded-full 
              bg-[gold] px-8 py-3 text-gray-800 font-medium transition 
              hover:bg-[gold]/90">
                #alienJudy
              </button>


            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Gallery;
