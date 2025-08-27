import { Twitter, Instagram, Facebook, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from '@/hooks/useTranslation';

const Footer = () => {
  const { t, getLocalizedPath } = useTranslation();
  const socialLinks = [
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'YouTube', icon: Youtube, href: '#' },
  ];

  return (
    <footer className="bg-deep-space border-t border-border py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              SciFi BCN
            </h3>
            <p className="text-muted-foreground">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-neon"
                  aria-label={social.name}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">{t('footer.quicklinks')}</h4>
            <ul className="space-y-2">
              <li><a href="#location" className="text-muted-foreground hover:text-primary transition-colors">{t('location.title')}</a></li>
              <li><Link to={getLocalizedPath('/rules')} className="text-muted-foreground hover:text-primary transition-colors">{t('nav.rules')}</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">{t('footer.contact')}</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>cristian@scifibcn.com</p>
              <p>Carrer d'Olzinelles 31<br />08014 Barcelona, Spain</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            {t('footer.copyright')}
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">{t('footer.privacy')}</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">{t('footer.terms')}</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">{t('footer.press')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;