"use client"
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
  ExternalLink
} from 'lucide-react';

const WeddingDetails = () => {
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

  return (
    <section id="details" className="pt-24 pb-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-20 animate-fade-in">
          <p className="text-[gold] font-modern uppercase tracking-widest text-sm mb-4">
            Save The Date
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-700 mb-6">
            Wedding Details
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto font-modern">
            Everything you need to know about our special day. Mark your calendars and get ready to celebrate with us!
          </p>
        </div>

        {/* Date Card */}
        <div className="mb-12 shadow-elegant bg-[#F3F7F2] rounded-2xl animate-fade-in">
          <div className="p-8 sm:p-12 text-center">
            <Calendar className="h-12 w-12 text-[gold] mx-auto mb-6" />
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-700 mb-4">
              Saturday, June 14th, 2025
            </h3>
            <p className="text-xl text-gray-500 font-modern">
              Church Ceremony: 10:00 AM | Reception: 2:00 PM
            </p>
          </div>
        </div>

        {/* Venues */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">

          {/* Church */}
          <div
            className="shadow-soft border border-gray-500 bg-[#F3F7F2] rounded-2xl py-5 px-8 animate-fade-in"
            style={{ animationDelay: '0.2s' }}
          >
            <div className="flex items-center text-gray-700 font-elegant text-xl mb-4">
              <Church className="mr-3 h-6 w-6 text-[#9CAF88]" />
              Church Ceremony
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-black text-lg">
                  Saint Mary's Parish
                </h4>
                <p className="text-gray-500">
                  Ubomiri, Orlu Rd, Imo State
                </p>
              </div>

              {/* Embedded Map */}
              <div className="rounded-xl overflow-hidden border border-white shadow-sm">
                <iframe
                  title="St Mary's Parish Map"
                  src="https://www.google.com/maps?q=Saint%20Mary's%20Parish%20Ubomiri%20Imo%20State&output=embed"
                  className="w-full h-40 border-0"
                  loading="lazy"
                />
              </div>

              <div className="flex items-center space-x-3 text-sm">
                <Clock className="h-4 w-4 text-[gold]" />
                <span className="text-gray-500">10:00 AM - 12:00 PM</span>
              </div>

              <button
                className="w-full bg-white rounded-xl py-2 px-3 flex items-center justify-center text-sm text-gray-900 hover:bg-[#F3F7F2] transition"
                onClick={() =>
                  window.open(
                    "https://maps.google.com/?q=Saint+Mary's+Parish+Ubomiri+Imo+State",
                    "_blank"
                  )
                }
              >
                <MapPin className="mr-2 h-4 w-4" />
                View on Google Maps
                <ExternalLink className="ml-2 h-3 w-3" />
              </button>
            </div>
          </div>

          {/* Reception */}
          <div
            className="shadow-soft border border-gray-500 bg-[#F3F7F2] rounded-2xl py-5 px-8 animate-fade-in"
            style={{ animationDelay: '0.3s' }}
          >
            <div className="flex items-center text-gray-700 font-elegant text-xl mb-4">
              <Building2 className="mr-3 h-6 w-6 text-[#87CEEB]" />
              Reception Venue
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-black text-lg">
                  Shadiv Hotel
                </h4>
                <p className="text-gray-500">
                  Owerri, Imo State, Nigeria
                </p>
              </div>

              {/* Embedded Map */}
              <div className="rounded-xl overflow-hidden border border-white shadow-sm">
                <iframe
                  title="Shadiv Hotel Map"
                  src="https://www.google.com/maps?q=Shadiv%20Hotel%20Owerri%20Imo%20State&output=embed"
                  className="w-full h-40 border-0"
                  loading="lazy"
                />
              </div>

              <div className="flex items-center space-x-3 text-sm">
                <Clock className="h-4 w-4 text-[gold]" />
                <span className="text-gray-500">2:00 PM onwards</span>
              </div>

              <button
                className="w-full bg-white rounded-xl py-2 px-3 flex items-center justify-center text-sm text-gray-900 hover:bg-[#F3F7F2] transition"
                onClick={() =>
                  window.open(
                    "https://maps.google.com/?q=Shadiv+Hotel+Owerri+Imo+State",
                    "_blank"
                  )
                }
              >
                <MapPin className="mr-2 h-4 w-4" />
                View on Google Maps
                <ExternalLink className="ml-2 h-3 w-3" />
              </button>
            </div>
          </div>
        </div>

        {/* Colours */}
        <div className="mb-16 shadow-soft border border-gray-500 bg-[#F3F7F2] rounded-2xl py-5 px-8 animate-fade-in">
          <div className="flex items-center text-gray-700 font-elegant text-xl mb-4">
            <Shirt className="mr-3 h-6 w-6 text-[#D4AF37]" />
            Colours of the Day
          </div>

          <p className="text-gray-500 font-modern mb-6">
            We'd love to see our guests complement our wedding palette.
          </p>

          <div className="flex flex-wrap gap-6 justify-center">
            {colors.map((item, index) => (
              <div key={index} className="text-center">
                <div
                  className="w-20 h-20 rounded-2xl shadow-lg mb-3 border-4 border-white"
                  style={{ backgroundColor: item.color }}
                />
                <p className="font-modern text-sm font-medium text-gray-700">
                  {item.name}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default WeddingDetails;
