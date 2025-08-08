import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import { AnalyticsProps, PageViewEvent } from '../types/analytics.types';
import { initializeGTM, trackPageView, getCurrentLanguage } from '../utils/analytics';

export const Analytics: React.FC<AnalyticsProps> = ({
  pageTitle,
  pagePath,
  cityName,
  customDimensions = {}
}) => {
  const router = useRouter();
  const { i18n } = useTranslation();

  // Initialize GTM on component mount
  useEffect(() => {
    initializeGTM();
  }, []);

  // Track page view when component mounts or props change
  useEffect(() => {
    const currentLanguage = i18n.language || getCurrentLanguage();
    const currentPath = pagePath || router.asPath;
    const currentTitle = pageTitle || document.title || 'Cinema Guide';

    const pageViewEvent: PageViewEvent = {
      pageTitle: currentTitle,
      pagePath: currentPath,
      cityName: cityName,
      language: currentLanguage,
      customDimensions: {
        ...customDimensions,
        city: cityName || '',
        language: currentLanguage,
        page_type: cityName ? 'city_page' : 'home_page'
      }
    };

    // Track page view after a short delay to ensure GTM is loaded
    const timer = setTimeout(() => {
      trackPageView(pageViewEvent);
    }, 100);

    return () => clearTimeout(timer);
  }, [pageTitle, pagePath, cityName, customDimensions, i18n.language, router.asPath]);

  // Track route changes
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      const currentLanguage = i18n.language || getCurrentLanguage();
      const pageViewEvent: PageViewEvent = {
        pageTitle: document.title || 'Cinema Guide',
        pagePath: url,
        cityName: cityName,
        language: currentLanguage,
        customDimensions: {
          ...customDimensions,
          city: cityName || '',
          language: currentLanguage,
          page_type: cityName ? 'city_page' : 'home_page'
        }
      };

      trackPageView(pageViewEvent);
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router, cityName, customDimensions, i18n.language]);

  // This component doesn't render anything visible
  return null;
};

export default Analytics; 