import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useTranslation } from '@/hooks/useTranslation';
import { HEADER_COLOR } from '@/lib/utils';

const RulesAndTerms = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8" style={{ color: HEADER_COLOR }}>
              {t('rules.title')}
            </h1>
            
            <div className="prose prose-lg max-w-none">
              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-semibold mb-4" style={{ color: HEADER_COLOR }}>
                    {t('rules.genre.title')}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {t('rules.genre.content')}
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4" style={{ color: HEADER_COLOR }}>
                    {t('rules.completion.title')}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {t('rules.completion.content')}
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4" style={{ color: HEADER_COLOR }}>
                    {t('rules.duration.title')}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {t('rules.duration.content')}
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4" style={{ color: HEADER_COLOR }}>
                    {t('rules.format.title')}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {t('rules.format.content')}
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4" style={{ color: HEADER_COLOR }}>
                    {t('rules.language.title')}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {t('rules.language.content')}
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4" style={{ color: HEADER_COLOR }}>
                    {t('rules.premiere.title')}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {t('rules.premiere.content')}
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4" style={{ color: HEADER_COLOR }}>
                    {t('rules.submission.title')}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {t('rules.submission.content')}
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4" style={{ color: HEADER_COLOR }}>
                    {t('rules.screenings.title')}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {t('rules.screenings.content')}
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4" style={{ color: HEADER_COLOR }}>
                    {t('rules.awards.title')}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {t('rules.awards.content')}
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li>{t('rules.awards.bestFilm')}</li>
                    <li>{t('rules.awards.audience')}</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    {t('rules.awards.jury')}
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4" style={{ color: HEADER_COLOR }}>
                    {t('rules.acceptance.title')}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {t('rules.acceptance.content')}
                  </p>
                </section>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RulesAndTerms;

