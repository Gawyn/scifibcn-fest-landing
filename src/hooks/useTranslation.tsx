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
    'hero.title': 'The Future of Cinema',
    'hero.description': 'Barcelona\'s premier science fiction film festival showcasing the most innovative and mind-bending films from around the galaxy. Experience cutting-edge storytelling that explores the boundaries of human imagination and technological possibility.',
    'hero.date': 'October 15-22, 2024',
    'hero.location': 'Barcelona, Spain',
    'hero.cta.schedule': 'View Schedule',
    'hero.cta.films': 'Explore Films',
    
    // About
    'about.title': 'About SciFi BCN',
    'about.description': 'Founded in 2020, SciFi BCN has become the Mediterranean\'s leading science fiction film festival. We celebrate the genre\'s ability to explore complex themes, envision possible futures, and challenge our understanding of technology, humanity, and the universe.',
    'about.feature1.title': 'Cutting-Edge Cinema',
    'about.feature1.description': 'Discover the latest in sci-fi filmmaking with premieres, documentaries, and experimental works that push the boundaries of storytelling.',
    'about.feature2.title': 'Immersive Technology',
    'about.feature2.description': 'Experience films with state-of-the-art projection systems, VR experiences, and interactive installations that bring stories to life.',
    'about.feature3.title': 'Global Community',
    'about.feature3.description': 'Connect with filmmakers, fans, and industry professionals from around the world who share a passion for science fiction.',
    'about.feature4.title': 'International Focus',
    'about.feature4.description': 'Showcasing diverse voices and perspectives from global sci-fi cinema, featuring films from emerging and established filmmakers.',
    
    // Location
    'location.title': 'Festival Location',
    'location.description': 'Join us at the stunning CineBaix venue in the heart of Barcelona, featuring state-of-the-art screening rooms and exhibition spaces.',
    'location.venue': 'CineBaix Barcelona',
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
    'footer.description': 'Barcelona\'s premier science fiction film festival, exploring the future of cinema since 2020.',
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
    'hero.title': 'El Futuro del Cine',
    'hero.description': 'El festival de cine de ciencia ficción más importante de Barcelona, mostrando las películas más innovadoras y alucinantes de toda la galaxia. Experimenta narrativas de vanguardia que exploran los límites de la imaginación humana y las posibilidades tecnológicas.',
    'hero.date': '15-22 de Octubre, 2024',
    'hero.location': 'Barcelona, España',
    'hero.cta.schedule': 'Ver Programación',
    'hero.cta.films': 'Explorar Películas',
    
    // About
    'about.title': 'Sobre SciFi BCN',
    'about.description': 'Fundado en 2020, SciFi BCN se ha convertido en el principal festival de cine de ciencia ficción del Mediterráneo. Celebramos la capacidad del género para explorar temas complejos, imaginar futuros posibles y desafiar nuestra comprensión de la tecnología, la humanidad y el universo.',
    'about.feature1.title': 'Cine de Vanguardia',
    'about.feature1.description': 'Descubre lo último en cinematografía de ciencia ficción con estrenos, documentales y obras experimentales que empujan los límites de la narrativa.',
    'about.feature2.title': 'Tecnología Inmersiva',
    'about.feature2.description': 'Experimenta películas con sistemas de proyección de última generación, experiencias VR e instalaciones interactivas que dan vida a las historias.',
    'about.feature3.title': 'Comunidad Global',
    'about.feature3.description': 'Conecta con cineastas, fanáticos y profesionales de la industria de todo el mundo que comparten la pasión por la ciencia ficción.',
    'about.feature4.title': 'Enfoque Internacional',
    'about.feature4.description': 'Mostrando voces y perspectivas diversas del cine de ciencia ficción global, con películas de cineastas emergentes y establecidos.',
    
    // Location
    'location.title': 'Ubicación del Festival',
    'location.description': 'Únete a nosotros en el impresionante venue CineBaix en el corazón de Barcelona, con salas de proyección y espacios de exhibición de última generación.',
    'location.venue': 'CineBaix Barcelona',
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
    'footer.description': 'El festival de cine de ciencia ficción más importante de Barcelona, explorando el futuro del cine desde 2020.',
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
    'hero.title': 'El Futur del Cinema',
    'hero.description': 'El festival de cinema de ciència-ficció més important de Barcelona, mostrant les pel·lícules més innovadores i al·lucinants de tota la galàxia. Experimenta narratives d\'avantguarda que exploren els límits de la imaginació humana i les possibilitats tecnològiques.',
    'hero.date': '15-22 d\'Octubre, 2024',
    'hero.location': 'Barcelona, Catalunya',
    'hero.cta.schedule': 'Veure Programació',
    'hero.cta.films': 'Explorar Pel·lícules',
    
    // About
    'about.title': 'Sobre SciFi BCN',
    'about.description': 'Fundat el 2020, SciFi BCN s\'ha convertit en el principal festival de cinema de ciència-ficció del Mediterrani. Celebrem la capacitat del gènere per explorar temes complexos, imaginar futurs possibles i desafiar la nostra comprensió de la tecnologia, la humanitat i l\'univers.',
    'about.feature1.title': 'Cinema d\'Avantguarda',
    'about.feature1.description': 'Descobreix l\'últim en cinematografia de ciència-ficció amb estrenes, documentals i obres experimentals que empuixen els límits de la narrativa.',
    'about.feature2.title': 'Tecnologia Immersiva',
    'about.feature2.description': 'Experimenta pel·lícules amb sistemes de projecció d\'última generació, experiències VR i instal·lacions interactives que donen vida a les històries.',
    'about.feature3.title': 'Comunitat Global',
    'about.feature3.description': 'Connecta amb cineastes, fanàtics i professionals de la indústria de tot el món que comparteixen la passió per la ciència-ficció.',
    'about.feature4.title': 'Enfocament Internacional',
    'about.feature4.description': 'Mostrant veus i perspectives diverses del cinema de ciència-ficció global, amb pel·lícules de cineastes emergents i establerts.',
    
    // Location
    'location.title': 'Ubicació del Festival',
    'location.description': 'Uneix-te a nosaltres al impressionant venue CineBaix al cor de Barcelona, amb sales de projecció i espais d\'exhibició d\'última generació.',
    'location.venue': 'CineBaix Barcelona',
    'location.address': 'Adreça',
    'location.phone': 'Telèfon',
    'location.email': 'Email',
    'location.hours': 'Horaris del Festival',
    'location.hours.value': '10:00 - 23:00 Diari',
    'location.transport': 'Transport públic: Metro L1 (Hostafrancs), Línies d\'autobús H16, 23, 32. Pàrquing disponible a prop al Parking BSM Sants.',
    'location.getting': 'Com Arribar',
    'location.metro': 'Metro: Línia L1 Vermella - Estació Hostafrancs (5 min caminant)',
    'location.bus': 'Autobús: Línies H16, 23, 32 - Parada Lleida/Gran Via',
    'location.airport': 'Aeroport: 30 minuts amb Aerobús + Metro',
    'location.parking': 'Pàrquing: BSM Sants (2 carrers)',
    'location.exterior': 'Vista Exterior',
    'location.interior': 'Sala de Projecció',
    
    // Footer
    'footer.description': 'El festival de cinema de ciència-ficció més important de Barcelona, explorant el futur del cinema des de 2020.',
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
  const [language, setLanguage] = useState<Language>('en');

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