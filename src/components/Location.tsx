import { Card } from '@/components/ui/card';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';
import { HEADER_COLOR } from '@/lib/utils';
import venueExterior from '@/assets/venue-exterior.jpg';
import venueInterior from '@/assets/venue-interior.jpg';

const Location = () => {
  const { t } = useTranslation();
  const venueDetails = [
    {
      icon: MapPin,
      label: t('location.address'),
      value: "Lleialtat Santsenca, Carrer d'Olzinelles, 31, Sants-Montjuïc, 08014, Barcelona"
    }
  ];

  return (
    <section id="location" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-space">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6" style={{ color: HEADER_COLOR }}>
            {t('location.title')}
          </h2>
          {/*
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('location.description')}
          </p>
          */}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Venue Information */}
          <div className="space-y-8">
            <Card className="p-8 bg-card border-border shadow-card">
              <h3 className="text-2xl font-bold mb-6" style={{ color: HEADER_COLOR }}>{t('location.venue')}</h3>
              
              <div className="space-y-6">
                {venueDetails.map((detail, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center flex-shrink-0">
                      <detail.icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{detail.label}</p>
                      <p className="text-muted-foreground">{detail.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Venue Images */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative overflow-hidden rounded-lg group">
                <img 
                  src={venueExterior} 
                  alt="CineBaix Exterior" 
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="font-semibold">{t('location.exterior')}</p>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-lg group">
                <img 
                  src={venueInterior} 
                  alt="CineBaix Interior" 
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="font-semibold">{t('location.interior')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Google Maps */}
          <div className="space-y-6">
            <Card className="p-1 bg-card border-border shadow-card overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2994.056857748544!2d2.134106975948478!3d41.372849396897045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a498851477e9bd%3A0x223f4aa26a87e0c7!2sLleialtat%20Santsenca!5e0!3m2!1sen!2sus!4v1754185108836!5m2!1sen!2sus"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
                title="SciFi BCN Festival Location"
              ></iframe>
            </Card>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;