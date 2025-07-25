import { Card } from '@/components/ui/card';
import { Film, Zap, Users, Globe } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Film,
      title: "Cutting-Edge Cinema",
      description: "Discover the latest in sci-fi filmmaking with premieres, documentaries, and experimental works that push the boundaries of storytelling."
    },
    {
      icon: Zap,
      title: "Immersive Technology", 
      description: "Experience films with state-of-the-art projection systems, VR experiences, and interactive installations that bring stories to life."
    },
    {
      icon: Users,
      title: "Global Community",
      description: "Connect with filmmakers, fans, and industry professionals from around the world who share a passion for science fiction."
    },
    {
      icon: Globe,
      title: "International Focus",
      description: "Showcasing diverse voices and perspectives from global sci-fi cinema, featuring films from emerging and established filmmakers."
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            About SciFi BCN
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Founded in 2020, SciFi BCN has become the Mediterranean's leading science fiction film festival. 
            We celebrate the genre's ability to explore complex themes, envision possible futures, and challenge 
            our understanding of technology, humanity, and the universe.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 bg-card border-border hover:shadow-glow transition-all duration-300 group">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center mb-4 group-hover:shadow-neon transition-all duration-300">
                  <feature.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;