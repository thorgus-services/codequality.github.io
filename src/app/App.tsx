import { useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ProblemSection } from "./components/ProblemSection";
import { SolutionSection } from "./components/SolutionSection";
import { ComparisonTable } from "./components/ComparisonTable";
import { AuthoritySection } from "./components/AuthoritySection";
import { WhatYouGetSection } from "./components/WhatYouGetSection";
import { QualificationForm } from "./components/QualificationForm";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";
import { ValidationModal } from "./components/ValidationModal";

export default function App() {
  const [isValidationModalOpen, setIsValidationModalOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Header />
      <Hero onOpenValidationModal={() => setIsValidationModalOpen(true)} />
      <ProblemSection />
      <SolutionSection />
      <ComparisonTable />
      <AuthoritySection />
      <WhatYouGetSection />
      <QualificationForm />
      <FAQ />
      <Footer />
      <ValidationModal
        isOpen={isValidationModalOpen}
        onClose={() => setIsValidationModalOpen(false)}
      />
    </div>
  );
}
