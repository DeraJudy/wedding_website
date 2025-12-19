"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Heart, Camera } from "lucide-react";
import dateImg13 from "@/assets/date13.jpg";
import dateImg16 from "@/assets/date15.jpg";


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
    src: "https://res.cloudinary.com/diae7jcps/image/upload/v1766076735/date7_h0rc4t.jpg", 
    alt: "Pre-wedding beach shoot", 
    category: "prewedding" },
  { 
    src: "https://res.cloudinary.com/diae7jcps/image/upload/v1766076735/date8_grsqco.jpg", 
    alt: "Traditional ceremony setup", 
    category: "traditional" 
  },
  { src: dateImg16, alt: "Dancing together at the reception", category: "fun" },
  { 
    src: "https://res.cloudinary.com/diae7jcps/image/upload/v1766076741/date9_bqwhfg.jpg", 
    alt: "Couple laughing together", 
    category: "fun" 
  },
  { 
    src: "https://res.cloudinary.com/diae7jcps/image/upload/v1766076732/date3_tzbw1q.jpg", 
    alt: "Engagement ring moment", 
    category: "engagement" 
  },
  { 
    src: "https://res.cloudinary.com/diae7jcps/image/upload/v1766076739/date12_m7auoe.jpg", 
    alt: "Sunset couple portrait", 
    category: "portraits" 
  },
  {
    src: "https://res.cloudinary.com/diae7jcps/image/upload/v1766076731/date1_uq7ycb.jpg",
    alt: "Pre-wedding dinner",
    category: "prewedding",
  },
   { src: dateImg13, alt: "Dancing together at the reception", category: "fun" },
  // {
  //   src: dateImg8,
  //   alt: "Travel adventure together",
  //   category: "fun",
  // },
  // {
  //   src: dateImg9,
  //   alt: "Travel adventure together",
  //   category: "fun",
  // },
  // {
  //   src: dateImg10,
  //   alt: "Travel adventure together",
  //   category: "fun",
  // },
  //  { src: dateImg15, alt: "Dancing together at the reception", category: "fun" },
  // {
  //   src: dateImg4,
  //   alt: "Romantic classic portrait",
  //   category: "portraits",
  // },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [visibleItems, setVisibleItems] = useState(new Set());
  const sectionRef = useRef(null);
  const itemRefs = useRef([]);

  const filteredImages =
    activeCategory === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

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
      { threshold: 0.2, rootMargin: '50px' }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [filteredImages.length]);

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
      ref={sectionRef}
      id="gallery"
      className="py-24 bg-gradient-to-b from-white via-gray-50 to-[#F3F7F2] relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-32 left-20 w-64 h-64 bg-[#9CAF88] rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-32 right-20 w-80 h-80 bg-[#A89957] rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Modern Header */}
        <div 
          ref={(el) => itemRefs.current[0] = el}
          className={`relative mb-20 transition-all duration-1200 ease-out ${
            visibleItems.has(0) ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}
        >
          {/* Floating Elements */}
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
            <div className="flex items-center gap-4">
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-[#A89957]" />
              <div className="p-4 rounded-2xl bg-white shadow-xl border border-gray-100">
                <Camera className="h-6 w-6 text-[#A89957]" />
              </div>
              <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-[#A89957]" />
            </div>
          </div>
          
          <div className="text-center pt-16">
            <div className="inline-block mb-6">
              <span className="px-6 py-2 bg-gradient-to-r from-[#A89957]/10 to-[#9CAF88]/10 rounded-full text-[#A89957] text-sm font-bold tracking-wider border border-[#A89957]/20">
                VISUAL JOURNEY
              </span>
            </div>
            
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-8 relative">
              <span className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent">
                Captured
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#A89957] to-[#9CAF88] bg-clip-text text-transparent relative">
                Moments
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#A89957] to-[#9CAF88] rounded-full opacity-30" />
              </span>
            </h2>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
              Every frame tells our story • Every moment captures our love
            </p>
          </div>
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

        {/* Modern Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {filteredImages.map((image, index) => {
            const itemIndex = index + 1;
            const isVisible = visibleItems.has(itemIndex);
            const delay = index * 80;
            const isLarge = index % 7 === 0; // Every 7th image is large
            const isMedium = index % 5 === 0 && !isLarge; // Every 5th image is medium
            
            return (
              <div
                key={index}
                ref={(el) => itemRefs.current[itemIndex] = el}
                onClick={() => openModal(index)}
                className={`group cursor-pointer break-inside-avoid mb-6 transition-all duration-1000 ease-out ${
                  isVisible 
                    ? 'translate-y-0 opacity-100 scale-100' 
                    : 'translate-y-16 opacity-0 scale-90'
                } ${
                  isLarge ? 'sm:col-span-2' : ''
                }`}
                style={{ transitionDelay: `${delay}ms` }}
              >
                <div className="relative overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-700 group-hover:-translate-y-2">
                  {/* Dynamic Height Images */}
                  <div className={`relative overflow-hidden ${
                    isLarge ? 'aspect-[4/5]' : isMedium ? 'aspect-[3/4]' : 'aspect-[3/4]'
                  }`}>
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 25vw"
                      className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                    />

                    {/* Modern Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                    
                    {/* Floating Action */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                      <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30">
                        <Heart className="h-4 w-4 text-white" fill="currentColor" />
                      </div>
                    </div>

                    {/* Bottom Info */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
                            <Camera className="h-4 w-4 text-white" />
                          </div>
                          <span className="text-white text-sm font-medium">View</span>
                        </div>
                        <div className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full">
                          <span className="text-white text-xs font-medium">{index + 1}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Decorative Border */}
                  <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-[#A89957]/30 transition-all duration-500" />
                </div>
              </div>
            );
          })}
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

        {/* Modern CTA Section */}
        <div 
          ref={(el) => itemRefs.current[filteredImages.length + 1] = el}
          className={`mt-24 transition-all duration-1200 ease-out ${
            visibleItems.has(filteredImages.length + 1) ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
          }`}
        >
          <div className="relative">
            {/* Floating Cards */}
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Share Card */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#A89957] to-[#9CAF88] rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
                <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 hover:shadow-3xl transition-all duration-500 hover:-translate-y-2">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-gradient-to-br from-[#A89957] to-[#9CAF88] rounded-2xl">
                      <Camera className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-800">Share Your Moments</h4>
                      <p className="text-gray-500 text-sm">Tag us in your photos</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Capture the magic and share it with us using our wedding hashtag.
                  </p>
                  <div className="inline-flex items-center gap-3 bg-gray-50 rounded-2xl px-6 py-3 border border-gray-200">
                    <span className="text-[#A89957] font-bold text-lg">#alienJudy25</span>
                  </div>
                </div>
              </div>

              {/* Memory Card */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#9CAF88] to-[#A89957] rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
                <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 hover:shadow-3xl transition-all duration-500 hover:-translate-y-2">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-gradient-to-br from-[#9CAF88] to-[#A89957] rounded-2xl">
                      <Heart className="h-6 w-6 text-white" fill="currentColor" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-800">Create Memories</h4>
                      <p className="text-gray-500 text-sm">Every moment matters</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    These photos represent the beginning of our forever story together.
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-2">
                      {[1,2,3].map((i) => (
                        <div key={i} className="w-8 h-8 bg-gradient-to-br from-[#A89957] to-[#9CAF88] rounded-full border-2 border-white" />
                      ))}
                    </div>
                    <span className="text-gray-500 text-sm ml-2">{filteredImages.length} memories captured</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
