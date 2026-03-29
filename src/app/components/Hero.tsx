import { Lock, ShieldCheck, FileCheck, BarChart3, RefreshCw } from "lucide-react";

interface HeroProps {
  onOpenValidationModal: () => void;
}

export function Hero({ onOpenValidationModal }: HeroProps) {
  const scrollToForm = () => {
    const element = document.getElementById("diagnosis-form");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-[var(--primary-navy)] to-[#3B82F6] text-white py-[var(--section-padding-mobile)] md:py-[var(--section-padding-desktop)]">
      <div className="max-w-[var(--container-max)] mx-auto px-6">
        <div className="max-w-[900px] mx-auto text-center">
          <h1 className="hero-h1 font-semibold mb-6">
            IA Gera Código Rápido. Seu time está pronto para isso?
          </h1>
          <h2 className="text-[var(--body-size)] md:text-[var(--body-large-size)] leading-[var(--body-height)] md:leading-[var(--body-large-height)] text-white/90 mb-10">
            80% dos devs relatam mais produtividade com IA, mas apenas 43%
            confiam totalmente na qualidade. Descubra em 2 minutos se seu time
            tem a governança necessária para escalar com segurança.
          </h2>

          <button
            onClick={scrollToForm}
            className="bg-[var(--primary-green)] hover:bg-[var(--primary-green-hover)] text-white px-8 py-4 rounded-lg text-lg font-semibold mb-12 transition-all hover:shadow-2xl hover:-translate-y-1 inline-flex items-center gap-2"
          >
            GERAR DIAGNÓSTICO GRATUITO →
          </button>

          {/* Trust Badges - 2 Column Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Card 1 - Privacy-by-Design */}
            <div className="bg-white/10 border border-white/30 rounded-xl p-6 backdrop-blur-sm text-left min-h-[320px] flex flex-col">
              <h3 className="text-lg font-semibold mb-2">🔐 Privacy-by-Design</h3>
              <p className="text-sm text-white/90 mb-4">
                Seu código está protegido
              </p>
              <ul className="space-y-3 flex-1">
                <li className="flex items-start gap-3">
                  <Lock className="flex-shrink-0 mt-0.5" size={20} />
                  <span className="text-sm text-white/85 leading-relaxed">
                    Seu código nunca é usado para treinar modelos externos
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <ShieldCheck className="flex-shrink-0 mt-0.5" size={20} />
                  <span className="text-sm text-white/85 leading-relaxed">
                    Anonimização automática de dados sensíveis
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <FileCheck className="flex-shrink-0 mt-0.5" size={20} />
                  <span className="text-sm text-white/85 leading-relaxed">
                    Relatório 100% confidencial
                  </span>
                </li>
              </ul>
            </div>

            {/* Card 2 - Em Desenvolvimento Ativo */}
            <div className="bg-white/10 border border-white/30 rounded-xl p-6 backdrop-blur-sm text-left min-h-[320px] flex flex-col">
              <h3 className="text-lg font-semibold mb-2">🔬 Em Desenvolvimento Ativo</h3>
              <p className="text-sm text-white/90 mb-4">
                CodeQuality AI está sendo construído com base em:
              </p>
              <ul className="space-y-3 flex-1 mb-4">
                <li className="flex items-start gap-3">
                  <BarChart3 className="flex-shrink-0 mt-0.5" size={20} />
                  <span className="text-sm text-white/85 leading-relaxed">
                    Pesquisa de mercado com líderes de engenharia de PMEs tech
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <ShieldCheck className="flex-shrink-0 mt-0.5" size={20} />
                  <span className="text-sm text-white/85 leading-relaxed">
                    Princípios de engenharia validados em ambientes enterprise
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <RefreshCw className="flex-shrink-0 mt-0.5" size={20} />
                  <span className="text-sm text-white/85 leading-relaxed">
                    Metodologias de governança de IA em evolução contínua
                  </span>
                </li>
              </ul>
              <button
                onClick={onOpenValidationModal}
                className="border-2 border-[var(--secondary-button-border)] text-[var(--secondary-button-text)] hover:bg-[var(--secondary-button-hover)] px-4 py-2.5 rounded-lg font-semibold transition-all text-sm w-full"
              >
                Participe da validação →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}