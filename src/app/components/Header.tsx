import { Code2 } from "lucide-react";

export function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-50 h-[72px] bg-white border-b border-[var(--border-light)]">
      <div className="max-w-[var(--container-max)] mx-auto px-6 h-full flex items-center justify-between">
        <button 
          onClick={scrollToTop}
          className="flex items-center gap-2 cursor-pointer"
        >
          <Code2 className="text-[var(--text-dark)]" size={32} />
          <span className="text-xl font-semibold text-[var(--text-dark)]">
            CodeQuality AI
          </span>
        </button>

        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection("como-funciona")}
            className="text-[var(--text-body)] hover:text-[var(--text-dark)] transition-colors cursor-pointer"
          >
            Como Funciona
          </button>
          <button
            onClick={() => scrollToSection("autoridade")}
            className="text-[var(--text-body)] hover:text-[var(--text-dark)] transition-colors cursor-pointer"
          >
            Autoridade
          </button>
          <button
            onClick={() => scrollToSection("faq")}
            className="text-[var(--text-body)] hover:text-[var(--text-dark)] transition-colors cursor-pointer"
          >
            FAQ
          </button>
          <button
            onClick={() => scrollToSection("diagnosis-form")}
            className="bg-[var(--primary-green)] hover:bg-[var(--primary-green-hover)] text-white px-6 py-2 rounded-lg font-semibold transition-all hover:shadow-lg cursor-pointer"
          >
            Gerar Diagnóstico
          </button>
        </nav>
      </div>
    </header>
  );
}