import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "../context/TranslationContext";

export function FAQ() {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: t("faq.questions.1.question"),
      answer: t("faq.questions.1.answer"),
    },
    {
      question: t("faq.questions.2.question"),
      answer: t("faq.questions.2.answer"),
    },
    {
      question: t("faq.questions.3.question"),
      answer: t("faq.questions.3.answer"),
    },
    {
      question: t("faq.questions.4.question"),
      answer: t("faq.questions.4.answer"),
    },
    {
      question: t("faq.questions.5.question"),
      answer: t("faq.questions.5.answer"),
    },
    {
      question: t("faq.questions.6.question"),
      answer: t("faq.questions.6.answer"),
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-[var(--section-padding-mobile)] md:py-[var(--section-padding-desktop)] bg-white">
      <div className="max-w-[800px] mx-auto px-6">
        <h2 className="text-[24px] md:text-[32px] leading-[32px] md:leading-[40px] font-semibold text-[var(--text-dark)] text-center mb-12">
          {t("faq.title")}
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
