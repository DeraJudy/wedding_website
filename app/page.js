import BridalParty from "@/components/BridalParty";
import ContactSection from "@/components/contactSection";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import GuestMessages from "@/components/GuestMessages";
import HeroSection from "@/components/heroSection";
import Navigation from "@/components/Navigation";
import OurStory from "@/components/OurStory"
import SendBlessingSection from "@/components/SendBlessingSection";
import WeddingDetails from "@/components/WeddingDetails";
import Image from "next/image";

export default function Home() {
  return (
   <>
   <Navigation />
   <HeroSection />
   <OurStory />
   <WeddingDetails /> 
   <Gallery />
   <BridalParty />
   <SendBlessingSection />
   <GuestMessages />
    <ContactSection />
    <Footer />
   </>
  );
}
