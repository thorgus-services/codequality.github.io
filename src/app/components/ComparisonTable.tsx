import { Check, X, AlertTriangle } from "lucide-react";

export function ComparisonTable() {
  const features = [
    {
      name: "Geração de código",
      copilot: "full",
      snyk: "none",
      codeQuality: "partial",
    },
    {
      name: "Detecção de vulnerabilidades",
      copilot: "partial",
      snyk: "full",
      codeQuality: "full",
    },
    {
      name: "Regras de arquitetura",
      copilot: "none",
      snyk: "none",
      codeQuality: "full",
    },
    {
      name: "Dashboard executivo",
      copilot: "none",
      snyk: "none",
      codeQuality: "full",
    },
    {
      name: "Capacitação do time",
      copilot: "none",
      snyk: "none",
      codeQuality: "full",
    },
    {
      name: "Privacy-by-Design",
      copilot: "partial",
      snyk: "full",
      codeQuality: "full",
    },
    {
      name: "Deploy on-premise",
      copilot: "none",
      snyk: "partial",
      codeQuality: "full",
    },
  ];

  const renderIcon = (status: string) => {
    if (status === "full") {
      return <Check className="text-[var(--primary-green)] mx-auto" size={20} />;
    }
    if (status === "partial") {
      return <AlertTriangle className="text-[#D97706] mx-auto" size={20} />;
    }
    if (status === "none") {
      return <X className="text-[var(--error-red)] mx-auto" size={20} />;
    }
    return <span className="text-[var(--text-muted)] text-sm">{status}</span>;
  };

  return (
    <section className="py-[var(--section-padding-mobile)] md:py-[var(--section-padding-desktop)] bg-white">
      <div className="max-w-[var(--container-max)] mx-auto px-6">
        <h2 className="text-[24px] md:text-[32px] leading-[32px] md:leading-[40px] font-semibold text-[var(--text-dark)] text-center mb-4">
          Por que CodeQuality AI é diferente?
        </h2>
        <p className="text-center text-[var(--text-muted)] mb-12">
          Não competimos com Copilot ou Snyk. Complementamos eles.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-md">
            <thead>
              <tr className="bg-[var(--text-dark)]">
                <th className="text-left p-4 text-white font-semibold">
                  Capacidade
                </th>
                <th className="text-center p-4 text-white font-semibold">
                  Copilot
                </th>
                <th className="text-center p-4 text-white font-semibold">
                  Snyk
                </th>
                <th className="text-center p-4 font-semibold bg-[var(--primary-green)] text-white">
                  CodeQuality AI
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <tr
                  key={index}
                  className={`border-b border-[var(--border-light)] ${
                    index % 2 === 0 ? "bg-[var(--bg-light)]" : "bg-white"
                  }`}
                >
                  <td className="p-4 text-[var(--text-dark)] font-medium">
                    {feature.name}
                  </td>
                  <td className="p-4 text-center">
                    {renderIcon(feature.copilot)}
                  </td>
                  <td className="p-4 text-center">
                    {renderIcon(feature.snyk)}
                  </td>
                  <td className="p-4 text-center bg-[var(--bg-light)]">
                    {renderIcon(feature.codeQuality)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 bg-[var(--bg-light)] border-l-4 border-[#3B82F6] p-6 rounded-lg">
          <div className="text-[var(--text-dark)] font-medium flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
              <Check className="text-[var(--primary-green)]" size={20} />
              <span>Nativo</span>
            </div>
            <div className="flex items-center gap-2">
              <AlertTriangle className="text-[#D97706]" size={20} />
              <span>Parcial</span>
            </div>
            <div className="flex items-center gap-2">
              <X className="text-[var(--error-red)]" size={20} />
              <span>Não disponível</span>
            </div>
          </div>
          <p className="text-[var(--text-body)] mt-2">
            <strong className="text-[#3B82F6]">CodeQuality AI</strong> preenche
            o gap que Copilot e Snyk deixam: Governança de qualidade +
            visibilidade executiva + capacitação.
          </p>
        </div>
      </div>
    </section>
  );
}
