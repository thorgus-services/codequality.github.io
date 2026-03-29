import { TrendingDown, GraduationCap, Shield, BarChart3 } from "lucide-react";
import { useTranslation } from "../context/TranslationContext";

export function ProblemSection() {
  const { t } = useTranslation();

  return (
    <section className="py-[var(--section-padding-mobile)] md:py-[var(--section-padding-desktop)] bg-white">
      <div className="max-w-[var(--container-max)] mx-auto px-6">
        <h2 className="text-[24px] md:text-[32px] leading-[32px] md:leading-[40px] font-semibold text-[var(--text-dark)] text-center mb-12">
          {t("problemSection.title")}
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white border border-[var(--border-light)] rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-semibold text-[var(--text-dark)] mb-4">
              {t("problemSection.painPoints.1.title")}
            </h3>
            <p className="text-[var(--text-body)] mb-4 leading-relaxed">
              {t("problemSection.painPoints.1.description")}
            </p>
            <div className="text-sm font-medium text-[var(--error-red)] bg-red-50 p-3 rounded-lg">
              {t("problemSection.painPoints.1.impact")}
            </div>
          </div>
          <div className="bg-white border border-[var(--border-light)] rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-semibold text-[var(--text-dark)] mb-4">
              {t("problemSection.painPoints.2.title")}
            </h3>
            <p className="text-[var(--text-body)] mb-4 leading-relaxed">
              {t("problemSection.painPoints.2.description")}
            </p>
            <div className="text-sm font-medium text-[var(--error-red)] bg-red-50 p-3 rounded-lg">
              {t("problemSection.painPoints.2.impact")}
            </div>
          </div>
          <div className="bg-white border border-[var(--border-light)] rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-semibold text-[var(--text-dark)] mb-4">
              {t("problemSection.painPoints.3.title")}
            </h3>
            <p className="text-[var(--text-body)] mb-4 leading-relaxed">
              {t("problemSection.painPoints.3.description")}
            </p>
            <div className="text-sm font-medium text-[var(--error-red)] bg-red-50 p-3 rounded-lg">
              {t("problemSection.painPoints.3.impact")}
            </div>
          </div>
        </div>

        <div className="bg-[var(--bg-light)] border border-[#3B82F6]/20 rounded-xl p-6 text-center">
          <p className="text-[var(--text-dark)] font-medium flex items-center justify-center gap-2 flex-wrap">
            <BarChart3 className="text-[#3B82F6]" size={24} />
            <span className="text-lg">
              {t("problemSection.stat")}
            </span>
          </p>
          <a
            href="https://newsroom.ibm.com/2024-05-16-IBM-Study-As-CEOs-Race-Towards-Gen-AI-Adoption,-Questions-Around-Workforce-and-Culture-Persist"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#3B82F6] text-sm mt-2 hover:underline inline-block"
          >
            {t("problemSection.source")}
          </a>
        </div>
      </div>
    </section>
  );
}
