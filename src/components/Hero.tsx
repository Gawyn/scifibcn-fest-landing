import { Button } from '@/components/ui/button';
import { Calendar, MapPin } from 'lucide-react';
import scifiBcnLogo from '@/assets/scifi-bcn-logo.png';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-space">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-2 h-2 bg-neon-cyan rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-neon-purple rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-neon-pink rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-neon-cyan rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Logo */}
        <div className="mb-8 animate-float">
          <img 
            src={scifiBcnLogo} 
            alt="SciFi BCN Festival Logo" 
            className="mx-auto max-w-md w-full h-auto filter drop-shadow-2xl"
          />
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent animate-glow-pulse">
          The Future of Cinema
        </h1>

        {/* Description */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
          Barcelona's premier science fiction film festival showcasing the most innovative and mind-bending films from around the galaxy. 
          Experience cutting-edge storytelling that explores the boundaries of human imagination and technological possibility.
        </p>

        {/* Event Details */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10 text-lg">
          <div className="flex items-center gap-2 text-primary">
            <Calendar className="w-5 h-5" />
            <span>October 15-22, 2024</span>
          </div>
          <div className="flex items-center gap-2 text-primary">
            <MapPin className="w-5 h-5" />
            <span>Barcelona, Spain</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-gradient-primary hover:shadow-neon transition-all duration-300 text-lg px-8 py-3">
            View Schedule
          </Button>
          <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-lg px-8 py-3">
            Explore Films
          </Button>
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;