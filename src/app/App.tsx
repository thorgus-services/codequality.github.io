import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { 
  ArrowRight, 
  Wrench, 
  Clock, 
  Shield, 
  CheckCircle2, 
  ChevronDown,
  ChevronUp 
} from "lucide-react";

interface FormData {
  email: string;
  fullName: string;
  jobTitle: string;
  company: string;
  companySize: string;
  aiTools: string[];
  concern: string;
  comments?: string;
}

export default function App() {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log("Form submitted:", data);
    alert("Thank you! We'll send your custom diagnosis to your email within 24 hours.");
  };

  const scrollToForm = () => {
    document.getElementById("qualification-form")?.scrollIntoView({ 
      behavior: "smooth" 
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 h-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
          <div className="text-xl text-[#1A202C] font-semibold">
            CodeQuality AI
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a 
              href="#how-it-works" 
              className="text-[#2D3748] hover:text-[#1A365D] transition-colors"
            >
              How It Works
            </a>
            <a 
              href="#faq" 
              className="text-[#2D3748] hover:text-[#1A365D] transition-colors"
            >
              FAQ
            </a>
            <a 
              href="#contact" 
              className="text-[#2D3748] hover:text-[#1A365D] transition-colors"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1A365D] via-[#2563EB] to-[#1A365D] text-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            AI Code Is Fast. But Is It Safe?
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
            Discover in 2 minutes if your team's AI-generated code 
            hides technical debt, security risks, or compliance gaps.
          </p>
          <button
            onClick={scrollToForm}
            className="inline-flex items-center justify-center gap-2 bg-[#10B981] text-white px-8 h-14 min-w-[200px] rounded-lg hover:bg-[#059669] transition-all transform hover:scale-[1.02] font-semibold text-base shadow-[0_4px_14px_rgba(16,185,129,0.4)]"
          >
            Generate Free Diagnosis
            <ArrowRight className="w-5 h-5" />
          </button>

          {/* Trust Signals */}
          <div className="mt-16 max-w-2xl mx-auto">
            <div className="bg-white/10 rounded-lg p-6 text-left">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">🔬</span>
                <h3 className="text-lg font-semibold text-white">Project in Validation</h3>
              </div>
              <p className="text-white/80 text-sm">
                CodeQuality AI is being co-created with CEOs, CTOs, and GPMs 
                from tech SMEs in Brazil. Your participation helps shape 
                a solution that solves real pain points.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Agitation Section */}
      <section id="how-it-works" className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1A202C] mb-12">
            The Hidden Costs of AI Code Adoption
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="w-full md:w-[350px] bg-white border border-[#E2E8F0] rounded-lg p-6 shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[#E8F5E9] rounded-full flex items-center justify-center mb-4">
                <Wrench className="w-6 h-6 text-[#1A365D]" aria-label="Technical debt" />
              </div>
              <h3 className="text-lg font-bold text-[#1A202C] mb-3">
                Technical Debt Accumulation
              </h3>
              <p className="text-sm text-[#4A5568]">
                AI tools generate code quickly, but without proper review, they introduce 
                patterns that are difficult to maintain and scale.
              </p>
            </div>

            <div className="w-full md:w-[350px] bg-white border border-[#E2E8F0] rounded-lg p-6 shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[#E3F2FD] rounded-full flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-[#1A365D]" aria-label="Time waste" />
              </div>
              <h3 className="text-lg font-bold text-[#1A202C] mb-3">
                Time Wasted on Debugging
              </h3>
              <p className="text-sm text-[#4A5568]">
                Your senior engineers spend 40% more time debugging AI-generated code 
                compared to human-written code.
              </p>
            </div>

            <div className="w-full md:w-[350px] bg-white border border-[#E2E8F0] rounded-lg p-6 shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[#FFF3E0] rounded-full flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-[#1A365D]" aria-label="Security risk" />
              </div>
              <h3 className="text-lg font-bold text-[#1A202C] mb-3">
                Security Vulnerabilities
              </h3>
              <p className="text-sm text-[#4A5568]">
                AI models trained on public repos often suggest insecure patterns, 
                exposing your application to potential breaches.
              </p>
            </div>
          </div>

          <div className="bg-[#FEF3C7] border-l-4 border-[#F59E0B] p-6 rounded-r-lg">
            <p className="text-lg text-[#92400E]">
              <span className="font-bold text-2xl">$2.4M</span> — Average cost of a data breach 
              caused by code vulnerabilities (IBM Security Report 2025)
            </p>
          </div>
        </div>
      </section>

      {/* Solution Tease Section */}
      <section className="py-20 md:py-24 bg-[#F7FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1A202C] mb-12">
            What You'll Discover in Your Custom Diagnosis
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <CheckCircle2 className="w-6 h-6 text-[#10B981]" aria-label="Check" />
              </div>
              <div>
                <h3 className="font-semibold text-[#1A202C] mb-2">
                  AI Code Quality Score
                </h3>
                <p className="text-[#2D3748]">
                  Comprehensive assessment of your current AI-generated codebase with 
                  actionable metrics.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <CheckCircle2 className="w-6 h-6 text-[#10B981]" aria-label="Check" />
              </div>
              <div>
                <h3 className="font-semibold text-[#1A202C] mb-2">
                  Security Risk Analysis
                </h3>
                <p className="text-[#2D3748]">
                  Identify critical vulnerabilities before they become costly security incidents.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <CheckCircle2 className="w-6 h-6 text-[#10B981]" aria-label="Check" />
              </div>
              <div>
                <h3 className="font-semibold text-[#1A202C] mb-2">
                  Technical Debt Projection
                </h3>
                <p className="text-[#2D3748]">
                  Understand the long-term maintenance costs of your current AI code practices.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <CheckCircle2 className="w-6 h-6 text-[#10B981]" aria-label="Check" />
              </div>
              <div>
                <h3 className="font-semibold text-[#1A202C] mb-2">
                  Best Practices Framework
                </h3>
                <p className="text-[#2D3748]">
                  Custom recommendations for your team to safely leverage AI coding tools.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <CheckCircle2 className="w-6 h-6 text-[#10B981]" aria-label="Check" />
              </div>
              <div>
                <h3 className="font-semibold text-[#1A202C] mb-2">
                  ROI Impact Analysis
                </h3>
                <p className="text-[#2D3748]">
                  Calculate the real productivity gains vs. hidden costs in your organization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Qualification Form Section */}
      <section id="qualification-form" className="py-20 md:py-24 bg-gradient-to-b from-white to-[#F7FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1A202C] mb-4">
            Get Your Free Custom Diagnosis
          </h2>
          <p className="text-center text-[#2D3748] mb-12 text-lg">
            Answer 8 quick questions to receive a personalized report within 48 hours
          </p>

          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-xl p-8 md:p-10">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Work Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-[#2D3748] mb-2">
                  Work Email <span className="text-[#E53E3E]">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  {...register("email", { required: "Email is required" })}
                  className={`w-full h-12 px-4 py-3 border ${errors.email ? 'border-[#E53E3E]' : 'border-[#CBD5E0]'} rounded focus:outline-none focus:border-[#10B981] focus:ring-2 focus:ring-[#10B981] bg-white text-[#2D3748]`}
                  placeholder="you@company.com"
                />
                {errors.email && (
                  <p className="text-[#E53E3E] text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              {/* Full Name */}
              <div>
                <label htmlFor="fullName" className="block text-sm font-semibold text-[#2D3748] mb-2">
                  Full Name <span className="text-[#E53E3E]">*</span>
                </label>
                <input
                  id="fullName"
                  type="text"
                  {...register("fullName", { required: "Name is required" })}
                  className={`w-full h-12 px-4 py-3 border ${errors.fullName ? 'border-[#E53E3E]' : 'border-[#CBD5E0]'} rounded focus:outline-none focus:border-[#10B981] focus:ring-2 focus:ring-[#10B981] bg-white text-[#2D3748]`}
                  placeholder="John Smith"
                />
                {errors.fullName && (
                  <p className="text-[#E53E3E] text-sm mt-1">{errors.fullName.message}</p>
                )}
              </div>

              {/* Job Title */}
              <div>
                <label htmlFor="jobTitle" className="block text-sm font-semibold text-[#2D3748] mb-2">
                  Job Title <span className="text-[#E53E3E]">*</span>
                </label>
                <select
                  id="jobTitle"
                  {...register("jobTitle", { required: "Job title is required" })}
                  className={`w-full h-14 px-4 py-3 border ${errors.jobTitle ? 'border-[#E53E3E]' : 'border-[#CBD5E0]'} rounded focus:outline-none focus:border-[#10B981] focus:ring-2 focus:ring-[#10B981] bg-white text-[#2D3748]`}
                >
                  <option value="">Select your role</option>
                  <option value="CTO">CTO</option>
                  <option value="CEO">CEO</option>
                  <option value="VP Engineering">VP of Engineering</option>
                  <option value="Engineering Director">Engineering Director</option>
                  <option value="Tech Lead">Tech Lead</option>
                  <option value="Other">Other</option>
                </select>
                {errors.jobTitle && (
                  <p className="text-[#E53E3E] text-sm mt-1">{errors.jobTitle.message}</p>
                )}
              </div>

              {/* Company Name */}
              <div>
                <label htmlFor="company" className="block text-sm font-semibold text-[#2D3748] mb-2">
                  Company Name <span className="text-[#E53E3E]">*</span>
                </label>
                <input
                  id="company"
                  type="text"
                  {...register("company", { required: "Company name is required" })}
                  className={`w-full h-12 px-4 py-3 border ${errors.company ? 'border-[#E53E3E]' : 'border-[#CBD5E0]'} rounded focus:outline-none focus:border-[#10B981] focus:ring-2 focus:ring-[#10B981] bg-white text-[#2D3748]`}
                  placeholder="Acme Inc."
                />
                {errors.company && (
                  <p className="text-[#E53E3E] text-sm mt-1">{errors.company.message}</p>
                )}
              </div>

              {/* Company Size */}
              <div>
                <label htmlFor="companySize" className="block text-sm font-semibold text-[#2D3748] mb-2">
                  Company Size <span className="text-[#E53E3E]">*</span>
                </label>
                <select
                  id="companySize"
                  {...register("companySize", { required: "Company size is required" })}
                  className={`w-full h-14 px-4 py-3 border ${errors.companySize ? 'border-[#E53E3E]' : 'border-[#CBD5E0]'} rounded focus:outline-none focus:border-[#10B981] focus:ring-2 focus:ring-[#10B981] bg-white text-[#2D3748]`}
                >
                  <option value="">Select company size</option>
                  <option value="1-10">1-10 employees</option>
                  <option value="11-50">11-50 employees</option>
                  <option value="51-200">51-200 employees</option>
                  <option value="201-500">201-500 employees</option>
                  <option value="500+">500+ employees</option>
                </select>
                {errors.companySize && (
                  <p className="text-[#E53E3E] text-sm mt-1">{errors.companySize.message}</p>
                )}
              </div>

              {/* AI Tool Usage */}
              <div>
                <label className="block text-sm font-semibold text-[#2D3748] mb-3">
                  Which AI coding tools does your team use? <span className="text-[#E53E3E]">*</span>
                </label>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 min-h-[44px]">
                    <input
                      type="checkbox"
                      value="GitHub Copilot"
                      {...register("aiTools", { required: "Please select at least one tool" })}
                      className="w-4 h-4 text-[#10B981] border-gray-300 rounded focus:ring-[#10B981]"
                    />
                    <span className="text-[#2D3748]">GitHub Copilot</span>
                  </label>
                  <label className="flex items-center gap-2 min-h-[44px]">
                    <input
                      type="checkbox"
                      value="ChatGPT/Claude"
                      {...register("aiTools")}
                      className="w-4 h-4 text-[#10B981] border-gray-300 rounded focus:ring-[#10B981]"
                    />
                    <span className="text-[#2D3748]">ChatGPT/Claude</span>
                  </label>
                  <label className="flex items-center gap-2 min-h-[44px]">
                    <input
                      type="checkbox"
                      value="Tabnine"
                      {...register("aiTools")}
                      className="w-4 h-4 text-[#10B981] border-gray-300 rounded focus:ring-[#10B981]"
                    />
                    <span className="text-[#2D3748]">Tabnine</span>
                  </label>
                  <label className="flex items-center gap-2 min-h-[44px]">
                    <input
                      type="checkbox"
                      value="Other"
                      {...register("aiTools")}
                      className="w-4 h-4 text-[#10B981] border-gray-300 rounded focus:ring-[#10B981]"
                    />
                    <span className="text-[#2D3748]">Other</span>
                  </label>
                </div>
                {errors.aiTools && (
                  <p className="text-[#E53E3E] text-sm mt-1">{errors.aiTools.message}</p>
                )}
              </div>

              {/* Biggest Concern */}
              <div>
                <label className="block text-sm font-semibold text-[#2D3748] mb-3">
                  What's your biggest concern about AI-generated code? <span className="text-[#E53E3E]">*</span>
                </label>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 min-h-[44px]">
                    <input
                      type="radio"
                      value="Security vulnerabilities"
                      {...register("concern", { required: "Please select a concern" })}
                      className="w-4 h-4 text-[#10B981] border-gray-300 focus:ring-[#10B981]"
                    />
                    <span className="text-[#2D3748]">Security vulnerabilities</span>
                  </label>
                  <label className="flex items-center gap-2 min-h-[44px]">
                    <input
                      type="radio"
                      value="Code quality"
                      {...register("concern")}
                      className="w-4 h-4 text-[#10B981] border-gray-300 focus:ring-[#10B981]"
                    />
                    <span className="text-[#2D3748]">Code quality and maintainability</span>
                  </label>
                  <label className="flex items-center gap-2 min-h-[44px]">
                    <input
                      type="radio"
                      value="Technical debt"
                      {...register("concern")}
                      className="w-4 h-4 text-[#10B981] border-gray-300 focus:ring-[#10B981]"
                    />
                    <span className="text-[#2D3748]">Technical debt accumulation</span>
                  </label>
                  <label className="flex items-center gap-2 min-h-[44px]">
                    <input
                      type="radio"
                      value="Team productivity"
                      {...register("concern")}
                      className="w-4 h-4 text-[#10B981] border-gray-300 focus:ring-[#10B981]"
                    />
                    <span className="text-[#2D3748]">Impact on team productivity</span>
                  </label>
                </div>
                {errors.concern && (
                  <p className="text-[#E53E3E] text-sm mt-1">{errors.concern.message}</p>
                )}
              </div>

              {/* Additional Comments */}
              <div>
                <label htmlFor="comments" className="block text-sm font-semibold text-[#2D3748] mb-2">
                  Additional Comments (Optional)
                </label>
                <textarea
                  id="comments"
                  rows={4}
                  {...register("comments")}
                  className="w-full px-4 py-3 border border-[#CBD5E0] rounded focus:outline-none focus:border-[#10B981] focus:ring-2 focus:ring-[#10B981] bg-white text-[#2D3748]"
                  placeholder="Tell us more about your specific challenges..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#10B981] text-white px-8 h-14 min-w-[200px] rounded-lg hover:bg-[#059669] transition-all transform hover:scale-[1.02] font-semibold text-base shadow-[0_4px_14px_rgba(16,185,129,0.4)]"
              >
                GET MY FREE DIAGNOSIS
                <ArrowRight className="w-5 h-5" />
              </button>

              {/* Privacy Note */}
              <p className="text-sm text-gray-500 text-center">
                We respect your privacy. Your information will only be used to create your 
                custom diagnosis. Read our <a href="#" className="text-[#10B981] underline">Privacy Policy</a>.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Authority Section */}
      <section id="authority" className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="inline-block bg-[#1A365D]/10 text-[#1A365D] px-4 py-1 rounded-full text-sm font-semibold mb-4">
              Built by Experts
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A202C] mb-4">
              Why Trust CodeQuality AI?
            </h2>
            <p className="text-lg text-[#4A5568] max-w-2xl mx-auto">
              Developed by engineers who've architected AI systems at enterprise scale — 
              now bringing that rigor to PMEs.
            </p>
          </div>

          {/* Authority Pillars */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white border border-[#E2E8F0] rounded-lg p-6 text-center">
              <div className="text-4xl mb-4">🏗️</div>
              <h4 className="font-bold text-[#1A202C] mb-2">Enterprise Architecture</h4>
              <p className="text-sm text-[#4A5568]">
                Applied DDD and Hexagonal Architecture to build maintainable, testable systems in regulated environments.
              </p>
            </div>
            <div className="bg-white border border-[#E2E8F0] rounded-lg p-6 text-center">
              <div className="text-4xl mb-4">🤖</div>
              <h4 className="font-bold text-[#1A202C] mb-2">AI Production Systems</h4>
              <p className="text-sm text-[#4A5568]">
                Built RAG pipelines, multi-agent workflows with crewAI, and real-time conversational experiences with SSE.
              </p>
            </div>
            <div className="bg-white border border-[#E2E8F0] rounded-lg p-6 text-center">
              <div className="text-4xl mb-4">☁️</div>
              <h4 className="font-bold text-[#1A202C] mb-2">Cloud-Native Infrastructure</h4>
              <p className="text-sm text-[#4A5568]">
                Designed scalable AWS infrastructure (CloudFront, API Gateway, Lambda) for low-latency AI services.
              </p>
            </div>
            <div className="bg-white border border-[#E2E8F0] rounded-lg p-6 text-center">
              <div className="text-4xl mb-4">🔐</div>
              <h4 className="font-bold text-[#1A202C] mb-2">Quality & Compliance by Design</h4>
              <p className="text-sm text-[#4A5568]">
                Embedded observability, error handling, and regulatory controls from day one — not as an afterthought.
              </p>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="mt-12 text-center">
            <p className="text-sm text-[#4A5568] mb-4 font-semibold">Built with modern technologies</p>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="bg-[#F7FAFC] px-4 py-2 rounded-lg text-sm text-[#2D3748]">Python</span>
              <span className="bg-[#F7FAFC] px-4 py-2 rounded-lg text-sm text-[#2D3748]">Kotlin</span>
              <span className="bg-[#F7FAFC] px-4 py-2 rounded-lg text-sm text-[#2D3748]">AWS</span>
              <span className="bg-[#F7FAFC] px-4 py-2 rounded-lg text-sm text-[#2D3748]">React</span>
              <span className="bg-[#F7FAFC] px-4 py-2 rounded-lg text-sm text-[#2D3748]">TypeScript</span>
              <span className="bg-[#F7FAFC] px-4 py-2 rounded-lg text-sm text-[#2D3748]">OpenAI API</span>
              <span className="bg-[#F7FAFC] px-4 py-2 rounded-lg text-sm text-[#2D3748]">RAG</span>
              <span className="bg-[#F7FAFC] px-4 py-2 rounded-lg text-sm text-[#2D3748]">crewAI</span>
              <span className="bg-[#F7FAFC] px-4 py-2 rounded-lg text-sm text-[#2D3748]">DDD</span>
              <span className="bg-[#F7FAFC] px-4 py-2 rounded-lg text-sm text-[#2D3748]">Hexagonal Architecture</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 md:py-24 bg-[#F7FAFC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1A202C] mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {[
              {
                question: "How long does it take to receive my diagnosis?",
                answer: "You'll receive your custom diagnosis within 48 hours of submitting the form. Most diagnoses are delivered within 24 hours."
              },
              {
                question: "Is this really free? What's the catch?",
                answer: "Yes, it's completely free with no strings attached. We provide this diagnosis to help tech leaders make informed decisions about AI code quality. There's no obligation to purchase anything."
              },
              {
                question: "What information do you need from my codebase?",
                answer: "We don't need access to your actual codebase. The diagnosis is based on your responses to our questionnaire about your AI tool usage, team size, and primary concerns. If you want a deeper analysis, we can discuss that separately."
              },
              {
                question: "Who is this diagnosis suitable for?",
                answer: "This diagnosis is designed for CTOs, VPs of Engineering, Engineering Directors, and technical decision-makers at companies actively using or considering AI coding tools. It's most valuable for teams of 10+ developers."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200">
                <button
                  type="button"
                  onClick={() => setActiveAccordion(activeAccordion === index ? null : index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors min-h-[44px]"
                  aria-expanded={activeAccordion === index}
                >
                  <span className="font-semibold text-[#1A202C]">{faq.question}</span>
                  {activeAccordion === index ? (
                    <ChevronUp className="w-5 h-5 text-[#1A365D] flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#1A365D] flex-shrink-0" />
                  )}
                </button>
                {activeAccordion === index && (
                  <div className="px-6 pb-4 text-[#2D3748]">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-[#1A365D] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <div className="text-xl font-semibold mb-4 md:mb-0">
              CodeAudit AI
            </div>
            <div className="flex flex-wrap gap-6">
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="mailto:contact@codeaudit.ai" className="text-white/80 hover:text-white transition-colors">
                Contact
              </a>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-white/60 text-sm">
            © 2026 CodeAudit AI. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
