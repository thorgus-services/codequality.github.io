import { useState } from "react";

export function QualificationForm() {
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
    alert("Diagnóstico gerado com sucesso! Você receberá os resultados em breve.");
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
      className="py-16 md:py-20 bg-gradient-to-br from-[#EFF6FF] to-white"
    >
      <div className="max-w-[650px] mx-auto px-6">
        <h2 className="text-[24px] md:text-[32px] leading-[32px] md:leading-[40px] font-semibold text-[#1E293B] text-center mb-4">
          Responda 7 Perguntas Para Gerar Seu Diagnóstico
        </h2>
        <p className="text-center text-[#64748B] mb-10">
          Análise personalizada em 2 minutos
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-white border border-[#E2E8F0] rounded-xl p-8 md:p-10 shadow-lg"
        >
          {/* 1. Nome Completo */}
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-[#1E293B] mb-2"
            >
              Nome Completo *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Seu nome completo"
              className="w-full h-12 px-4 border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent text-base"
            />
          </div>

          {/* 2. E-mail Corporativo */}
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-[#1E293B] mb-2"
            >
              E-mail Corporativo *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="seu@empresa.com"
              className="w-full h-12 px-4 border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent text-base"
            />
          </div>

          {/* 3. Cargo */}
          <div className="mb-6">
            <label
              htmlFor="role"
              className="block text-sm font-medium text-[#1E293B] mb-2"
            >
              Cargo *
            </label>
            <select
              id="role"
              name="role"
              required
              value={formData.role}
              onChange={handleChange}
              className="w-full h-12 px-4 border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent bg-white text-base"
            >
              <option value="">Selecione seu cargo</option>
              <option value="ceo">CEO/Founder</option>
              <option value="cto">CTO</option>
              <option value="vp">VP Engenharia</option>
              <option value="gpm">GPM</option>
              <option value="techlead">Tech Lead</option>
              <option value="other">Outro</option>
            </select>
          </div>

          {/* 4. Tamanho do Time */}
          <div className="mb-6">
            <label
              htmlFor="teamSize"
              className="block text-sm font-medium text-[#1E293B] mb-2"
            >
              Tamanho do Time de Engenharia *
            </label>
            <select
              id="teamSize"
              name="teamSize"
              required
              value={formData.teamSize}
              onChange={handleChange}
              className="w-full h-12 px-4 border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent bg-white text-base"
            >
              <option value="">Selecione o tamanho</option>
              <option value="1-5">1-5 devs</option>
              <option value="6-15">6-15 devs</option>
              <option value="16-50">16-50 devs</option>
              <option value="50+">50+ devs</option>
            </select>
          </div>

          {/* 5. Usa IA para código? */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-[#1E293B] mb-3">
              Seu time usa IA para gerar código? *
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
                <span className="text-[#475569]">Sim, amplamente</span>
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
                <span className="text-[#475569]">Sim, pontualmente</span>
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
                <span className="text-[#475569]">Não, mas planeja</span>
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
                <span className="text-[#475569]">Não</span>
              </label>
            </div>
          </div>

          {/* 6. Horas/semana revisando código IA */}
          <div className="mb-6">
            <label
              htmlFor="reviewHours"
              className="block text-sm font-medium text-[#1E293B] mb-2"
            >
              Horas/semana revisando código gerado por IA *
            </label>
            <select
              id="reviewHours"
              name="reviewHours"
              required
              value={formData.reviewHours}
              onChange={handleChange}
              className="w-full h-12 px-4 border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent bg-white text-base"
            >
              <option value="">Selecione</option>
              <option value="none">Não revisamos</option>
              <option value="<1h">&lt;1h por semana</option>
              <option value="1-5h">1-5h por semana</option>
              <option value="5-10h">5-10h por semana</option>
              <option value="10-20h">10-20h por semana</option>
              <option value=">20h">&gt;20h por semana</option>
            </select>
          </div>

          {/* 7. Bugs em produção */}
          <div className="mb-6">
            <label
              htmlFor="bugs"
              className="block text-sm font-medium text-[#1E293B] mb-2"
            >
              Bugs em produção (último trimestre) *
            </label>
            <select
              id="bugs"
              name="bugs"
              required
              value={formData.bugs}
              onChange={handleChange}
              className="w-full h-12 px-4 border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent bg-white text-base"
            >
              <option value="">Selecione</option>
              <option value="none">Nenhum</option>
              <option value="1-3">1-3 bugs</option>
              <option value="4-10">4-10 bugs</option>
              <option value="11-20">11-20 bugs</option>
              <option value=">20">&gt;20 bugs</option>
              <option value="not-measured">Não medimos</option>
            </select>
          </div>

          {/* 8. Features por sprint */}
          <div className="mb-6">
            <label
              htmlFor="features"
              className="block text-sm font-medium text-[#1E293B] mb-2"
            >
              Features entregues por sprint (média) *
            </label>
            <select
              id="features"
              name="features"
              required
              value={formData.features}
              onChange={handleChange}
              className="w-full h-12 px-4 border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent bg-white text-base"
            >
              <option value="">Selecione</option>
              <option value="<3">&lt;3 features</option>
              <option value="3-5">3-5 features</option>
              <option value="6-10">6-10 features</option>
              <option value="11-15">11-15 features</option>
              <option value=">15">&gt;15 features</option>
              <option value="not-measured">Não medimos</option>
            </select>
          </div>

          {/* 9. Maior preocupação */}
          <div className="mb-6">
            <label
              htmlFor="mainConcern"
              className="block text-sm font-medium text-[#1E293B] mb-2"
            >
              Sua maior preocupação hoje *
            </label>
            <select
              id="mainConcern"
              name="mainConcern"
              required
              value={formData.mainConcern}
              onChange={handleChange}
              className="w-full h-12 px-4 border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent bg-white text-base"
            >
              <option value="">Selecione</option>
              <option value="quality">Qualidade do código</option>
              <option value="security">Segurança</option>
              <option value="compliance">Conformidade regulatória</option>
              <option value="tech-debt">Dívida técnica</option>
              <option value="training">Treinamento do time</option>
              <option value="other">Outro</option>
            </select>
          </div>

          {/* 10. Restrições de código externo */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-[#1E293B] mb-3">
              Sua empresa tem restrições para enviar código a APIs externas? *
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
                <span className="text-[#475569]">Sim, restrições rígidas</span>
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
                <span className="text-[#475569]">Sim, restrições moderadas</span>
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
                <span className="text-[#475569]">Não</span>
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
                <span className="text-[#475569]">Não sei</span>
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
              <span className="text-sm text-[#475569]">
                Sim, quero otimizar meu resultado e receber recomendações
                personalizadas
              </span>
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#16A34A] hover:bg-[#15803D] text-white py-4 rounded-lg text-lg font-semibold transition-all hover:shadow-xl hover:-translate-y-0.5"
          >
            GERAR DIAGNÓSTICO GRATUITO →
          </button>

          {/* Privacy Note */}
          <p className="text-sm text-[#64748B] text-center mt-6">
            🔐 Seus dados estão seguros. Não enviamos spam. Código-fonte NÃO é
            coletado.
          </p>
        </form>
      </div>
    </section>
  );
}
