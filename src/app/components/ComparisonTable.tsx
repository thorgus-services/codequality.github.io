import { Check, X, AlertTriangle } from "lucide-react";
import { useTranslation } from "../context/TranslationContext";

export function ComparisonTable() {
  const { t } = useTranslation();

  const features = [
    {
      name: t("comparisonTable.features.1"),
      copilot: "full",
      snyk: "none",
      codeQuality: "partial",
    },
    {
      name: t("comparisonTable.features.2"),
      copilot: "partial",
      snyk: "full",
      codeQuality: "full",
    },
    {
      name: t("comparisonTable.features.3"),
      copilot: "none",
      snyk: "none",
      codeQuality: "full",
    },
    {
      name: t("comparisonTable.features.4"),
      copilot: "none",
      snyk: "none",
      codeQuality: "full",
    },
    {
      name: t("comparisonTable.features.5"),
      copilot: "none",
      snyk: "none",
      codeQuality: "full",
    },
    {
      name: t("comparisonTable.features.6"),
      copilot: "partial",
      snyk: "full",
      codeQuality: "full",
    },
    {
      name: t("comparisonTable.features.7"),
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
          {t("comparisonTable.title")}
        </h2>
        <p className="text-center text-[var(--text-muted)] mb-12">
          {t("comparisonTable.subtitle")}
        </p>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-md">
            <thead>
              <tr className="bg-[var(--text-dark)]">
                <th className="text-left p-4 text-white font-semibold">
                  {t("comparisonTable.headers.capability")}
                </th>
                <th className="text-center p-4 text-white font-semibold">
                  {t("comparisonTable.headers.copilot")}
                </th>
                <th className="text-center p-4 text-white font-semibold">
                  {t("comparisonTable.headers.snyk")}
                </th>
                <th className="text-center p-4 font-semibold bg-[var(--primary-green)] text-white">
                  {t("comparisonTable.headers.codeQuality")}
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
              <span>{t("comparisonTable.legend.native")}</span>
            </div>
            <div className="flex items-center gap-2">
              <AlertTriangle className="text-[#D97706]" size={20} />
              <span>{t("comparisonTable.legend.partial")}</span>
            </div>
            <div className="flex items-center gap-2">
              <X className="text-[var(--error-red)]" size={20} />
              <span>{t("comparisonTable.legend.notAvailable")}</span>
            </div>
          </div>
          <p className="text-[var(--text-body)] mt-2">
            {t("comparisonTable.note")}
          </p>
        </div>
      </div>
    </section>
  );
}
