import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';

const GA_TRACKING_ID = import.meta.env.VITE_GA_TRACKING_ID;

export const useGoogleAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Initialize Google Analytics if tracking ID is provided
    if (GA_TRACKING_ID) {
      ReactGA.initialize(GA_TRACKING_ID);
    }
  }, []);

  useEffect(() => {
    // Track page views on route changes
    if (GA_TRACKING_ID) {
      ReactGA.send('pageview', {
        page: location.pathname + location.search,
      });
    }
  }, [location]);
};

