import { CheckCircle2 } from "lucide-react";

export function WhatYouGetSection() {
  const benefits = [
    "Score de Qualidade de IA (0-100)",
    "Top 3 Riscos Identificados",
    "Plano de Ação Prioritário",
    "Benchmark Anônimo",
    'Template de PRP com Regras de Engenharia',
    'Guia Rápido: "Como Revisar Código de IA Sem Ser Senior"',
  ];

  const scrollToForm = () => {
    const element = document.getElementById("diagnosis-form");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className="text-[24px] md:text-[32px] leading-[32px] md:leading-[40px] font-semibold text-[#1E293B] text-center mb-12">
          O Que Você Recebe No Diagnóstico Gratuito
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-[900px] mx-auto mb-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-3">
              <CheckCircle2
                className="text-[#16A34A] flex-shrink-0 mt-1"
                size={24}
              />
              <p className="text-[#475569] text-lg">{benefit}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={scrollToForm}
            className="bg-[#16A34A] hover:bg-[#15803D] text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:shadow-lg hover:-translate-y-1 inline-flex items-center gap-2"
          >
            GERAR MEU DIAGNÓSTICO →
          </button>
        </div>
      </div>
    </section>
  );
}