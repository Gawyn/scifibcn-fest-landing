import { Card } from '@/components/ui/card';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import venueExterior from '@/assets/venue-exterior.jpg';
import venueInterior from '@/assets/venue-interior.jpg';

const Location = () => {
  const venueDetails = [
    {
      icon: MapPin,
      label: "Address",
      value: "Carrer de Lleida, 59, 08004 Barcelona, Spain"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+34 93 426 18 50"
    },
    {
      icon: Mail,
      label: "Email",
      value: "info@scifibcn.com"
    },
    {
      icon: Clock,
      label: "Festival Hours",
      value: "10:00 AM - 11:00 PM Daily"
    }
  ];

  return (
    <section id="location" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-space">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Festival Location
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join us at the stunning CineBaix venue in the heart of Barcelona, featuring state-of-the-art screening rooms and exhibition spaces.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Venue Information */}
          <div className="space-y-8">
            <Card className="p-8 bg-card border-border shadow-card">
              <h3 className="text-2xl font-bold mb-6 text-foreground">CineBaix Barcelona</h3>
              
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

              <div className="mt-8 pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  Public transportation: Metro L1 (Hostafrancs), Bus lines H16, 23, 32. 
                  Parking available nearby at Parking BSM Sants.
                </p>
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
                  <p className="font-semibold">Exterior View</p>
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
                  <p className="font-semibold">Screening Room</p>
                </div>
              </div>
            </div>
          </div>

          {/* Google Maps */}
          <div className="space-y-6">
            <Card className="p-1 bg-card border-border shadow-card overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2993.6089084571087!2d2.1504!3d41.3754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a49f9e4f5b5555%3A0x5f5555555555555!2sCarrer%20de%20Lleida%2C%2059%2C%2008004%20Barcelona%2C%20Spain!5e0!3m2!1sen!2sus!4v1650000000000!5m2!1sen!2sus"
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

            <Card className="p-6 bg-card border-border shadow-card">
              <h4 className="text-lg font-semibold mb-4 text-foreground">Getting There</h4>
              <div className="space-y-3 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span><strong>Metro:</strong> L1 Red Line - Hostafrancs Station (5 min walk)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span><strong>Bus:</strong> Lines H16, 23, 32 - Lleida/Gran Via stop</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span><strong>Airport:</strong> 30 minutes by Aerobus + Metro</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span><strong>Parking:</strong> BSM Sants (2 blocks away)</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;