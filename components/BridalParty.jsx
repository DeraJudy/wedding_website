import { Heart, Crown, Sparkles } from 'lucide-react';
import adaezeImg from "@/assets/adaeze.jpg";
import divineImg from "@/assets/divine.jpg";
import idowuImg from "@/assets/idowu.jpg";
import oziImg from "@/assets/ozi.jpg";
import sciraImg from "@/assets/scira.jpg";
import taiwoImg from "@/assets/taiwo.jpg";
import wenduImg from "@/assets/wendu.jpg";
import UdochiImg from "@/assets/Udochi.jpeg"
import ebukaImg from '@/assets/Ebuka.jpg';

const BridalParty = () => {
  const bridesmaids = [
    {
      name: "Udochi Nwam",
      role: "Chief Bridesmaid",
      description: "My university roommate turned lifelong friend. She's the voice of joy, peace and the life of every party.",
      image: UdochiImg.src
    },
    {
      name: "Ozi Beke",
      role: "Bridesmaid",
      description: "My sister and best friend since childhood. The one who always check on me everytime and she is effortlessly cool.",
      image: oziImg.src
    },
    {
      name: "Nwendu Baby",
      role: "Bridesmaid",
      description: "My sister and best friend since childhood. The one who always has my back and makes me laugh until my stomach hurts.",
      // description: "My work bestie who became family. She's always ready for an adventure and gives the best advice.",
      image: wenduImg.src
    },
    {
      name: "Divine",
      role: "Bridesmaid",
      description: "My cousin and the one who introduced me to the magical world of K-dramas and cartoons. Gentle fun-loving",
      // description: "My childhood friend who knows all my secrets. She's been there through every milestone.",
      image: divineImg.src
    },
    {
      name: "Adaeze",
      role: "Bridesmaid",
      description: "My cousin and one of my forever sisters — sweet, stylish, and always showing up with love and laughter.",
      image: adaezeImg.src
    },
    {
      name: "Scira",
      role: "Bridesmaid",
      description: "My year-one roommate turned lifelong friend — always ready with movie recommendations and good vibes ",
      image: sciraImg.src
    },
    {
      name: "Idowu",
      role: "Bridesmaid",
      description: "A friend I met during my service year — ambitious, curious, and always eager to learn. She is Fun.",
      image: idowuImg.src
    },
    {
      name: "Mercy",
      role: "Bridesmaid",
      description: "A friend I met during a training class — her joy and excitement to be part of our wedding means so much to me.",
      image: taiwoImg.src
    }
  ];

  const groomsmen = [
    {
      name: "Matthew ",
      role: "Best Man",
      description: "Fondly known as Father Ebuka, Matthew is a man of faith, depth, and uncommon resilience. Brilliant, disciplined, hardworking, and focused, he is the kind of person who stands firm in hard times. You don’t need a motivational speaker when you have Matthew — he lives his gospel. With him by your side, giving up simply isn’t an option; as we like to say, you can’t have a Matthew and give up… we die here 😄. His loyalty, strength, and unwavering support make him more than a friend — he’s family.",
      image: ebukaImg.src
      // image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
    }
    // {
    //   name: "Emeka Uche",
    //   role: "Groomsman",
    //   description: "University roommate and lifelong friend. He's the tech genius who keeps everyone connected.",
    //   image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
    // },
    // {
    //   name: "Kunle Adeola",
    //   role: "Groomsman",
    //   description: "Work colleague turned close friend. He introduced us to the best spots in Lagos.",
    //   image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face"
    // },
    // {
    //   name: "Segun Ajayi",
    //   role: "Groomsman",
    //   description: "Childhood friend who's been part of the family forever. The storyteller of the group.",
    //   image: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=400&h=400&fit=crop&crop=face"
    // }
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
                className="shadow-soft hover:shadow-romantic transition-all duration-300 hover:-translate-y-2 bg-card/80 backdrop-blur-sm border-primary/10 animate-fade-in"
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
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
                className="grid gap-8 px-6 justify-center place-items-center
                  [grid-template-columns:repeat(auto-fit,minmax(250px,1fr))]
                  max-w-6xl mx-auto"
                style={{ animationDelay: `${0.8 + index * 0.1}s` }}
              >
                <div className="p-6 text-center bg-white rounded-2xl">
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
                  <h4 className="text-black text-xl font-semibold  mb-2">
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
          <div className="max-w-3xl mx-auto bg-sky-300 border-sky-300 border">
            <div className="p-8 sm:p-12">
              <Heart className="h-10 w-10 text-gold mx-auto mb-6" fill="currentColor" />
              <h4 className="font-elegant text-2xl font-semibold text-foreground mb-4">
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
