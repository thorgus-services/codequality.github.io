import { Lock, ShieldCheck, FileCheck, BarChart3, RefreshCw } from "lucide-react";
import { useTranslation } from "../context/TranslationContext";

interface HeroProps {
  onOpenValidationModal: () => void;
}

export function Hero({ onOpenValidationModal }: HeroProps) {
  const { t } = useTranslation();

  const scrollToForm = () => {
    const element = document.getElementById("diagnosis-form");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-[var(--primary-navy)] to-[#3B82F6] text-white py-[var(--section-padding-mobile)] md:py-[var(--section-padding-desktop)]">
      <div className="max-w-[var(--container-max)] mx-auto px-6">
        <div className="max-w-[900px] mx-auto text-center">
          <h1 className="hero-h1 font-semibold mb-6">
            {t("hero.title")}
          </h1>
          <h2 className="text-[var(--body-size)] md:text-[var(--body-large-size)] leading-[var(--body-height)] md:leading-[var(--body-large-height)] text-white/90 mb-10">
            {t("hero.subtitle")}
          </h2>

          <button
            onClick={scrollToForm}
            className="bg-[var(--primary-green)] hover:bg-[var(--primary-green-hover)] text-white px-8 py-4 rounded-lg text-lg font-semibold mb-12 transition-all hover:shadow-2xl hover:-translate-y-1 inline-flex items-center gap-2"
          >
            {t("hero.cta")}
          </button>

          {/* Trust Badges - 2 Column Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Card 1 - Privacy-by-Design */}
            <div className="bg-white/10 border border-white/30 rounded-xl p-6 backdrop-blur-sm text-left min-h-[320px] flex flex-col">
              <h3 className="text-lg font-semibold mb-2">{t("hero.privacyBadge.title")}</h3>
              <p className="text-sm text-white/90 mb-4">
                {t("hero.privacyBadge.description")}
              </p>
              <ul className="space-y-3 flex-1">
                <li className="flex items-start gap-3">
                  <Lock className="flex-shrink-0 mt-0.5" size={20} />
                  <span className="text-sm text-white/85 leading-relaxed">
                    {t("hero.privacyBadge.items.1")}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <ShieldCheck className="flex-shrink-0 mt-0.5" size={20} />
                  <span className="text-sm text-white/85 leading-relaxed">
                    {t("hero.privacyBadge.items.2")}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <FileCheck className="flex-shrink-0 mt-0.5" size={20} />
                  <span className="text-sm text-white/85 leading-relaxed">
                    {t("hero.privacyBadge.items.3")}
                  </span>
                </li>
              </ul>
            </div>

            {/* Card 2 - Em Desenvolvimento Ativo */}
            <div className="bg-white/10 border border-white/30 rounded-xl p-6 backdrop-blur-sm text-left min-h-[320px] flex flex-col">
              <h3 className="text-lg font-semibold mb-2">{t("hero.developmentBadge.title")}</h3>
              <p className="text-sm text-white/90 mb-4">
                {t("hero.developmentBadge.description")}
              </p>
              <ul className="space-y-3 flex-1 mb-4">
                <li className="flex items-start gap-3">
                  <BarChart3 className="flex-shrink-0 mt-0.5" size={20} />
                  <span className="text-sm text-white/85 leading-relaxed">
                    {t("hero.developmentBadge.items.1")}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <ShieldCheck className="flex-shrink-0 mt-0.5" size={20} />
                  <span className="text-sm text-white/85 leading-relaxed">
                    {t("hero.developmentBadge.items.2")}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <RefreshCw className="flex-shrink-0 mt-0.5" size={20} />
                  <span className="text-sm text-white/85 leading-relaxed">
                    {t("hero.developmentBadge.items.3")}
                  </span>
                </li>
              </ul>
              <button
                onClick={onOpenValidationModal}
                className="border-2 border-[var(--secondary-button-border)] text-[var(--secondary-button-text)] hover:bg-[var(--secondary-button-hover)] px-4 py-2.5 rounded-lg font-semibold transition-all text-sm w-full"
              >
                {t("hero.developmentBadge.cta")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}