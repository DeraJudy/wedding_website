import { Heart, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white text-black py-12">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <Heart className="h-8 w-8 text-[#D4AF37] mx-auto mb-4" fill="currentColor" />
        <h3 className="font-elegant text-2xl font-bold mb-4">Dera & Goziem</h3>
        <p className="text-muted-foreground font-modern mb-6">Dec 27th, 2025 • Owerri, Nigeria</p>
        
        <div className="flex justify-center gap-4 mb-6">
          <span className="bg-[#9CAF88] text-white px-4 py-2 rounded-full text-sm">#alienJudy25</span>
        </div>
        
        <div className="flex justify-center gap-6 mb-8">
          <a 
            href="https://www.instagram.com/chigoziem.ai/" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors">
            <Instagram className="h-5 w-5" />
          </a>
          <a href="mailto:alienjudy25@pematrix.com" className="text-muted-foreground hover:text-primary transition-colors">
            <Mail className="h-5 w-5" />
          </a>
        </div>
        
        <p className="text-muted-foreground text-sm font-modern">
          © 2025 <span className='text-[royalblue] font-semibold '>Pematrix Technologies</span>. Made with <Heart className="inline h-3 w-3 text-[gold]" fill="currentColor" /> for our special day.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
