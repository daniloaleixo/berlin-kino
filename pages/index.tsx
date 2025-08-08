import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { GetStaticProps } from 'next';
import { getAllCities } from '../src/utils/cityConfig';
import Analytics from '../src/components/Analytics';

interface HomePageProps {
  cities: ReturnType<typeof getAllCities>;
}

export default function HomePage({ cities }: HomePageProps) {
  return (
    <>
      <Head>
        <title>Cinema Guide - Find Movie Schedules in German Cities</title>
        <meta name="description" content="Discover cinema schedules and movie listings across major German cities. Browse Berlin, Frankfurt, Munich and more." />
        
        {/* Open Graph */}
        <meta property="og:title" content="Cinema Guide - Find Movie Schedules in German Cities" />
        <meta property="og:description" content="Discover cinema schedules and movie listings across major German cities. Browse Berlin, Frankfurt, Munich and more." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kino-berlin.com" />
        <meta property="og:image" content="/logo.png" />
        
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Cinema Guide - Find Movie Schedules in German Cities" />
        <meta name="twitter:description" content="Discover cinema schedules and movie listings across major German cities. Browse Berlin, Frankfurt, Munich and more." />
        <meta name="twitter:image" content="/logo.png" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://kino-berlin.com" />
      </Head>
      
      <div className="min-h-screen bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">
              Cinema Guide
            </h1>
            <p className="text-xl text-gray-300">
              Find movie schedules and cinema listings in German cities
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {cities.map((city) => (
              <Link
                key={city.name}
                href={city.path}
                className="block p-6 bg-gray-900 border border-gray-700 rounded-lg hover:border-red-400 transition-colors"
              >
                <h2 className="text-2xl font-bold mb-2">{city.displayName}</h2>
                <p className="text-gray-400 mb-4">
                  Discover cinema schedules and movie listings in {city.displayName}
                </p>
                <div className="text-sm text-gray-500">
                  {city.neighborhoods.length} neighborhoods available
                </div>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-12 text-gray-500">
            <p>© 2024 Cinema Guide. Developed with ❤️ for the German cinema community.</p>
          </div>
        </div>
      </div>
      
      {/* Home page analytics */}
      <Analytics 
        pageTitle="Cinema Guide - Home"
        pagePath="/"
        customDimensions={{
          page_type: "home_page",
          region: "germany",
          available_cities: cities.length.toString()
        }}
      />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      cities: getAllCities(),
    },
  };
}; 