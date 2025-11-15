import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useTranslation } from '@/hooks/useTranslation';

const RulesAndTerms = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-8">
              {t('rules.title')}
            </h1>
            
            <div className="prose prose-lg max-w-none">
              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">
                    {t('rules.genre.title')}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {t('rules.genre.content')}
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">
                    {t('rules.completion.title')}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {t('rules.completion.content')}
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">
                    {t('rules.duration.title')}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {t('rules.duration.content')}
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">
                    {t('rules.format.title')}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {t('rules.format.content')}
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">
                    {t('rules.language.title')}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {t('rules.language.content')}
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">
                    {t('rules.premiere.title')}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {t('rules.premiere.content')}
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">
                    {t('rules.submission.title')}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {t('rules.submission.content')}
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">
                    {t('rules.screenings.title')}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {t('rules.screenings.content')}
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">
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
                  <h2 className="text-2xl font-semibold text-foreground mb-4">
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

