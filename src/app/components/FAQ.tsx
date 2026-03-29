import { ChevronDown } from "lucide-react";
import { useState } from "react";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "CodeQuality AI substitui GitHub Copilot?",
      answer:
        "Não! Somos complementares. Copilot gera código, nós garantimos que esse código siga padrões de qualidade (DDD, Clean Code, arquitetura) e fornecemos visibilidade executiva sobre os riscos e benefícios da IA no seu time.",
    },
    {
      question: "Vocês armazenam ou usam nosso código?",
      answer:
        "NÃO. Implementamos Privacy-by-Design desde o primeiro dia. Seu código-fonte nunca é coletado, armazenado ou usado para treinar modelos. Apenas métricas agregadas e anonimizadas são processadas para gerar seu diagnóstico.",
    },
    {
      question: "Funciona para setores regulados (fintech, saúde, gov)?",
      answer:
        "Sim! Oferecemos opção de deploy on-premise, criptografia end-to-end e conformidade LGPD nativa. Perfeito para ambientes com restrições rígidas de dados sensíveis.",
    },
    {
      question: "Quanto tempo para receber o diagnóstico?",
      answer:
        "O relatório é gerado em cerca de 2 minutos após o envio do formulário. Você receberá por e-mail um PDF executivo com score, riscos identificados, plano de ação e guias práticos.",
    },
    {
      question: "É realmente gratuito?",
      answer:
        "Sim, o diagnóstico inicial é 100% gratuito e sem compromisso. Estamos em fase de validação e buscando feedback de líderes técnicos para aprimorar nosso produto. Se quiser implementar a solução completa, conversaremos sobre planos pagos depois.",
    },
    {
      question: "Vocês oferecem treinamento?",
      answer:
        "Sim! Além da plataforma de governança, oferecemos workshops de onboarding, templates de PRP (Pull Request Protocol) e guias rápidos para capacitar todo o time — de júnior a senior — a trabalhar com segurança usando IA generativa.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-[var(--section-padding-mobile)] md:py-[var(--section-padding-desktop)] bg-white">
      <div className="max-w-[800px] mx-auto px-6">
        <h2 className="text-[24px] md:text-[32px] leading-[32px] md:leading-[40px] font-semibold text-[var(--text-dark)] text-center mb-12">
          Perguntas Frequentes
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-[var(--border-light)] rounded-xl overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-[var(--bg-light)] transition-colors"
              >
                <span className="font-semibold text-[var(--text-dark)] pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`text-[#3B82F6] flex-shrink-0 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  size={20}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6 text-[var(--text-body)] leading-relaxed bg-[var(--bg-light)]">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
