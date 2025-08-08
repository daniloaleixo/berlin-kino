import React from 'react';
import Head from 'next/head';
import { GetStaticProps } from 'next';
import { cityConfigs } from '../../src/utils/cityConfig';
import CinemaWebsite from '../../src/cinema-website';
import Analytics from '../../src/components/Analytics';

interface MunichPageProps {
  cityConfig: typeof cityConfigs.munich;
}

export default function MunichPage({ cityConfig }: MunichPageProps) {
  return (
    <>
      <Head>
        <title>{cityConfig.seo.title}</title>
        <meta name="description" content={cityConfig.seo.description} />
        
        {/* Open Graph */}
        <meta property="og:title" content={cityConfig.seo.title} />
        <meta property="og:description" content={cityConfig.seo.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={cityConfig.seo.url} />
        <meta property="og:image" content="/logo.png" />
        
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={cityConfig.seo.title} />
        <meta name="twitter:description" content={cityConfig.seo.description} />
        <meta name="twitter:image" content="/logo.png" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(cityConfig.seo.structuredData),
          }}
        />
        
        {/* Canonical URL */}
        <link rel="canonical" href={cityConfig.seo.url} />
      </Head>
      
      <CinemaWebsite cityConfig={cityConfig} />
      
      {/* Munich-specific analytics */}
      <Analytics 
        pageTitle="Munich Cinema Guide"
        pagePath="/munich"
        cityName="munich"
        customDimensions={{
          city: "munich",
          region: "germany",
          page_type: "city_page"
        }}
      />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      cityConfig: cityConfigs.munich,
    },
  };
}; 