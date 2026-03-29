import { useState } from "react";
import { X } from "lucide-react";
import { useTranslation } from "../context/TranslationContext";

interface ValidationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ValidationModal({ isOpen, onClose }: ValidationModalProps) {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    interest: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Validation form submitted:", formData);
    alert(t("validationModal.successMessage"));
    onClose();
    setFormData({ name: "", email: "", interest: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl max-w-[500px] w-full p-8 shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[var(--text-muted)] hover:text-[var(--text-dark)] transition-colors"
          aria-label="Close modal"
        >
          <X size={24} />
        </button>

        {/* Modal Header */}
        <h2 className="text-2xl font-semibold text-[var(--text-dark)] mb-2">
          {t("validationModal.title")}
        </h2>
        <p className="text-[var(--text-muted)] mb-6">
          {t("validationModal.subtitle")}
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label
              htmlFor="modal-name"
              className="block text-sm font-medium text-[var(--text-dark)] mb-2"
            >
              {t("validationModal.fields.name.label")}
            </label>
            <input
              type="text"
              id="modal-name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder={t("validationModal.fields.name.placeholder")}
              className="w-full h-12 px-4 border border-[var(--border-light)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent text-base"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="modal-email"
              className="block text-sm font-medium text-[var(--text-dark)] mb-2"
            >
              {t("validationModal.fields.email.label")}
            </label>
            <input
              type="email"
              id="modal-email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder={t("validationModal.fields.email.placeholder")}
              className="w-full h-12 px-4 border border-[var(--border-light)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent text-base"
            />
          </div>

          {/* Interest */}
          <div>
            <label
              htmlFor="modal-interest"
              className="block text-sm font-medium text-[var(--text-dark)] mb-2"
            >
              {t("validationModal.fields.interest.label")}
            </label>
            <select
              id="modal-interest"
              name="interest"
              required
              value={formData.interest}
              onChange={handleChange}
              className="w-full h-12 px-4 border border-[var(--border-light)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent bg-white text-base"
            >
              <option value="">{t("validationModal.fields.interest.placeholder")}</option>
              <option value="pilot">{t("validationModal.fields.interest.options.pilot")}</option>
              <option value="feedback">{t("validationModal.fields.interest.options.feedback")}</option>
              <option value="partnership">{t("validationModal.fields.interest.options.partnership")}</option>
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#3B82F6] hover:bg-[#2563EB] text-white py-3 rounded-lg font-semibold transition-all hover:shadow-lg hover:-translate-y-0.5"
          >
            {t("validationModal.cta")}
          </button>

          {/* Privacy Note */}
          <p className="text-sm text-[var(--text-muted)] text-center">
            {t("validationModal.privacyNote")}
          </p>
        </form>
      </div>
    </div>
  );
}
