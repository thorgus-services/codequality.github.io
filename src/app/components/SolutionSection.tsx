import { Target, BarChart3, Lock, BookOpen } from "lucide-react";

export function SolutionSection() {
  const pillars = [
    {
      icon: Target,
      title: "🎯 GOVERNANÇA DE QUALIDADE",
      description:
        "Regras automatizadas de DDD, Clean Code, TDD e Arquitetura Hexagonal aplicadas em código gerado por IA.",
      benefit: "Redução de ~30% no tempo de revisão de código",
    },
    {
      icon: BarChart3,
      title: "📊 VISIBILIDADE PARA DECISORES",
      description:
        "Dashboards executivos que traduzem qualidade técnica em métricas de negócio (ROI, risco, time-to-market).",
      benefit: "CEO/GPM entende o impacto sem jargão técnico",
    },
    {
      icon: Lock,
      title: "🔐 PRIVACY-BY-DESIGN",
      description:
        "Anonimização automática, criptografia e opção de deploy on-premise para ambientes regulados (fintech, saúde, gov).",
      benefit: "Conformidade LGPD desde o primeiro dia",
    },
    {
      icon: BookOpen,
      title: "📚 CAPACITAÇÃO INTEGRADA",
      description:
        "Guias rápidos, templates de PRP e workshops de onboarding para elevar a maturidade do time em IA.",
      benefit: "57% mais investimento em treinamento = alto desempenho",
    },
  ];

  return (
    <section id="como-funciona" className="py-16 md:py-20 bg-[#F8FAFC]">
      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className="text-[24px] md:text-[32px] leading-[32px] md:leading-[40px] font-semibold text-[#1E293B] text-center mb-12">
          CodeQuality AI Não Substitui Seu Time. Empodera Ele.
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="bg-white border border-[#E2E8F0] rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4 mb-4">
                <pillar.icon className="text-[#3B82F6] flex-shrink-0" size={32} />
                <h3 className="text-lg font-semibold text-[#1E293B]">
                  {pillar.title}
                </h3>
              </div>
              <p className="text-[#475569] mb-4 leading-relaxed">
                {pillar.description}
              </p>
              <div className="text-sm font-medium text-[#16A34A] bg-green-50 p-3 rounded-lg">
                ✓ {pillar.benefit}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
