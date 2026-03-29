import { useState } from "react";
import { useTranslation } from "../context/TranslationContext";

export function QualificationForm() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    teamSize: "",
    usesAI: "",
    reviewHours: "",
    bugs: "",
    features: "",
    mainConcern: "",
    codeRestrictions: "",
    canContact: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Qualification form submitted:", formData);
    alert(t("qualificationForm.successMessage"));
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({
        ...prev,
        [name]: checked,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  return (
    <section
      id="diagnosis-form"
      className="py-[var(--section-padding-mobile)] md:py-[var(--section-padding-desktop)] bg-gradient-to-br from-[var(--bg-light)] to-white"
    >
      <div className="max-w-[650px] mx-auto px-6">
        <h2 className="text-[24px] md:text-[32px] leading-[32px] md:leading-[40px] font-semibold text-[var(--text-dark)] text-center mb-4">
          {t("qualificationForm.title")}
        </h2>
        <p className="text-center text-[var(--text-muted)] mb-10">
          {t("qualificationForm.subtitle")}
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-white border border-[var(--border-light)] rounded-xl p-8 md:p-10 shadow-lg"
        >
          {/* 1. Nome Completo */}
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-[var(--text-dark)] mb-2"
            >
              {t("qualificationForm.fields.name.label")}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder={t("qualificationForm.fields.name.placeholder")}
              className="w-full h-12 px-4 border border-[var(--border-light)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent text-base"
            />
          </div>

          {/* 2. E-mail Corporativo */}
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-[var(--text-dark)] mb-2"
            >
              {t("qualificationForm.fields.email.label")}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder={t("qualificationForm.fields.email.placeholder")}
              className="w-full h-12 px-4 border border-[var(--border-light)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent text-base"
            />
          </div>

          {/* 3. Cargo */}
          <div className="mb-6">
            <label
              htmlFor="role"
              className="block text-sm font-medium text-[var(--text-dark)] mb-2"
            >
              {t("qualificationForm.fields.role.label")}
            </label>
            <select
              id="role"
              name="role"
              required
              value={formData.role}
              onChange={handleChange}
              className="w-full h-12 px-4 border border-[var(--border-light)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent bg-white text-base"
            >
              <option value="">{t("qualificationForm.fields.role.placeholder")}</option>
              <option value="ceo">{t("qualificationForm.fields.role.options.ceo")}</option>
              <option value="cto">{t("qualificationForm.fields.role.options.cto")}</option>
              <option value="vp">{t("qualificationForm.fields.role.options.vp")}</option>
              <option value="gpm">{t("qualificationForm.fields.role.options.gpm")}</option>
              <option value="techlead">{t("qualificationForm.fields.role.options.techlead")}</option>
              <option value="other">{t("qualificationForm.fields.role.options.other")}</option>
            </select>
          </div>

          {/* 4. Tamanho do Time */}
          <div className="mb-6">
            <label
              htmlFor="teamSize"
              className="block text-sm font-medium text-[var(--text-dark)] mb-2"
            >
              {t("qualificationForm.fields.teamSize.label")}
            </label>
            <select
              id="teamSize"
              name="teamSize"
              required
              value={formData.teamSize}
              onChange={handleChange}
              className="w-full h-12 px-4 border border-[var(--border-light)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent bg-white text-base"
            >
              <option value="">{t("qualificationForm.fields.teamSize.placeholder")}</option>
              <option value="1-5">{t("qualificationForm.fields.teamSize.options.1-5")}</option>
              <option value="6-15">{t("qualificationForm.fields.teamSize.options.6-15")}</option>
              <option value="16-50">{t("qualificationForm.fields.teamSize.options.16-50")}</option>
              <option value="50+">{t("qualificationForm.fields.teamSize.options.50+")}</option>
            </select>
          </div>

          {/* 5. Usa IA para código? */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-[var(--text-dark)] mb-3">
              {t("qualificationForm.fields.usesAI.label")}
            </label>
            <div className="space-y-2">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="usesAI"
                  value="widely"
                  checked={formData.usesAI === "widely"}
                  onChange={handleChange}
                  required
                  className="mr-3 h-4 w-4 text-[#3B82F6] focus:ring-2 focus:ring-[#3B82F6]"
                />
                <span className="text-[var(--text-body)]">{t("qualificationForm.fields.usesAI.options.widely")}</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="usesAI"
                  value="occasionally"
                  checked={formData.usesAI === "occasionally"}
                  onChange={handleChange}
                  className="mr-3 h-4 w-4 text-[#3B82F6] focus:ring-2 focus:ring-[#3B82F6]"
                />
                <span className="text-[var(--text-body)]">{t("qualificationForm.fields.usesAI.options.occasionally")}</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="usesAI"
                  value="planning"
                  checked={formData.usesAI === "planning"}
                  onChange={handleChange}
                  className="mr-3 h-4 w-4 text-[#3B82F6] focus:ring-2 focus:ring-[#3B82F6]"
                />
                <span className="text-[var(--text-body)]">{t("qualificationForm.fields.usesAI.options.planning")}</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="usesAI"
                  value="no"
                  checked={formData.usesAI === "no"}
                  onChange={handleChange}
                  className="mr-3 h-4 w-4 text-[#3B82F6] focus:ring-2 focus:ring-[#3B82F6]"
                />
                <span className="text-[var(--text-body)]">{t("qualificationForm.fields.usesAI.options.no")}</span>
              </label>
            </div>
          </div>

          {/* 6. Horas/semana revisando código IA */}
          <div className="mb-6">
            <label
              htmlFor="reviewHours"
              className="block text-sm font-medium text-[var(--text-dark)] mb-2"
            >
              {t("qualificationForm.fields.reviewHours.label")}
            </label>
            <select
              id="reviewHours"
              name="reviewHours"
              required
              value={formData.reviewHours}
              onChange={handleChange}
              className="w-full h-12 px-4 border border-[var(--border-light)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent bg-white text-base"
            >
              <option value="">{t("qualificationForm.fields.reviewHours.placeholder")}</option>
              <option value="none">{t("qualificationForm.fields.reviewHours.options.none")}</option>
              <option value="<1h">{t("qualificationForm.fields.reviewHours.options.<1h")}</option>
              <option value="1-5h">{t("qualificationForm.fields.reviewHours.options.1-5h")}</option>
              <option value="5-10h">{t("qualificationForm.fields.reviewHours.options.5-10h")}</option>
              <option value="10-20h">{t("qualificationForm.fields.reviewHours.options.10-20h")}</option>
              <option value=">20h">{t("qualificationForm.fields.reviewHours.options.>20h")}</option>
            </select>
          </div>

          {/* 7. Bugs em produção */}
          <div className="mb-6">
            <label
              htmlFor="bugs"
              className="block text-sm font-medium text-[var(--text-dark)] mb-2"
            >
              {t("qualificationForm.fields.bugs.label")}
            </label>
            <select
              id="bugs"
              name="bugs"
              required
              value={formData.bugs}
              onChange={handleChange}
              className="w-full h-12 px-4 border border-[var(--border-light)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent bg-white text-base"
            >
              <option value="">{t("qualificationForm.fields.bugs.placeholder")}</option>
              <option value="none">{t("qualificationForm.fields.bugs.options.none")}</option>
              <option value="1-3">{t("qualificationForm.fields.bugs.options.1-3")}</option>
              <option value="4-10">{t("qualificationForm.fields.bugs.options.4-10")}</option>
              <option value="11-20">{t("qualificationForm.fields.bugs.options.11-20")}</option>
              <option value=">20">{t("qualificationForm.fields.bugs.options.>20")}</option>
              <option value="not-measured">{t("qualificationForm.fields.bugs.options.not-measured")}</option>
            </select>
          </div>

          {/* 8. Features por sprint */}
          <div className="mb-6">
            <label
              htmlFor="features"
              className="block text-sm font-medium text-[var(--text-dark)] mb-2"
            >
              {t("qualificationForm.fields.features.label")}
            </label>
            <select
              id="features"
              name="features"
              required
              value={formData.features}
              onChange={handleChange}
              className="w-full h-12 px-4 border border-[var(--border-light)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent bg-white text-base"
            >
              <option value="">{t("qualificationForm.fields.features.placeholder")}</option>
              <option value="<3">{t("qualificationForm.fields.features.options.<3")}</option>
              <option value="3-5">{t("qualificationForm.fields.features.options.3-5")}</option>
              <option value="6-10">{t("qualificationForm.fields.features.options.6-10")}</option>
              <option value="11-15">{t("qualificationForm.fields.features.options.11-15")}</option>
              <option value=">15">{t("qualificationForm.fields.features.options.>15")}</option>
              <option value="not-measured">{t("qualificationForm.fields.features.options.not-measured")}</option>
            </select>
          </div>

          {/* 9. Maior preocupação */}
          <div className="mb-6">
            <label
              htmlFor="mainConcern"
              className="block text-sm font-medium text-[var(--text-dark)] mb-2"
            >
              {t("qualificationForm.fields.mainConcern.label")}
            </label>
            <select
              id="mainConcern"
              name="mainConcern"
              required
              value={formData.mainConcern}
              onChange={handleChange}
              className="w-full h-12 px-4 border border-[var(--border-light)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent bg-white text-base"
            >
              <option value="">{t("qualificationForm.fields.mainConcern.placeholder")}</option>
              <option value="quality">{t("qualificationForm.fields.mainConcern.options.quality")}</option>
              <option value="security">{t("qualificationForm.fields.mainConcern.options.security")}</option>
              <option value="compliance">{t("qualificationForm.fields.mainConcern.options.compliance")}</option>
              <option value="tech-debt">{t("qualificationForm.fields.mainConcern.options.tech-debt")}</option>
              <option value="training">{t("qualificationForm.fields.mainConcern.options.training")}</option>
              <option value="other">{t("qualificationForm.fields.mainConcern.options.other")}</option>
            </select>
          </div>

          {/* 10. Restrições de código externo */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-[var(--text-dark)] mb-3">
              {t("qualificationForm.fields.codeRestrictions.label")}
            </label>
            <div className="space-y-2">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="codeRestrictions"
                  value="strict"
                  checked={formData.codeRestrictions === "strict"}
                  onChange={handleChange}
                  required
                  className="mr-3 h-4 w-4 text-[#3B82F6] focus:ring-2 focus:ring-[#3B82F6]"
                />
                <span className="text-[var(--text-body)]">{t("qualificationForm.fields.codeRestrictions.options.strict")}</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="codeRestrictions"
                  value="moderate"
                  checked={formData.codeRestrictions === "moderate"}
                  onChange={handleChange}
                  className="mr-3 h-4 w-4 text-[#3B82F6] focus:ring-2 focus:ring-[#3B82F6]"
                />
                <span className="text-[var(--text-body)]">{t("qualificationForm.fields.codeRestrictions.options.moderate")}</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="codeRestrictions"
                  value="no"
                  checked={formData.codeRestrictions === "no"}
                  onChange={handleChange}
                  className="mr-3 h-4 w-4 text-[#3B82F6] focus:ring-2 focus:ring-[#3B82F6]"
                />
                <span className="text-[var(--text-body)]">{t("qualificationForm.fields.codeRestrictions.options.no")}</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="codeRestrictions"
                  value="unknown"
                  checked={formData.codeRestrictions === "unknown"}
                  onChange={handleChange}
                  className="mr-3 h-4 w-4 text-[#3B82F6] focus:ring-2 focus:ring-[#3B82F6]"
                />
                <span className="text-[var(--text-body)]">{t("qualificationForm.fields.codeRestrictions.options.unknown")}</span>
              </label>
            </div>
          </div>

          {/* 11. Posso contactar para feedback */}
          <div className="mb-8">
            <label className="flex items-start">
              <input
                type="checkbox"
                name="canContact"
                checked={formData.canContact}
                onChange={handleChange}
                className="mr-3 mt-1 h-4 w-4 text-[#3B82F6] focus:ring-2 focus:ring-[#3B82F6] rounded"
              />
              <span className="text-sm text-[var(--text-body)]">
                {t("qualificationForm.fields.canContact.label")}
              </span>
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[var(--primary-green)] hover:bg-[var(--primary-green-hover)] text-white py-4 rounded-lg text-lg font-semibold transition-all hover:shadow-xl hover:-translate-y-0.5"
          >
            {t("qualificationForm.cta")}
          </button>

          {/* Privacy Note */}
          <p className="text-sm text-[var(--text-muted)] text-center mt-6">
            {t("qualificationForm.privacyNote")}
          </p>
        </form>
      </div>
    </section>
  );
}
