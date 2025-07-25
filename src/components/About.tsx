import { Card } from '@/components/ui/card';
import { Film, Zap, Users, Globe } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

const About = () => {
  const { t } = useTranslation();
  const features = [
    {
      icon: Film,
      title: t('about.feature1.title'),
      description: t('about.feature1.description')
    },
    {
      icon: Zap,
      title: t('about.feature2.title'), 
      description: t('about.feature2.description')
    },
    {
      icon: Users,
      title: t('about.feature3.title'),
      description: t('about.feature3.description')
    },
    {
      icon: Globe,
      title: t('about.feature4.title'),
      description: t('about.feature4.description')
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            {t('about.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t('about.description')}
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