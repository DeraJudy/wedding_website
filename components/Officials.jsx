"use client";
import { useEffect, useRef, useState } from 'react';
import { Users } from 'lucide-react';

const Officials = () => {
  const [visibleCards, setVisibleCards] = useState(new Set());
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setVisibleCards(prev => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.2, rootMargin: '50px' }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const officials = [
    {
      name: "Rev. Fr. Dr. Wilfred Nwachukwu",
      office: "Parish Priest",
      image: "https://res.cloudinary.com/dw7khzaml/image/upload/v1766183415/Screenshot_from_2025-12-19_23-29-19_mzmfpr.png"
    },
    {
      name: "Rev. Fr. Philip Oguariri",
      office: "Associate Parish Priest",
      image: null
    },
    {
      name: "Mr & Mrs Iwu",
      office: "Sponsors",
      image: "https://res.cloudinary.com/dw7khzaml/image/upload/v1766182143/Screenshot_from_2025-12-19_22-43-15_gee5c9.png"
    },
    {
      name: "Mr. Nwosu Cajetan Anetochi",
      office: "Master of Ceremony",
      image: "https://res.cloudinary.com/dw7khzaml/image/upload/v1766182049/Screenshot_from_2025-12-19_22-44-04_psiiv6.png"
    },
    {
      name: "Sarah Williams",
      office: "Chief Bridesmaid",
      image: "https://res.cloudinary.com/diae7jcps/image/upload/v1766076736/Udochi_keb8id.jpg"
    },
    {
      name: "Matthew Ekeanyanwu",
      office: "Best Man",
      image: "https://res.cloudinary.com/diae7jcps/image/upload/v1766076739/Ebuka_qagz6t.jpg"
    },
    {
      name: "Idowu Samuel",
      office: "Make Up/Hair Stylist",
      image: "https://res.cloudinary.com/diae7jcps/image/upload/v1766076734/idowu_izw6we.jpg"
    }
  ];

  return (
    <section id="officials" className="py-24 bg-gradient-to-b from-[#87CEEB] to-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-[#D4AF37] uppercase tracking-widest text-sm mb-4">Our Ceremony</p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl text-black font-bold mb-6">
            Wedding Officials
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto font-modern">
            The wonderful people who will guide us through our sacred ceremony.
          </p>
        </div>

        {/* Officials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
          {officials.map((official, index) => (
            <div
              key={index}
              ref={el => cardRefs.current[index] = el}
              data-index={index}
              className={`transform transition-all duration-1000 ease-out ${
                visibleCards.has(index) 
                  ? 'translate-y-0 opacity-100 scale-100' 
                  : 'translate-y-20 opacity-0 scale-95'
              } bg-white rounded-xl p-6 shadow-md hover:shadow-lg hover:-translate-y-1`}
              style={{ 
                transitionDelay: visibleCards.has(index) ? `${index * 150}ms` : '0ms'
              }}
            >
              <div className="text-center">
                <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-4 shadow-sm bg-gray-100">
                  {official.image ? (
                    <img
                      src={official.image}
                      alt={official.name}
                      className="w-full h-full object-cover"
                    />
                  ) : null}
                </div>
                <h3 className="text-xl font-semibold text-black mb-2">
                  {official.name}
                </h3>
                <p className="text-[#4682B4] text-sm font-medium">
                  {official.office}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Officials;