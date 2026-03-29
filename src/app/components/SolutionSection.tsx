import { Target, BarChart3, Lock, BookOpen } from "lucide-react";
import { useTranslation } from "../context/TranslationContext";

export function SolutionSection() {
  const { t } = useTranslation();

  return (
    <section id="como-funciona" className="py-[var(--section-padding-mobile)] md:py-[var(--section-padding-desktop)] bg-[var(--bg-gray)]">
      <div className="max-w-[var(--container-max)] mx-auto px-6">
        <h2 className="text-[24px] md:text-[32px] leading-[32px] md:leading-[40px] font-semibold text-[var(--text-dark)] text-center mb-12">
          {t("solutionSection.title")}
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white border border-[var(--border-light)] rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4 mb-4">
              <Target className="text-[#3B82F6] flex-shrink-0" size={32} />
              <h3 className="text-lg font-semibold text-[var(--text-dark)]">
                {t("solutionSection.pillars.1.title")}
              </h3>
            </div>
            <p className="text-[var(--text-body)] mb-4 leading-relaxed">
              {t("solutionSection.pillars.1.description")}
            </p>
            <div className="text-sm font-medium text-[var(--primary-green)] bg-green-50 p-3 rounded-lg">
              ✓ {t("solutionSection.pillars.1.benefit")}
            </div>
          </div>

          <div className="bg-white border border-[var(--border-light)] rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4 mb-4">
              <BarChart3 className="text-[#3B82F6] flex-shrink-0" size={32} />
              <h3 className="text-lg font-semibold text-[var(--text-dark)]">
                {t("solutionSection.pillars.2.title")}
              </h3>
            </div>
            <p className="text-[var(--text-body)] mb-4 leading-relaxed">
              {t("solutionSection.pillars.2.description")}
            </p>
            <div className="text-sm font-medium text-[var(--primary-green)] bg-green-50 p-3 rounded-lg">
              ✓ {t("solutionSection.pillars.2.benefit")}
            </div>
          </div>

          <div className="bg-white border border-[var(--border-light)] rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4 mb-4">
              <Lock className="text-[#3B82F6] flex-shrink-0" size={32} />
              <h3 className="text-lg font-semibold text-[var(--text-dark)]">
                {t("solutionSection.pillars.3.title")}
              </h3>
            </div>
            <p className="text-[var(--text-body)] mb-4 leading-relaxed">
              {t("solutionSection.pillars.3.description")}
            </p>
            <div className="text-sm font-medium text-[var(--primary-green)] bg-green-50 p-3 rounded-lg">
              ✓ {t("solutionSection.pillars.3.benefit")}
            </div>
          </div>

          <div className="bg-white border border-[var(--border-light)] rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4 mb-4">
              <BookOpen className="text-[#3B82F6] flex-shrink-0" size={32} />
              <h3 className="text-lg font-semibold text-[var(--text-dark)]">
                {t("solutionSection.pillars.4.title")}
              </h3>
            </div>
            <p className="text-[var(--text-body)] mb-4 leading-relaxed">
              {t("solutionSection.pillars.4.description")}
            </p>
            <div className="text-sm font-medium text-[var(--primary-green)] bg-green-50 p-3 rounded-lg">
              ✓ {t("solutionSection.pillars.4.benefit")}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
