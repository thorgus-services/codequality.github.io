import { CheckCircle2 } from "lucide-react";
import { useTranslation } from "../context/TranslationContext";

export function WhatYouGetSection() {
  const { t } = useTranslation();

  const benefits = [
    t("whatYouGetSection.benefits.0"),
    t("whatYouGetSection.benefits.1"),
    t("whatYouGetSection.benefits.2"),
    t("whatYouGetSection.benefits.3"),
    t("whatYouGetSection.benefits.4"),
    t("whatYouGetSection.benefits.5"),
  ];

  const scrollToForm = () => {
    const element = document.getElementById("diagnosis-form");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-[var(--section-padding-mobile)] md:py-[var(--section-padding-desktop)] bg-white">
      <div className="max-w-[var(--container-max)] mx-auto px-6">
        <h2 className="text-[24px] md:text-[32px] leading-[32px] md:leading-[40px] font-semibold text-[var(--text-dark)] text-center mb-12">
          {t("whatYouGetSection.title")}
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-[900px] mx-auto mb-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-3">
              <CheckCircle2
                className="text-[var(--primary-green)] flex-shrink-0 mt-1"
                size={24}
              />
              <p className="text-[var(--text-body)] text-lg">{benefit}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={scrollToForm}
            className="bg-[var(--primary-green)] hover:bg-[var(--primary-green-hover)] text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:shadow-lg hover:-translate-y-1 inline-flex items-center gap-2"
          >
            {t("whatYouGetSection.cta")}
          </button>
        </div>
      </div>
    </section>
  );
}