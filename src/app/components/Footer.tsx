import { Code2, Rocket } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#1E293B] text-white py-10">
      <div className="max-w-[1200px] mx-auto px-6 text-center">
        {/* Logos */}
        <div className="flex items-center justify-center gap-6 mb-6">
          <div className="flex items-center gap-2">
            <Code2 size={28} />
            <span className="text-lg font-semibold">CodeQuality AI</span>
          </div>
          <span className="text-[#64748B]">+</span>
          <div className="flex items-center gap-2">
            <Rocket size={28} className="text-[#3B82F6]" />
            <span className="text-lg font-semibold">Thorgus</span>
          </div>
        </div>

        {/* Copyright */}
        <p className="text-sm text-[#94A3B8] mb-4">
          © 2025 CodeQuality AI • Uma iniciativa Thorgus. Projeto em fase de
          validação de mercado.
        </p>

        {/* Email */}
        <a
          href="mailto:pilot@thorgus.com"
          className="text-[#3B82F6] hover:underline text-base font-medium inline-block mb-4"
        >
          pilot@thorgus.com
        </a>

        {/* Disclaimer */}
        <p className="text-sm text-[#64748B] max-w-[800px] mx-auto">
          Todos os dados coletados são anonimizados e usados exclusivamente para
          pesquisa e desenvolvimento de produto.
        </p>
      </div>
    </footer>
  );
}
