import { ArrowLeft, ExternalLink, Film, MapPin, Users, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface InformationPageProps {
  onBack: () => void;
}

export const InformationPage = ({ onBack }: InformationPageProps) => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="bg-black border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center">
            <button
              onClick={onBack}
              className="flex items-center text-red-400 hover:text-red-300 transition-colors mr-4"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              {t('information.back')}
            </button>
            <h1 className="text-xl font-medium">
              {t('information.title')}
            </h1>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="space-y-8">
          {/* Mission Section */}
          <section className="bg-gray-900 border border-gray-700 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <Film className="w-6 h-6 text-red-400 mr-3" />
              <h2 className="text-2xl font-bold">
                {t('information.mission.title')}
              </h2>
            </div>
            <p className="text-gray-300 leading-relaxed">
              {t('information.mission.description')}
            </p>
          </section>

          {/* Why We Created This */}
          <section className="bg-gray-900 border border-gray-700 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <Users className="w-6 h-6 text-red-400 mr-3" />
              <h2 className="text-2xl font-bold">
                {t('information.why.title')}
              </h2>
            </div>
            <div className="space-y-4 text-gray-300">
              <p className="leading-relaxed">
                {t('information.why.description')}
              </p>
              <p className="leading-relaxed">
                {t('information.why.platformGoals')}
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>{t('information.why.goal1')}</li>
                <li>{t('information.why.goal2')}</li>
                <li>{t('information.why.goal3')}</li>
                <li>{t('information.why.goal4')}</li>
              </ul>
            </div>
          </section>

          {/* Berlin Cinema Scene */}
          <section className="bg-gray-900 border border-gray-700 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <MapPin className="w-6 h-6 text-red-400 mr-3" />
              <h2 className="text-2xl font-bold">
                {t('information.cinemaScene.title')}
              </h2>
            </div>
            <p className="text-gray-300 leading-relaxed">
              {t('information.cinemaScene.description')}
            </p>
          </section>

          {/* Contact & Links */}
          <section className="bg-gray-900 border border-gray-700 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <Globe className="w-6 h-6 text-red-400 mr-3" />
              <h2 className="text-2xl font-bold">
                {t('information.contact.title')}
              </h2>
            </div>
            <div className="space-y-4">
              <p className="text-gray-300">
                {t('information.contact.description')}
              </p>
              <a
                href="https://daniloaleixo.github.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-red-400 hover:text-red-300 transition-colors"
              >
                <span className="mr-2">daniloaleixo.github.io/</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </section>

          {/* Footer Note */}
          <div className="text-center text-gray-500 text-sm">
            <p>
              {t('information.footer')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}; 