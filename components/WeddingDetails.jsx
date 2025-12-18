"use client"
import { useEffect, useState, useRef } from 'react';
import {
  Calendar,
  Clock,
  MapPin,
  Shirt,
  Camera,
  Music,
  Utensils,
  Church,
  Building2,
  ExternalLink,
  Navigation,
  Heart
} from 'lucide-react';

const WeddingDetails = () => {
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
      { threshold: 0.2, rootMargin: '50px' }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const schedule = [
    {
      time: "10:00 AM",
      event: "Church Ceremony",
      icon: Church,
      description: "Exchange of vows at Saint Mary's Parish"
    },
    {
      time: "12:30 PM",
      event: "Photo Session",
      icon: Camera,
      description: "Group photos with family and friends"
    },
    {
      time: "2:00 PM",
      event: "Reception Begins",
      icon: Music,
      description: "Guest arrival and cocktails at Shadiv Hotel"
    },
    {
      time: "3:00 PM",
      event: "Traditional Ceremony",
      icon: Building2,
      description: "Traditional rites and cultural celebration"
    },
    {
      time: "5:00 PM",
      event: "Dinner & Dancing",
      icon: Utensils,
      description: "Dinner service and party begins"
    }
  ];

  const colors = [
    { name: "Sage Green", color: "#9CAF88" },
    { name: "Sky Blue", color: "#87CEEB" },
    { name: "Gold", color: "#D4AF37" }
  ];

  const meetingLink = "https://meet.google.com/kcf-euub-pnm";

  const handleClick = () => {
    const today = new Date();
    const eventDate = new Date("2025-12-27T10:00:00"); // Church time

    const isSameDay =
      today.getFullYear() === eventDate.getFullYear() &&
      today.getMonth() === eventDate.getMonth() &&
      today.getDate() === eventDate.getDate();

    if (isSameDay) {
      // Open Google Meet on the wedding day
      window.open(meetingLink, "_blank");
    } else {
      // Create Google Calendar event
      const start = "20251227T090000Z";
      const end = "20251227T160000Z";

      const calendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE
        &text=Wedding+of+Dera+and+Gozie
        &details=Join+us+to+celebrate+our+wedding.+Google+Meet:+${encodeURIComponent(meetingLink)}
        &location=Google+Meet
        &dates=${start}/${end}`.replace(/\s/g, "");

      window.open(calendarUrl, "_blank");
    }
  };

  return (
    <section ref={sectionRef} id="details" className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#9CAF88] rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#A89957] rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Modern Header */}
        <div 
          ref={(el) => itemRefs.current[0] = el}
          className={`text-center mb-20 transition-all duration-1000 ease-out ${
            visibleItems.has(0) ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}
        >
          <div className="inline-flex items-center gap-4 mb-8">
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-[#A89957]" />
            <div className="relative">
              <div className="absolute inset-0 bg-[#A89957]/20 blur-xl rounded-full" />
              <div className="relative p-4 bg-white rounded-2xl shadow-lg border border-gray-100">
                <Calendar className="h-8 w-8 text-[#A89957]" />
              </div>
            </div>
            <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-[#A89957]" />
          </div>
          
          <div className="mb-6">
            <span className="px-6 py-2 bg-gradient-to-r from-[#A89957]/10 to-[#9CAF88]/10 rounded-full text-[#A89957] text-sm font-bold tracking-wider border border-[#A89957]/20">
              SAVE THE DATE
            </span>
          </div>
          
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-8">
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Wedding
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#A89957] to-[#9CAF88] bg-clip-text text-transparent relative">
              Details
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#A89957] to-[#9CAF88] rounded-full opacity-30" />
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            Everything you need to know about our special day • Mark your calendars and celebrate with us
          </p>
        </div>

        {/* Date Card */}
        {/* <div className="mb-12 shadow-elegant bg-[#F3F7F2] rounded-2xl animate-fade-in">
          <div className="p-8 sm:p-12 text-center">
            <Calendar className="h-12 w-12 text-[gold] mx-auto mb-6" />
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-700 mb-4">
              Saturday, June 14th, 2025
            </h3>
            <p className="text-xl text-gray-500 font-modern">
              Church Ceremony: 10:00 AM | Reception: 2:00 PM
            </p>
          </div>
        </div> */}

        {/* Hero Date Card */}
        <div 
          ref={(el) => itemRefs.current[1] = el}
          onClick={handleClick}
          className={`mb-20 cursor-pointer group transition-all duration-1000 ease-out ${
            visibleItems.has(1) ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-12 opacity-0 scale-95'
          }`}
        >
          <div className="relative max-w-4xl mx-auto">
            {/* Floating Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#A89957] to-[#9CAF88] rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
            
            <div className="relative bg-white rounded-3xl p-12 shadow-2xl border border-gray-100 group-hover:shadow-3xl transition-all duration-500 group-hover:-translate-y-2">
              <div className="text-center">
                <div className="mb-8">
                  <div className="inline-flex items-center gap-4 mb-6">
                    <div className="p-4 bg-gradient-to-br from-[#A89957] to-[#9CAF88] rounded-2xl">
                      <Calendar className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-left">
                      <p className="text-[#A89957] font-bold text-sm uppercase tracking-wider">Wedding Day</p>
                      <p className="text-gray-500 text-sm">Mark your calendar</p>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-4xl sm:text-5xl font-black text-gray-800 mb-6">
                  Saturday, December 27th, 2025
                </h3>
                
                <div className="grid sm:grid-cols-2 gap-6 mb-8">
                  <div className="flex items-center justify-center gap-3 bg-gray-50 rounded-2xl p-4">
                    <Church className="h-5 w-5 text-[#9CAF88]" />
                    <span className="font-medium text-gray-700">Ceremony: 10:00 AM</span>
                  </div>
                  <div className="flex items-center justify-center gap-3 bg-gray-50 rounded-2xl p-4">
                    <Building2 className="h-5 w-5 text-[#A89957]" />
                    <span className="font-medium text-gray-700">Reception: 2:00 PM</span>
                  </div>
                </div>
                
                <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#A89957]/10 to-[#9CAF88]/10 rounded-full px-6 py-3 border border-[#A89957]/20">
                  <Heart className="h-4 w-4 text-[#A89957]" fill="currentColor" />
                  <span className="text-[#A89957] font-medium text-sm">
                    Click to add to calendar or join live on wedding day
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modern Venue Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {/* Church Ceremony */}
          <div 
            ref={(el) => itemRefs.current[2] = el}
            className={`group transition-all duration-1000 ease-out ${
              visibleItems.has(2) ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
            }`}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#9CAF88] to-[#A89957] rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
              
              <div className="relative bg-white rounded-3xl p-8 shadow-xl border border-gray-100 group-hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-gradient-to-br from-[#9CAF88] to-[#A89957] rounded-2xl">
                    <Church className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">Church Ceremony</h3>
                    <p className="text-gray-500 text-sm">Sacred vows exchange</p>
                  </div>
                </div>

                {/* Venue Info */}
                <div className="mb-6">
                  <h4 className="text-2xl font-bold text-gray-800 mb-2">Saint Mary's Parish</h4>
                  <p className="text-gray-600 mb-4">Ubomiri, Orlu Rd, Imo State</p>
                  
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-gray-50 rounded-xl">
                      <Clock className="h-4 w-4 text-[#A89957]" />
                    </div>
                    <span className="text-gray-700 font-medium">10:00 AM - 12:00 PM</span>
                  </div>
                </div>

                {/* Map */}
                <div className="rounded-2xl overflow-hidden mb-6 shadow-lg">
                  <iframe
                    title="St Mary's Parish Map"
                    src="https://www.google.com/maps?q=Saint%20Mary's%20Parish%20Ubomiri%20Imo%20State&output=embed"
                    className="w-full h-48 border-0"
                    loading="lazy"
                  />
                </div>

                {/* Action Button */}
                <button
                  className="w-full bg-gradient-to-r from-[#9CAF88] to-[#A89957] text-white rounded-2xl py-4 px-6 flex items-center justify-center gap-3 font-medium hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
                  onClick={() => window.open("https://maps.google.com/?q=Saint+Mary's+Parish+Ubomiri+Imo+State", "_blank")}
                >
                  <Navigation className="h-5 w-5" />
                  Get Directions
                  <ExternalLink className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Reception Venue */}
          <div 
            ref={(el) => itemRefs.current[3] = el}
            className={`group transition-all duration-1000 ease-out ${
              visibleItems.has(3) ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#A89957] to-[#9CAF88] rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
              
              <div className="relative bg-white rounded-3xl p-8 shadow-xl border border-gray-100 group-hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-gradient-to-br from-[#A89957] to-[#9CAF88] rounded-2xl">
                    <Building2 className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">Reception Venue</h3>
                    <p className="text-gray-500 text-sm">Celebration & dining</p>
                  </div>
                </div>

                {/* Venue Info */}
                <div className="mb-6">
                  <h4 className="text-2xl font-bold text-gray-800 mb-2">Shadiv Hotel</h4>
                  <p className="text-gray-600 mb-4">Owerri, Imo State, Nigeria</p>
                  
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-gray-50 rounded-xl">
                      <Clock className="h-4 w-4 text-[#A89957]" />
                    </div>
                    <span className="text-gray-700 font-medium">2:00 PM onwards</span>
                  </div>
                </div>

                {/* Map */}
                <div className="rounded-2xl overflow-hidden mb-6 shadow-lg">
                  <iframe
                    title="Shadiv Hotel Map"
                    src="https://www.google.com/maps?q=Shadiv%20Hotel%20Owerri%20Imo%20State&output=embed"
                    className="w-full h-48 border-0"
                    loading="lazy"
                  />
                </div>

                {/* Action Button */}
                <button
                  className="w-full bg-gradient-to-r from-[#A89957] to-[#9CAF88] text-white rounded-2xl py-4 px-6 flex items-center justify-center gap-3 font-medium hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
                  onClick={() => window.open("https://maps.google.com/?q=Shadiv+Hotel+Owerri+Imo+State", "_blank")}
                >
                  <Navigation className="h-5 w-5" />
                  Get Directions
                  <ExternalLink className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Modern Color Palette */}
        <div 
          ref={(el) => itemRefs.current[4] = el}
          className={`transition-all duration-1000 ease-out ${
            visibleItems.has(4) ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-12 opacity-0 scale-95'
          }`}
        >
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#A89957] to-[#9CAF88] rounded-3xl blur-xl opacity-20" />
              
              <div className="relative bg-white rounded-3xl p-12 shadow-2xl border border-gray-100">
                {/* Header */}
                <div className="text-center mb-12">
                  <div className="inline-flex items-center gap-4 mb-6">
                    <div className="p-3 bg-gradient-to-br from-[#A89957] to-[#9CAF88] rounded-2xl">
                      <Shirt className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-2xl font-bold text-gray-800">Wedding Palette</h3>
                      <p className="text-gray-500 text-sm">Dress code inspiration</p>
                    </div>
                  </div>
                  
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                    We'd love to see our guests complement our wedding colors and create a harmonious celebration
                  </p>
                </div>

                {/* Color Swatches */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                  {colors.map((item, index) => (
                    <div 
                      key={index} 
                      className={`text-center group transition-all duration-700 ease-out ${
                        visibleItems.has(4) ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                      }`}
                      style={{ transitionDelay: `${index * 150 + 500}ms` }}
                    >
                      <div className="relative mb-6">
                        <div className="absolute inset-0 rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300" style={{ backgroundColor: item.color }} />
                        <div
                          className="relative w-24 h-24 mx-auto rounded-3xl shadow-xl border-4 border-white group-hover:scale-110 transition-transform duration-300"
                          style={{ backgroundColor: item.color }}
                        />
                      </div>
                      <h4 className="text-lg font-bold text-gray-800 mb-2">{item.name}</h4>
                      <p className="text-gray-500 text-sm uppercase tracking-wider">{item.color}</p>
                    </div>
                  ))}
                </div>
                
                {/* Bottom Note */}
                <div className="mt-12 text-center">
                  <div className="inline-flex items-center gap-3 bg-gray-50 rounded-2xl px-6 py-3">
                    <Heart className="h-4 w-4 text-[#A89957]" fill="currentColor" />
                    <span className="text-gray-700 font-medium text-sm">
                      Feel free to mix and match these beautiful tones
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WeddingDetails;
