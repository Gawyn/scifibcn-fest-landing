import { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'es' | 'ca';

interface TranslationContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    'nav.schedule': 'Schedule',
    'nav.films': 'Films',
    
    // Hero
    'hero.title': 'SciFi BCN',
    'hero.description': 'Barcelona\'s pioneering science fiction festival, bringing premiere short films, classic genre feature films, and all kinds of activities for all audiences:',
    'hero.date': 'March 6-7, 2026',
    'hero.location': 'Barcelona, Spain',
    'hero.cta.schedule': 'View Schedule',
    'hero.cta.films': 'Explore Films',
    
    // About
    'about.title': 'About SciFi BCN',
    'about.description': 'Founded in 2025, SciFi BCN aims to be a celebration of science fiction in the heart of Barcelona. We celebrate the genre\'s ability to explore complex themes, envision possible futures, and challenge our understanding of technology, humanity, and the universe.',
    'about.feature1.title': 'Premiere Cinema',
    'about.feature1.description': 'Discover the latest in sci-fi filmmaking with premiere short films that push the boundaries of storytelling.',
    'about.feature2.title': 'Passion for Classics',
    'about.feature2.description': 'Re-enjoy the great classics of the genre on the big screen and in the best atmosphere.',
    'about.feature3.title': 'Local Community',
    'about.feature3.description': 'Connect with other science fiction enthusiasts who share your passion for science fiction.',
    'about.feature4.title': 'International Focus',
    'about.feature4.description': 'Showcasing diverse voices and perspectives from global sci-fi cinema, featuring films from emerging and established filmmakers.',
    
    // Location
    'location.title': 'Festival Location',
    'location.description': 'Join us at the stunning CineBaix venue in the heart of Barcelona, featuring state-of-the-art screening rooms and exhibition spaces.',
    'location.venue': 'Lleialtat Santsenca',
    'location.address': 'Address',
    'location.phone': 'Phone',
    'location.email': 'Email',
    'location.hours': 'Festival Hours',
    'location.hours.value': '10:00 AM - 11:00 PM Daily',
    'location.transport': 'Public transportation: Metro L1 (Hostafrancs), Bus lines H16, 23, 32. Parking available nearby at Parking BSM Sants.',
    'location.getting': 'Getting There',
    'location.metro': 'Metro: L1 Red Line - Hostafrancs Station (5 min walk)',
    'location.bus': 'Bus: Lines H16, 23, 32 - Lleida/Gran Via stop',
    'location.airport': 'Airport: 30 minutes by Aerobus + Metro',
    'location.parking': 'Parking: BSM Sants (2 blocks away)',
    'location.exterior': 'Exterior View',
    'location.interior': 'Screening Room',
    
    // Footer
    'footer.description': 'Barcelona\'s premier science fiction film festival, exploring the future of cinema since 2025.',
    'footer.quicklinks': 'Quick Links',
    'footer.contact': 'Contact',
    'footer.tickets': 'Tickets',
    'footer.copyright': '© 2024 SciFi BCN Festival. All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.press': 'Press Kit'
  },
  es: {
    // Navigation
    'nav.schedule': 'Programación',
    'nav.films': 'Películas',
    
    // Hero
    'hero.title': 'SciFi BCN',
    'hero.description': 'El festival de ciencia ficción pionero en Barcelona, trayendo cortos de estreno, largometrajes clásicos del género, y todo tipo de actividades para todos los públicos:',
    'hero.date': '6-7 de Marzo, 2026',
    'hero.location': 'Barcelona, España',
    'hero.cta.schedule': 'Ver Programación',
    'hero.cta.films': 'Explorar Películas',
    
    // About
    'about.title': 'Sobre SciFi BCN',
    'about.description': 'Fundado en 2025, SciFi BCN quiere ser una celebración de la ciencia ficción en el corazón de Barcelona. Celebramos la capacidad del género para explorar temas complejos, imaginar futuros posibles y desafiar nuestra comprensión de la tecnología, la humanidad y el universo.',
    'about.feature1.title': 'Cinema de Estreno',
    'about.feature1.description': 'Descubre lo último en cinematografía de ciencia ficción con cortos de estreno que empujan los límites de la narrativa.',
    'about.feature2.title': 'Pasión por los Clásicos',
    'about.feature2.description': 'Vuelve a disfrutar de los grandes clásicos del género en pantalla grande y en el mejor de los ambientes.',
    'about.feature3.title': 'Comunidad Local',
    'about.feature3.description': 'Conecta con otros aficionados a la ciencia ficción que comparten tu pasión por la ciencia ficción.',
    'about.feature4.title': 'Enfoque Internacional',
    'about.feature4.description': 'Mostrando voces y perspectivas diversas del cine de ciencia ficción global, con películas de cineastas emergentes y establecidos.',
    
    // Location
    'location.title': 'Ubicación del Festival',
    'location.description': 'Únete a nosotros en el impresionante venue CineBaix en el corazón de Barcelona, con salas de proyección y espacios de exhibición de última generación.',
    'location.venue': 'Lleialtat Santsenca',
    'location.address': 'Dirección',
    'location.phone': 'Teléfono',
    'location.email': 'Email',
    'location.hours': 'Horarios del Festival',
    'location.hours.value': '10:00 - 23:00 Diario',
    'location.transport': 'Transporte público: Metro L1 (Hostafrancs), Líneas de autobús H16, 23, 32. Parking disponible cerca en Parking BSM Sants.',
    'location.getting': 'Cómo Llegar',
    'location.metro': 'Metro: Línea L1 Roja - Estación Hostafrancs (5 min caminando)',
    'location.bus': 'Autobús: Líneas H16, 23, 32 - Parada Lleida/Gran Via',
    'location.airport': 'Aeropuerto: 30 minutos en Aerobus + Metro',
    'location.parking': 'Parking: BSM Sants (2 calles)',
    'location.exterior': 'Vista Exterior',
    'location.interior': 'Sala de Proyección',
    
    // Footer
    'footer.description': 'El festival de cine de ciencia ficción más importante de Barcelona, explorando el futuro del cine desde 2025.',
    'footer.quicklinks': 'Enlaces Rápidos',
    'footer.contact': 'Contacto',
    'footer.tickets': 'Entradas',
    'footer.copyright': '© 2024 Festival SciFi BCN. Todos los derechos reservados.',
    'footer.privacy': 'Política de Privacidad',
    'footer.terms': 'Términos de Servicio',
    'footer.press': 'Kit de Prensa'
  },
  ca: {
    // Navigation
    'nav.schedule': 'Programació',
    'nav.films': 'Pel·lícules',
    
    // Hero
    'hero.title': 'SciFi BCN',
    'hero.description': "El festival de ciencia-ficció pioner a Barcelona, portant curts d'estrena, llargmetratges clàssics del gènere, i tota mena d'activitats per a tots els públics:",
    'hero.date': '6-7 de Març, 2026',
    'hero.location': 'Barcelona, Catalunya',
    'hero.cta.schedule': 'Veure Programació',
    'hero.cta.films': 'Explorar Pel·lícules',
    
    // About
    'about.title': 'Sobre SciFi BCN',
    'about.description': 'Fundat el 2025, SciFi BCN vol ser una celebració de la ciencia-ficció al bell mig de Barcelona. Celebrem la capacitat del gènere per explorar temes complexos, imaginar futurs possibles i desafiar la nostra comprensió de la tecnologia, la humanitat i l\'univers.',
    'about.feature1.title': 'Cinema d\'estrena',
    'about.feature1.description': 'Descobreix l\'últim en cinematografia de ciència-ficció amb curts d\'estrena que empuixen els límits de la narrativa.',
    'about.feature2.title': 'Passió pels clàssics',
    'about.feature2.description': 'Torna a disfrutar dels grans clàssics del gènere en pantalla gran i en el millor dels ambients.',
    'about.feature3.title': 'Comunitat Local',
    'about.feature3.description': 'Connecta amb altres aficionats a la ciència-ficció que comparteixen la teva passió per la ciència-ficció.',
    'about.feature4.title': 'Enfocament Internacional',
    'about.feature4.description': 'Mostrant veus i perspectives diverses del cinema de ciència-ficció global, amb pel·lícules de cineastes emergents i establerts.',
    
    // Location
    'location.title': 'Ubicació del Festival',
    'location.description': 'Uneix-te a nosaltres al impressionant venue CineBaix al cor de Barcelona, amb sales de projecció i espais d\'exhibició d\'última generació.',
    'location.venue': 'Lleialtat Santsenca',
    'location.address': 'Adreça',
    'location.phone': 'Telèfon',
    'location.email': 'Email',
    'location.hours': 'Horaris del Festival',
    'location.hours.value': '10:00 - 23:00 Diari',
    'location.transport': 'Transport públic: Metro L1 (Plaça de Sants), Línies d\'autobús H16, 23, 32. Pàrquing disponible a prop al Parking BSM Sants.',
    'location.getting': 'Com Arribar',
    'location.metro': 'Metro: Línia L1 Vermella - Estació Hostafrancs (5 min caminant)',
    'location.bus': 'Autobús: Línies H16, 23, 32 - Parada Lleida/Gran Via',
    'location.airport': 'Aeroport: 30 minuts amb Aerobús + Metro',
    'location.parking': 'Pàrquing: BSM Sants (2 carrers)',
    'location.exterior': 'Vista Exterior',
    'location.interior': 'Sala de Projecció',
    
    // Footer
    'footer.description': 'El festival de cinema de ciència-ficció més important de Barcelona, explorant el futur del cinema des de 2025.',
    'footer.quicklinks': 'Enllaços Ràpids',
    'footer.contact': 'Contacte',
    'footer.tickets': 'Entrades',
    'footer.copyright': '© 2024 Festival SciFi BCN. Tots els drets reservats.',
    'footer.privacy': 'Política de Privacitat',
    'footer.terms': 'Termes de Servei',
    'footer.press': 'Kit de Premsa'
  }
};

interface TranslationProviderProps {
  children: ReactNode;
}

export const TranslationProvider = ({ children }: TranslationProviderProps) => {
  const [language, setLanguage] = useState<Language>('ca');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <TranslationContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = (): TranslationContextType => {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
};