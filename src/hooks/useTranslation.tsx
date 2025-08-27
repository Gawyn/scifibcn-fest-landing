import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';

export type Language = 'en' | 'es' | 'ca';

interface TranslationContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  getLocalizedPath: (path: string) => string;
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    'nav.schedule': 'Schedule',
    'nav.films': 'Films',
    'nav.rules': 'Rules & Terms',
    
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
    'footer.press': 'Press Kit',
    
    // Rules & Terms
    'rules.title': 'Rules & Terms',
    'rules.genre.title': 'Genre',
    'rules.genre.content': 'All submitted short films must clearly belong to the science fiction genre or explore speculative elements connected to science fiction. Works from adjacent genres (fantasy, horror, experimental) will only be considered if they have a strong science-fiction component.',
    'rules.completion.title': 'Completion Date',
    'rules.completion.content': 'Films must have been completed after December 31, 2024.',
    'rules.duration.title': 'Duration',
    'rules.duration.content': 'The maximum runtime is 20 minutes, including credits.',
    'rules.format.title': 'Format & Screening',
    'rules.format.content': 'Films must be submitted via FilmFreeWay with an online screener (Vimeo, FilmFreeWay player, etc.). If selected, the festival may request a high-quality screening copy (digital file, .mov or .mp4, minimum resolution Full HD 1080p).',
    'rules.language.title': 'Language',
    'rules.language.content': 'Films not in English, Catalan, or Spanish must include English subtitles at the time of submission. If selected, the festival may request additional subtitles (Catalan/Spanish) for screening purposes.',
    'rules.premiere.title': 'Premiere Status',
    'rules.premiere.content': 'There is no premiere requirement. Films that have screened at other festivals or online are still eligible, provided they meet the other rules.',
    'rules.submission.title': 'Submission Rights',
    'rules.submission.content': 'The person submitting the film must own the rights or have full authorization to submit the work to the festival.',
    'rules.screenings.title': 'Screenings & Promotion',
    'rules.screenings.content': 'By submitting, filmmakers grant SciFiBCN the right to screen the film during the festival and to use stills, posters, and short clips (up to 30 seconds) for promotional purposes.',
    'rules.awards.title': 'Awards',
    'rules.awards.content': 'Films in the Official Competition are eligible for the following awards:',
    'rules.awards.bestFilm': 'Best Short Film – Official Competition',
    'rules.awards.audience': 'Audience Award',
    'rules.awards.jury': 'The Jury\'s decision is final.',
    'rules.acceptance.title': 'Acceptance of Rules',
    'rules.acceptance.content': 'Submission of a film to SciFiBCN implies full acceptance of these rules and terms. The festival reserves the right to resolve any cases not covered here.'
  },
  es: {
    // Navigation
    'nav.schedule': 'Programación',
    'nav.films': 'Películas',
    'nav.rules': 'Reglas y Términos',
    
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
    'footer.press': 'Kit de Prensa',
    
    // Rules & Terms
    'rules.title': 'Reglas y Condiciones',
    'rules.genre.title': 'Género',
    'rules.genre.content': 'Todos los cortometrajes presentados deben pertenecer claramente al género de ciencia ficción o explorar elementos especulativos conectados con la ciencia ficción. Las obras de géneros adyacentes (fantasía, terror, experimental) solo serán consideradas si tienen un fuerte componente de ciencia ficción.',
    'rules.completion.title': 'Fecha de Finalización',
    'rules.completion.content': 'Las películas deben haber sido completadas después del 31 de diciembre de 2024.',
    'rules.duration.title': 'Duración',
    'rules.duration.content': 'La duración máxima es de 20 minutos, incluyendo créditos.',
    'rules.format.title': 'Formato y Proyección',
    'rules.format.content': 'Las películas deben ser presentadas a través de FilmFreeWay con un screener online (Vimeo, reproductor de FilmFreeWay, etc.). Si son seleccionadas, el festival puede solicitar una copia de proyección de alta calidad (archivo digital, .mov o .mp4, resolución mínima Full HD 1080p).',
    'rules.language.title': 'Idioma',
    'rules.language.content': 'Las películas que no estén en inglés, catalán o español deben incluir subtítulos en inglés al momento de la presentación. Si son seleccionadas, el festival puede solicitar subtítulos adicionales (catalán/español) para fines de proyección.',
    'rules.premiere.title': 'Estado de Estreno',
    'rules.premiere.content': 'No hay requisito de estreno. Las películas que se hayan proyectado en otros festivales o en línea siguen siendo elegibles, siempre que cumplan con las otras reglas.',
    'rules.submission.title': 'Derechos de Presentación',
    'rules.submission.content': 'La persona que presenta la película debe poseer los derechos o tener autorización completa para presentar la obra al festival.',
    'rules.screenings.title': 'Proyecciones y Promoción',
    'rules.screenings.content': 'Al presentar, los cineastas otorgan a SciFiBCN el derecho de proyectar la película durante el festival y de usar fotogramas, carteles y clips cortos (hasta 30 segundos) para fines promocionales.',
    'rules.awards.title': 'Premios',
    'rules.awards.content': 'Las películas en la Competencia Oficial son elegibles para los siguientes premios:',
    'rules.awards.bestFilm': 'Mejor Cortometraje – Competencia Oficial',
    'rules.awards.audience': 'Premio del Público',
    'rules.awards.jury': 'La decisión del Jurado es final.',
    'rules.acceptance.title': 'Aceptación de las Reglas',
    'rules.acceptance.content': 'La presentación de una película a SciFiBCN implica la aceptación completa de estas reglas y términos. El festival se reserva el derecho de resolver cualquier caso no cubierto aquí.'
  },
  ca: {
    // Navigation
    'nav.schedule': 'Programació',
    'nav.films': 'Pel·lícules',
    'nav.rules': 'Regles i condicions',
    
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
    'footer.press': 'Kit de Premsa',
    
    // Rules & Terms
    'rules.title': 'Regles i Condicions',
    'rules.genre.title': 'Gènere',
    'rules.genre.content': 'Tots els curtmetratges presentats han de pertànyer clarament al gènere de ciència-ficció o explorar elements especulatius connectats amb la ciència-ficció. Les obres de gèneres adjacents (fantasia, terror, experimental) només seran considerades si tenen un fort component de ciència-ficció.',
    'rules.completion.title': 'Data de Finalització',
    'rules.completion.content': 'Les pel·lícules han d\'haver estat completades després del 31 de desembre de 2024.',
    'rules.duration.title': 'Durada',
    'rules.duration.content': 'La durada màxima és de 20 minuts, incloent crèdits.',
    'rules.format.title': 'Format i Projecció',
    'rules.format.content': 'Les pel·lícules han de ser presentades a través de FilmFreeWay amb un screener online (Vimeo, reproductor de FilmFreeWay, etc.). Si són seleccionades, el festival pot sol·licitar una còpia de projecció d\'alta qualitat (arxiu digital, .mov o .mp4, resolució mínima Full HD 1080p).',
    'rules.language.title': 'Idioma',
    'rules.language.content': 'Les pel·lícules que no estiguin en anglès, català o espanyol han d\'incloure subtítols en anglès al moment de la presentació. Si són seleccionades, el festival pot sol·licitar subtítols addicionals (català/espanyol) per a fins de projecció.',
    'rules.premiere.title': 'Estat d\'Estrena',
    'rules.premiere.content': 'No hi ha requisit d\'estrena. Les pel·lícules que s\'hagin projectat en altres festivals o en línia segueixen sent elegibles, sempre que compleixin amb les altres regles.',
    'rules.submission.title': 'Drets de Presentació',
    'rules.submission.content': 'La persona que presenta la pel·lícula ha de posseir els drets o tenir autorització completa per presentar l\'obra al festival.',
    'rules.screenings.title': 'Projeccions i Promoció',
    'rules.screenings.content': 'En presentar, els cineastes atorguen a SciFiBCN el dret de projectar la pel·lícula durant el festival i d\'usar fotogrames, cartells i clips curts (fins a 30 segons) per a fins promocionals.',
    'rules.awards.title': 'Premis',
    'rules.awards.content': 'Les pel·lícules en la Competència Oficial són elegibles per als següents premis:',
    'rules.awards.bestFilm': 'Millor Curtmetratge – Competència Oficial',
    'rules.awards.audience': 'Premi del Públic',
    'rules.awards.jury': 'La decisió del Jurat és final.',
    'rules.acceptance.title': 'Acceptació de les Regles',
    'rules.acceptance.content': 'La presentació d\'una pel·lícula a SciFiBCN implica l\'acceptació completa d\'aquestes regles i termes. El festival es reserva el dret de resoldre qualsevol cas no cobert aquí.'
  }
};

interface TranslationProviderProps {
  children: ReactNode;
}

export const TranslationProvider = ({ children }: TranslationProviderProps) => {
  const { locale } = useParams<{ locale: string }>();
  const navigate = useNavigate();
  const location = useLocation();
  const [language, setLanguage] = useState<Language>('ca');

  // Set language from URL parameter
  useEffect(() => {
    if (locale && ['en', 'es', 'ca'].includes(locale)) {
      setLanguage(locale as Language);
    }
  }, [locale]);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  const getLocalizedPath = (path: string): string => {
    // Remove leading slash if present
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    return `/${language}/${cleanPath}`;
  };

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    // Get current path without locale
    const currentPath = location.pathname.replace(/^\/[a-z]{2}/, '') || '/';
    const newPath = currentPath === '/' ? `/${lang}` : `/${lang}${currentPath}`;
    navigate(newPath, { replace: true });
  };

  return (
    <TranslationContext.Provider value={{ language, setLanguage: handleSetLanguage, t, getLocalizedPath }}>
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