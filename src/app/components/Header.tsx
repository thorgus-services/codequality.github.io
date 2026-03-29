import { Code2 } from "lucide-react";

export function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 h-[72px] bg-white border-b border-[#E2E8F0]">
      <div className="max-w-[1200px] mx-auto px-6 h-full flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Code2 className="text-[#1E293B]" size={32} />
          <span className="text-xl font-semibold text-[#1E293B]">
            CodeQuality AI
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection("como-funciona")}
            className="text-[#475569] hover:text-[#1E293B] transition-colors"
          >
            Como Funciona
          </button>
          <button
            onClick={() => scrollToSection("autoridade")}
            className="text-[#475569] hover:text-[#1E293B] transition-colors"
          >
            Autoridade
          </button>
          <button
            onClick={() => scrollToSection("faq")}
            className="text-[#475569] hover:text-[#1E293B] transition-colors"
          >
            FAQ
          </button>
          <button
            onClick={() => scrollToSection("diagnosis-form")}
            className="bg-[#16A34A] hover:bg-[#15803D] text-white px-6 py-2 rounded-lg font-semibold transition-all hover:shadow-lg"
          >
            Gerar Diagnóstico
          </button>
        </nav>
      </div>
    </header>
  );
}