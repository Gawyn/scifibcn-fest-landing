import { Button } from '@/components/ui/button';
import { Calendar, MapPin } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';
import scifiBcnLogo from '@/assets/scifi-bcn-logo.png';

const Hero = () => {
  const { t } = useTranslation();
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-space">

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Logo */}
        <div className="mb-8 animate-float">
          <img 
            src={scifiBcnLogo} 
            alt="SciFi BCN Festival Logo" 
            className="mx-auto max-w-3xl w-full h-auto filter drop-shadow-2xl"
          />
        </div>

        {/* Description */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
          {t('hero.description')}
        </p>

        {/* Event Details */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10 text-lg">
          <div className="flex items-center gap-2 text-primary">
            <Calendar className="w-5 h-5" />
            <span>{t('hero.date')}</span>
          </div>
          <div className="flex items-center gap-2 text-primary">
            <MapPin className="w-5 h-5" />
            <span>{t('hero.location')}</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/*
          <Button size="lg" className="bg-gradient-primary hover:shadow-neon transition-all duration-300 text-lg px-8 py-3">
            {t('hero.cta.schedule')}
          </Button>
          <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-lg px-8 py-3">
            {t('hero.cta.films')}
          </Button>
          */}
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;