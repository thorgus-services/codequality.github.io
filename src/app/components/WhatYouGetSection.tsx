import { CheckCircle2 } from "lucide-react";

export function WhatYouGetSection() {
  const benefits = [
    "Score de qualidade de IA (0-100)",
    "Top 3 riscos identificados",
    "Plano de ação prioritário",
    "Benchmark anônimo",
    'Template de PRP com regras de engenharia',
    'Guia Rápido: "Como revisar código de IA sem ser Sênior"',
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
          O que você recebe no diagnóstico gratuito
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
            GERAR MEU DIAGNÓSTICO →
          </button>
        </div>
      </div>
    </section>
  );
}