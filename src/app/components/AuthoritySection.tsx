import { Briefcase, Building2, Code2, Cpu, ExternalLink } from "lucide-react";

export function AuthoritySection() {
  const approach = [
    {
      icon: Briefcase,
      text: "14+ anos de experiência coletiva em engenharia de software",
    },
    {
      icon: Building2,
      text: "Arquitetura aplicada em ambientes regulados (fintech, saúde, enterprise)",
    },
    {
      icon: Code2,
      text: "Expertise em padrões: DDD, Arquitetura Hexagonal, Clean Code, TDD",
    },
    {
      icon: Cpu,
      text: "Integrações production-grade com IA: RAG, crewAI, OpenAI, SSE",
    },
  ];

  const technologies = [
    "Python",
    "Kotlin",
    "AWS",
    "DDD",
    "Hexagonal",
    "RAG",
    "crewAI",
    "OpenAI",
    "SSE",
    "BFF",
  ];

  return (
    <section id="autoridade" className="py-[var(--section-padding-mobile)] md:py-[var(--section-padding-desktop)] bg-gradient-to-br from-[var(--bg-light)] to-[var(--bg-gray)]">
      <div className="max-w-[var(--container-max)] mx-auto px-6">
        <h2 className="text-[24px] md:text-[32px] leading-[32px] md:leading-[40px] font-semibold text-[var(--text-dark)] text-center mb-4">
          🛡️ Desenvolvido por especialistas em engenharia de Software Enterprise
        </h2>
        <p className="text-center text-[var(--text-muted)] mb-12 max-w-[800px] mx-auto">
          CodeQuality AI é uma iniciativa da Thorgus, aceleradora de negócios
          com expertise em produtos tech escaláveis.
        </p>

        {/* Content Block 1 - Our Approach */}
        <div className="bg-white border border-[var(--border-light)] rounded-xl p-8 mb-8 shadow-md max-w-[900px] mx-auto">
          <h3 className="text-xl font-semibold text-[var(--text-dark)] mb-6">
            Nossa abordagem combina:
          </h3>
          <ul className="space-y-4">
            {approach.map((item, index) => (
              <li key={index} className="flex items-start gap-4">
                <item.icon className="text-[#3B82F6] flex-shrink-0 mt-1" size={24} />
                <span className="text-[var(--text-body)] leading-relaxed">{item.text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Content Block 2 - Technologies Tag Cloud */}
        <div className="bg-white border border-[var(--border-light)] rounded-xl p-8 shadow-md max-w-[900px] mx-auto mb-8">
          <h3 className="text-xl font-semibold text-[var(--text-dark)] mb-6">
            Tecnologias e padrões que dominamos:
          </h3>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="bg-[var(--bg-light)] text-[var(--text-dark)] px-4 py-2 rounded-lg text-sm font-medium hover:scale-105 hover:shadow-md transition-all cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <a
            href="https://thorgus.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#3B82F6] hover:bg-[var(--primary-navy)] text-white px-8 py-3 rounded-lg font-semibold transition-all hover:shadow-lg hover:-translate-y-1"
          >
            Conheça a Thorgus
            <ExternalLink size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}