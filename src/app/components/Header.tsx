import { Code2, ChevronDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useTranslation } from "../context/TranslationContext";

type Language = "pt" | "en";

export function Header() {
  const { language, setLanguage, t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleLanguage = (lang: Language) => {
    setLanguage(lang);
    setIsOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 h-[72px] bg-white border-b border-[var(--border-light)]">
      <div className="max-w-[var(--container-max)] mx-auto px-6 h-full flex items-center justify-between">
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 cursor-pointer"
        >
          <Code2 className="text-[var(--text-dark)]" size={32} />
          <span className="text-xl font-semibold text-[var(--text-dark)]">
            {t("header.logo")}
          </span>
        </button>

        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection("como-funciona")}
            className="text-[var(--text-body)] hover:text-[var(--text-dark)] transition-colors cursor-pointer"
          >
            {t("header.nav.howItWorks")}
          </button>
          <button
            onClick={() => scrollToSection("autoridade")}
            className="text-[var(--text-body)] hover:text-[var(--text-dark)] transition-colors cursor-pointer"
          >
            {t("header.nav.authority")}
          </button>
          <button
            onClick={() => scrollToSection("faq")}
            className="text-[var(--text-body)] hover:text-[var(--text-dark)] transition-colors cursor-pointer"
          >
            {t("header.nav.faq")}
          </button>
          <button
            onClick={() => scrollToSection("diagnosis-form")}
            className="bg-[var(--primary-green)] hover:bg-[var(--primary-green-hover)] text-white px-6 py-2 rounded-lg font-semibold transition-all hover:shadow-lg cursor-pointer"
          >
            {t("header.nav.generateDiagnosis")}
          </button>

          {/* Language Selector */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center gap-2 px-3 py-2 rounded-lg border border-[var(--border-light)] hover:bg-[var(--bg-light)] transition-colors cursor-pointer"
            >
              <span className="text-lg">{language === "pt" ? "🇧🇷" : "🇺🇸"}</span>
              <ChevronDown size={16} className="text-[var(--text-body)]" />
            </button>

            {isOpen && (
              <div className="absolute right-0 top-full mt-2 bg-white border border-[var(--border-light)] rounded-lg shadow-lg py-2 min-w-[120px] z-50">
                <button
                  onClick={() => toggleLanguage("pt")}
                  className={`w-full flex items-center gap-3 px-4 py-2 hover:bg-[var(--bg-light)] transition-colors ${
                    language === "pt" ? "bg-[var(--bg-light)]" : ""
                  }`}
                >
                  <span className="text-lg">🇧🇷</span>
                  <span className="text-sm text-[var(--text-body)]">{t("languageSelector.portuguese")}</span>
                </button>
                <button
                  onClick={() => toggleLanguage("en")}
                  className={`w-full flex items-center gap-3 px-4 py-2 hover:bg-[var(--bg-light)] transition-colors ${
                    language === "en" ? "bg-[var(--bg-light)]" : ""
                  }`}
                >
                  <span className="text-lg">🇺🇸</span>
                  <span className="text-sm text-[var(--text-body)]">{t("languageSelector.english")}</span>
                </button>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}