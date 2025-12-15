import { Heart, Calendar, Sparkles, Diamond, Camera } from 'lucide-react';

const OurStory = () => {
    const storyMilestones = [
        {
            icon: Heart,
            date: "March 2021",
            title: "How We Met",
            description: "Our paths crossed at a friend's birthday party in Lagos. What started as casual conversation over jollof rice turned into hours of laughter and deep connection. Little did we know that moment would change our lives forever.",
            color: "text-primary"
        },
        {
            icon: Calendar,
            date: "May 2021",
            title: "First Date",
            description: "Gozie nervously asked me out to this fancy restaurant, but ended up spilling his drink on me! Instead of being embarrassed, we laughed so hard we couldn't stop. That's when I knew he was special – someone who could turn any situation into joy.",
            color: "text-accent"
        },
        {
            icon: Sparkles,
            date: "December 2023",
            title: "Growing Together",
            description: "We've shared countless adventures, late-night conversations, family gatherings, and quiet moments that made us realize we're better together. Every day with each other is a gift we treasure deeply.",
            color: "text-gold"
        },
        {
            icon: Diamond,
            date: "August 2024",
            title: "The Proposal",
            description: "On a beautiful evening at Elegushi Beach, as the sun painted the sky gold and pink, Gozie got down on one knee. With tears of joy streaming down my face, I said YES to forever with my best friend!",
            color: "text-primary"
        }
    ];

    const photos = [
        "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=300&h=300&fit=crop",
        "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=300&h=300&fit=crop",
        "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=300&h=300&fit=crop",
        "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=300&h=300&fit=crop",
    ];

    return (
        <section id="story" className="py-24 bg-gray-100">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-20 animate-fade-in">
                    <p className="text-[gold] font-modern uppercase tracking-widest text-sm mb-4">
                        Our Journey
                    </p>
                    <h2 className="text-black text-4xl sm:text-5xl lg:text-6xl font-bold 
                    mb-6">
                        Our Love Story
                    </h2>
                    <p className="text-base text-gray-500 max-w-2xl mx-auto leading-relaxed rounded-xl px-4 py-3">
                        Every love story is beautiful, but ours is our favorite. Here&apos;s how two hearts became one,
                        creating a journey filled with laughter, adventures, and endless love.
                    </p>
                </div>

                {/* Timeline */}
                <div className="relative mb-20">
                    {/* Timeline Line */}
                    <div
                        className="absolute left-4 md:left-1/2 transform md:-translate-x-0.5 
                        h-full w-0.5"
                        style={{ backgroundColor: "#9CAF88" }} // Sage green line
                    ></div>

                    {/* Story Items */}
                    <div className="space-y-16">
                        {storyMilestones.map((milestone, index) => (
                            <div
                                key={index}
                                className={`flex items-start ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                    } animate-fade-in`}
                                style={{ animationDelay: `${index * 0.15}s` }}
                            >
                                {/* Timeline Node */}
                                <div
                                    className="absolute left-2 md:left-1/2 transform md:-translate-x-1/2 w-5 h-5 rounded-full border-4 border-background z-10 shadow-[gold]"
                                    style={{ backgroundColor: "#9CAF88" }} // matches line
                                ></div>

                                {/* Content */}
                                <div
                                    className={`w-full md:w-5/12 ml-12 md:ml-0 ${index % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'
                                        }`}
                                >
                                    <div className="shadow-soft hover:shadow-romantic transition-all duration-300 hover:-translate-y-1 bg-black text-white rounded-2xl border border-white/10">
                                        <div className="p-6 sm:p-8">
                                            <div className="flex items-center mb-4">
                                                <div className="p-3 rounded-xl border border-gold/40 mr-4">
                                                    <milestone.icon className="h-6 w-6 text-[#9CAF88]" /> {/* Gold */}
                                                </div>

                                                <div>
                                                    <span className="text-sm text-[gold] font-semibold font-modern">
                                                        {milestone.date}
                                                    </span>
                                                    <h3 className="font-elegant text-2xl font-semibold text-foreground">
                                                        {milestone.title}
                                                    </h3>
                                                </div>
                                            </div>
                                            <p className="text-muted-foreground font-modern leading-relaxed">
                                                {milestone.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Photo Timeline / Carousel */}
                <div className="mb-16">
                    <div className="flex items-center justify-center gap-2 mb-8">
                        <Camera className="h-5 w-5 text-gold" />
                        <h3 className="font-elegant text-2xl font-semibold text-foreground">
                            Our Memories
                        </h3>
                    </div>

                    <div className="max-w-full">
                        <div className="flex overflow-x-auto gap-4 pb-4 snap-x snap-mandatory scrollbar-hide">
                            {photos.map((photo, index) => (
                                <div
                                    key={index}
                                    className="shrink-0 snap-center animate-fade-in"
                                    style={{ animationDelay: `${0.8 + index * 0.1}s` }}
                                >
                                    <img
                                        src={photo}
                                        alt={`Our memory ${index + 1}`}
                                        className="w-48 h-48 sm:w-56 sm:h-56 object-cover rounded-2xl shadow-soft hover:shadow-romantic transition-transform duration-300 hover:-translate-y-1 bg-white"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Quote Section */}
                <div className="text-center animate-fade-in" style={{ animationDelay: '1s' }}>
                    <div className="max-w-3xl mx-auto rounded-3xl bg-[#9CAF88] border border-[#0B3A59] shadow-soft">
                        <div className="p-8 sm:p-12">
                            <Heart className="h-10 w-10 mx-auto mb-6" fill="currentColor" />
                            <blockquote className="font-elegant text-2xl sm:text-3xl font-medium text-white mb-6 italic leading-relaxed">
                                "Being deeply loved by someone gives you strength, while loving someone deeply gives you courage."
                            </blockquote>
                            <cite className="text-white/80 font-modern">- Lao Tzu</cite>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurStory;
