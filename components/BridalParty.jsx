"use client";
import { useEffect, useRef, useState } from 'react';
import { Heart, Crown, Sparkles } from 'lucide-react';

const BridalParty = () => {
  const [visibleCards, setVisibleCards] = useState(new Set());
  const sectionRef = useRef(null);
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

  const bridesmaids = [
    {
      name: "Udochi Nwam",
      role: "Chief Bridesmaid",
      description: "My university roommate turned lifelong friend. She's the voice of joy, peace and the life of every party.",
      image: "https://res.cloudinary.com/diae7jcps/image/upload/v1766076736/Udochi_keb8id.jpg"
    },
    {
      name: "Ozi Beke",
      role: "Bridesmaid",
      description: "My sister and best friend since childhood. The one who always check on me everytime and she is effortlessly cool.",
      image: "https://res.cloudinary.com/diae7jcps/image/upload/v1766076734/ozi_eph3ec.jpg"
    },
    {
      name: "Nwendu Baby",
      role: "Bridesmaid",
      description: "My sister and best friend since childhood. The one who always has my back and makes me laugh until my stomach hurts.",
      // description: "My work bestie who became family. She's always ready for an adventure and gives the best advice.",
      image: "https://res.cloudinary.com/diae7jcps/image/upload/v1766076737/wendu_oelnwg.jpg"
    },
    {
      name: "Divine",
      role: "Bridesmaid",
      description: "My cousin and the one who introduced me to the magical world of K-dramas and cartoons. Gentle and fun-loving",
      // description: "My childhood friend who knows all my secrets. She's been there through every milestone.",
      image: "https://res.cloudinary.com/diae7jcps/image/upload/v1766076739/divine_ws6xzx.jpg"
    },
    {
      name: "Adaeze",
      role: "Bridesmaid",
      description: "My cousin and one of my forever sisters. Sweet, stylish, and always showing up with love and laughter.",
      image: "https://res.cloudinary.com/diae7jcps/image/upload/v1766076732/adaeze_iwrrd7.jpg"
    },
    {
      name: "Scira",
      role: "Bridesmaid",
      description: "My year-one roommate turned lifelong friend, always ready with movie recommendations and good vibes ",
      image: "https://res.cloudinary.com/diae7jcps/image/upload/v1766076735/scira_md85vs.jpg"
    },
    {
      name: "Idowu",
      role: "Bridesmaid",
      description: "A friend I met during my service year, ambitious, curious, and always eager to learn. She is Fun.",
      image: "https://res.cloudinary.com/diae7jcps/image/upload/v1766076734/idowu_izw6we.jpg"
    },
    {
      name: "Mercy",
      role: "Bridesmaid",
      description: "A friend I met during a training class, her joy and excitement to be part of our wedding means so much to me.",
      image: "https://res.cloudinary.com/diae7jcps/image/upload/v1766076736/taiwo_ouzkjb.jpg"
    }
  ];

  const groomsmen = [
    {
      name: "Matthew Ekeanyanwu",
      role: "Best Man",
      description: "A.k.a Father Ebuka. Matthew is Goziem’s go-to in hard times, disciplined, faith-driven, and impossible to discourage. With him around, giving up is not on the table… we die here 😄.",
      image: "https://res.cloudinary.com/diae7jcps/image/upload/v1766076739/Ebuka_qagz6t.jpg"
      // image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Valentine Eze",
      role: "Groomsman",
      description: "A senior software engineer who loves building solutions as much as Goziem does, except Valentine also obsesses about his Catholic faith just as deeply. Tech, purpose, and values keep this friendship solid.",
      image: "https://res.cloudinary.com/diae7jcps/image/upload/v1766105928/Valentine_mv4hxb.jpg"
    },
    {
      name: "Michael Iwu",
      role: "Groomsman",
      description: "Michael is Goziem’s athletic cousin, steadily chasing his dreams one game at a time. His determination, discipline, and never-quit mindset are qualities Goziem deeply respects and draws inspiration from.",
      image: "https://res.cloudinary.com/diae7jcps/image/upload/v1766105987/MIcheal_zbjmck.jpg"
    },
    {
      name: "Elijah Eze",
      role: "Groomsman",
      description: "A software engineer, instructor, musical guru, and the undisputed life of the party. Elijah keeps Goziem grounded, laughing, and occasionally dancing when he should be serious 😄.",
      image: "https://res.cloudinary.com/diae7jcps/image/upload/v1766105941/Elijah_vojpwy.jpg"
    }
  ];

  return (
    <section id="party" className="py-24 bg-linear-to-b from-white to-[#87CEEB]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in">
          <p className="text-[#D4AF37] uppercase tracking-widest text-sm mb-4">Our Special People</p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl text-black font-bold mb-6">
            Bridal Party
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto font-modern">
            These incredible people will be standing with us on our special day.
            Our friends and family who have supported our love story from the beginning.
          </p>
        </div>

        {/* Bridesmaids */}
        <div className="mb-20">
          <div className="text-center mb-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center justify-center mb-4">
              <Crown className="h-8 w-8 text-[#D4AF37] mr-3" />
              <h3 className="font-elegant text-3xl py-8 font-bold text-black">
                The Bride's Squad
              </h3>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
            {bridesmaids.map((person, index) => (
              <div
                key={index}
                ref={el => cardRefs.current[index] = el}
                data-index={index}
                className={`transform transition-all duration-1000 ease-out ${
                  visibleCards.has(index) 
                    ? 'translate-y-0 opacity-100 scale-100' 
                    : 'translate-y-20 opacity-0 scale-95'
                } shadow-soft hover:shadow-romantic hover:-translate-y-2 bg-card/80 backdrop-blur-sm border-primary/10`}
                style={{ 
                  transitionDelay: visibleCards.has(index) ? `${index * 150}ms` : '0ms'
                }}
              >
                <div className="p-6 bg-white text-center rounded-2xl">
                  <div className="relative mb-6">
                    <div className="w-32 h-32 mx-auto bg-white rounded-full overflow-hidden border-4 border-primary/20 shadow-soft">
                      <img
                        src={person.image}
                        alt={person.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {person.role === "Chief Bridesmaid" && (
                      <div className="absolute -top-2 -right-2 bg-[#9CAF88] text-white p-2 rounded-full shadow-md">
                        <Sparkles className="h-4 w-4" />
                      </div>
                    )}

                  </div>
                  <h4 className="font-elegant text-xl font-semibold text-black mb-2">
                    {person.name}
                  </h4>
                  <p className="text-sky-500 font-medium font-modern mb-3 text-sm">
                    {person.role}
                  </p>
                  <p className="text-gray-500 font-modern text-sm leading-relaxed">
                    {person.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Groomsmen */}
        <div>
          <div className="text-center mb-12 animate-fade-in" style={{ animationDelay: '0.7s' }}>
            <div className="flex items-center justify-center mb-4">
              <Crown className="h-8 w-8 text-[#D4AF37] mr-3" />
              <h3 className="font-elegant text-3xl font-bold text-black">
                The Groom's Squad
              </h3>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
            {groomsmen.map((person, index) => (
              <div
                key={index}
                ref={el => cardRefs.current[bridesmaids.length + index] = el}
                data-index={bridesmaids.length + index}
                className={`transform transition-all duration-1000 ease-out ${
                  visibleCards.has(bridesmaids.length + index) 
                    ? 'translate-y-0 opacity-100 scale-100' 
                    : 'translate-y-20 opacity-0 scale-95'
                } shadow-soft hover:shadow-romantic hover:-translate-y-2 bg-card/80 backdrop-blur-sm border-primary/10`}
                style={{ 
                  transitionDelay: visibleCards.has(bridesmaids.length + index) ? `${index * 150}ms` : '0ms'
                }}
              >
                <div className="p-6 bg-white text-center rounded-2xl">
                  <div className="relative mb-6">
                    <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-accent/20 shadow-soft">
                      <img
                        src={person.image}
                        alt={person.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {person.role === "Best Man" && (
                      <div className="absolute -top-2 -right-2 bg-[#D4AF37] text-white p-2 rounded-full shadow-md">
                        <Sparkles className="h-4 w-4" />
                      </div>
                    )}
                  </div>
                  <h4 className="text-black text-xl font-semibold mb-2">
                    {person.name}
                  </h4>
                  <p className="text-[#D4AF37] font-medium font-modern mb-3 text-sm">
                    {person.role}
                  </p>
                  <p className="text-gray-500 font-modern text-sm leading-relaxed">
                    {person.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Thank You Message */}
        <div className="mt-20 text-center animate-fade-in" style={{ animationDelay: '1.2s' }}>
          <div className="max-w-3xl mx-auto bg-[#4682B4] border-[#4682B4] border rounded-3xl shadow-lg">
            <div className="p-8 sm:p-12">
              <Heart className="h-10 w-10 text-[#D4AF37] mx-auto mb-6" fill="currentColor" />
              <h4 className="font-elegant text-2xl font-semibold text-white mb-4">
                Thank You to Our Wedding Party
              </h4>
              <p className="text-muted-foreground font-modern leading-relaxed">
                We are so grateful to have such incredible people in our lives. Thank you for being
                part of our journey, for your love, support, and for agreeing to stand with us as
                we begin this new chapter. We couldn't imagine our special day without each of you!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BridalParty;
