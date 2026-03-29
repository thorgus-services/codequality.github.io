import { useState } from "react";
import { X } from "lucide-react";

interface ValidationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ValidationModal({ isOpen, onClose }: ValidationModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    interest: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Validation form submitted:", formData);
    alert("Obrigado! Entraremos em contato em breve.");
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
          className="absolute top-4 right-4 text-[#64748B] hover:text-[#1E293B] transition-colors"
          aria-label="Close modal"
        >
          <X size={24} />
        </button>

        {/* Modal Header */}
        <h2 className="text-2xl font-semibold text-[#1E293B] mb-2">
          Participe da Validação
        </h2>
        <p className="text-[#64748B] mb-6">
          Ajude a construir a solução certa para o mercado
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label
              htmlFor="modal-name"
              className="block text-sm font-medium text-[#1E293B] mb-2"
            >
              Seu nome *
            </label>
            <input
              type="text"
              id="modal-name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Digite seu nome completo"
              className="w-full h-12 px-4 border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent text-base"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="modal-email"
              className="block text-sm font-medium text-[#1E293B] mb-2"
            >
              E-mail corporativo *
            </label>
            <input
              type="email"
              id="modal-email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="seu@empresa.com"
              className="w-full h-12 px-4 border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent text-base"
            />
          </div>

          {/* Interest */}
          <div>
            <label
              htmlFor="modal-interest"
              className="block text-sm font-medium text-[#1E293B] mb-2"
            >
              Tenho interesse em...
            </label>
            <select
              id="modal-interest"
              name="interest"
              required
              value={formData.interest}
              onChange={handleChange}
              className="w-full h-12 px-4 border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent bg-white text-base"
            >
              <option value="">Selecione uma opção</option>
              <option value="pilot">Participar do pilot gratuito</option>
              <option value="feedback">Dar feedback sobre a ideia</option>
              <option value="partnership">
                Explorar parceria com minha comunidade
              </option>
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#3B82F6] hover:bg-[#2563EB] text-white py-3 rounded-lg font-semibold transition-all hover:shadow-lg hover:-translate-y-0.5"
          >
            Enviar →
          </button>

          {/* Privacy Note */}
          <p className="text-sm text-[#64748B] text-center">
            🔐 Seus dados estão seguros. Não enviamos spam.
          </p>
        </form>
      </div>
    </div>
  );
}
