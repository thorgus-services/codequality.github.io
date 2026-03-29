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
    {
      name: "Preço (por dev/mês)",
      copilot: "~$10-19",
      snyk: "~$25+",
      codeQuality: "R$500-2k/team",
    },
  ];

  const renderIcon = (status: string) => {
    if (status === "full") {
      return <Check className="text-[#16A34A] mx-auto" size={20} />;
    }
    if (status === "partial") {
      return <AlertTriangle className="text-[#D97706] mx-auto" size={20} />;
    }
    if (status === "none") {
      return <X className="text-[#DC2626] mx-auto" size={20} />;
    }
    return <span className="text-[#475569] text-sm">{status}</span>;
  };

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className="text-[24px] md:text-[32px] leading-[32px] md:leading-[40px] font-semibold text-[#1E293B] text-center mb-4">
          Por Que CodeQuality AI é Diferente?
        </h2>
        <p className="text-center text-[#64748B] mb-12">
          Não competimos com Copilot ou Snyk. Complementamos eles.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-md">
            <thead>
              <tr className="bg-[#1E293B]">
                <th className="text-left p-4 text-white font-semibold">
                  Capacidade
                </th>
                <th className="text-center p-4 text-white font-semibold">
                  Copilot
                </th>
                <th className="text-center p-4 text-white font-semibold">
                  Snyk
                </th>
                <th className="text-center p-4 text-white font-semibold bg-[#EFF6FF] text-[#1E293B]">
                  CodeQuality AI
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <tr
                  key={index}
                  className={`border-b border-[#E2E8F0] ${
                    index % 2 === 0 ? "bg-[#F8FAFC]" : "bg-white"
                  }`}
                >
                  <td className="p-4 text-[#1E293B] font-medium">
                    {feature.name}
                  </td>
                  <td className="p-4 text-center">
                    {renderIcon(feature.copilot)}
                  </td>
                  <td className="p-4 text-center">
                    {renderIcon(feature.snyk)}
                  </td>
                  <td className="p-4 text-center bg-[#EFF6FF]/50">
                    {renderIcon(feature.codeQuality)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 bg-[#EFF6FF] border-l-4 border-[#3B82F6] p-6 rounded-lg">
          <p className="text-[#1E293B] font-medium">
            ✅ = Nativo | ⚠️ = Parcial | ❌ = Não disponível
          </p>
          <p className="text-[#475569] mt-2">
            <strong className="text-[#3B82F6]">CodeQuality AI</strong> preenche
            o gap que Copilot e Snyk deixam: Governança de qualidade +
            visibilidade executiva + capacitação.
          </p>
        </div>
      </div>
    </section>
  );
}
