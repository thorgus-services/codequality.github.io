import { TrendingDown, GraduationCap, Shield, BarChart3 } from "lucide-react";

export function ProblemSection() {
  const painPoints = [
    {
      icon: TrendingDown,
      title: "📉 CONFIANÇA BAIXA",
      description:
        "43% dos desenvolvedores não confiam totalmente no código gerado por IA. Resultado: revisão manual excessiva ou, pior, deploy sem validação adequada.",
      impact: "Bugs em produção + retrabalho não medido",
    },
    {
      icon: GraduationCap,
      title: "🎓 FALTA DE CAPACITAÇÃO",
      description:
        "42% das empresas não investem em treinamento de IA. Times de alto desempenho investem 57% em capacitação, vs. apenas 20% dos de baixo desempenho.",
      impact: "Subutilização da ferramenta + resistência cultural",
    },
    {
      icon: Shield,
      title: "🛡️ RISCO DE SEGURANÇA E PRIVACIDADE",
      description:
        "40% dos líderes citam segurança como preocupação principal. Código sensível pode vazar para modelos externos sem controles adequados de governança.",
      impact: "Multas (LGPD), vazamentos, perda de confiança",
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className="text-[24px] md:text-[32px] leading-[32px] md:leading-[40px] font-semibold text-[#1E293B] text-center mb-12">
          O Custo Oculto da IA no Desenvolvimento de Software
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {painPoints.map((point, index) => (
            <div
              key={index}
              className="bg-white border border-[#E2E8F0] rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-lg font-semibold text-[#1E293B] mb-4">
                {point.title}
              </h3>
              <p className="text-[#475569] mb-4 leading-relaxed">
                {point.description}
              </p>
              <div className="text-sm font-medium text-[#DC2626] bg-red-50 p-3 rounded-lg">
                Impact: {point.impact}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[#EFF6FF] border border-[#3B82F6]/20 rounded-xl p-6 text-center">
          <p className="text-[#1E293B] font-medium flex items-center justify-center gap-2 flex-wrap">
            <BarChart3 className="text-[#3B82F6]" size={24} />
            <span className="text-lg">
              64% dos CEOs afirmam: o sucesso da IA depende mais das PESSOAS do
              que da tecnologia.
            </span>
          </p>
          <p className="text-[#64748B] text-sm mt-2">(Fonte: EY 2025)</p>
        </div>
      </div>
    </section>
  );
}
