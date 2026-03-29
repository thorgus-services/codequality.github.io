Update the landing page with the following comprehensive changes:

=====================================================================
SECTION 1: HERO SECTION - TRUST BADGES (2-Column Grid Layout)
=====================================================================

Create TWO trust badge cards side-by-side in a 2-column grid below the main CTA:

CARD 1 - LEFT COLUMN:
Title: "🔐 Privacy-by-Design"
Subtitle: "Seu código está protegido"
Bullet Points (3 items with icons):
  • "Seu código nunca é usado para treinar modelos externos" [icon: lock-closed]
  • "Anonimização automática de dados sensíveis" [icon: shield-check]
  • "Relatório 100% confidencial" [icon: document-lock]

CARD 2 - RIGHT COLUMN:
Title: "🔬 Em Desenvolvimento Ativo"
Subtitle: "CodeQuality AI está sendo construído com base em:"
Bullet Points (3 items with icons):
  • "Pesquisa de mercado com líderes de engenharia de PMEs tech" [icon: chart-bar]
  • "Princípios de engenharia validados em ambientes enterprise" [icon: shield-check]
  • "Metodologias de governança de IA em evolução contínua" [icon: arrows-path]

DESIGN REQUIREMENTS FOR BOTH CARDS:
- Layout: 2-column grid on desktop, stacked on mobile
- Card Size: Equal dimensions (min-height: 280px, same width)
- Background: Semi-transparent white (rgba 255,255,255,0.1) on hero gradient
- Border: 1px solid rgba(255,255,255,0.3)
- Border Radius: 12px
- Padding: 24px
- Text Alignment: LEFT aligned (not centered)
- Typography:
  • Title: 18px, Semibold, White (#FFFFFF)
  • Subtitle: 14px, Regular, rgba(255,255,255,0.9)
  • Bullets: 14px, Regular, rgba(255,255,255,0.85)
- Icon Size: 20px, consistent style
- Spacing: 24px gap between columns
- Mobile: Stack vertically, maintain same card styling

=====================================================================
SECTION 2: MICRO-FORM SECTION (Validation Form)
=====================================================================

Create a simplified qualification form section:

SECTION ID: "validation-form"
SECTION TITLE: "Participe da Validação"
SECTION SUBTITLE: "Ajude a construir a solução certa para o mercado"

FORM FIELDS (3 fields only):
1. Name (text input)
   - Placeholder: "Seu nome *"
   - Required: Yes
   - Width: 100%

2. Email (email input)
   - Placeholder: "E-mail corporativo *"
   - Required: Yes
   - Width: 100%

3. Interest (dropdown/select)
   - Placeholder: "Tenho interesse em..."
   - Options:
     • "Participar do pilot gratuito"
     • "Dar feedback sobre a ideia"
     • "Explorar parceria com minha comunidade"
   - Required: Yes
   - Width: 100%

SUBMIT BUTTON:
- Text: "Enviar →"
- Style: Solid blue (#3B82F6)
- Width: Full width
- Height: 48px
- Border Radius: 8px
- Hover: Darken 10% + slight lift (2px)

FORM CONTAINER:
- Max-width: 500px
- Centered on page
- Background: White
- Border: 1px solid #E2E8F0
- Border Radius: 12px
- Padding: 32px
- Shadow: 0 4px 12px rgba(0,0,0,0.1)

SECONDARY CTA BUTTON (in other sections):
- When "Participe da validação →" is clicked, scroll to #validation-form
- Style: Outline, blue border (#3B82F6), transparent background
- Text: Blue (#3B82F6)
- Hover: Fill with blue, white text

=====================================================================
SECTION 3: AUTHORITY SECTION (Institutional Version)
=====================================================================

SECTION TITLE: "🛡️ Desenvolvido por Especialistas em Engenharia de Software Enterprise"
SECTION SUBTITLE: "CodeQuality AI é uma iniciativa da Thorgus, aceleradora de negócios com expertise em produtos tech escaláveis."

CONTENT BLOCK 1 - "Nossa abordagem combina:":
4 bullet points with icons:
  • "14+ anos de experiência coletiva em engenharia de software" [icon: briefcase]
  • "Arquitetura aplicada em ambientes regulados (fintech, saúde, enterprise)" [icon: building-office]
  • "Expertise em padrões: DDD, Arquitetura Hexagonal, Clean Code, TDD" [icon: code-bracket]
  • "Integrações production-grade com IA: RAG, crewAI, OpenAI, SSE" [icon: cpu-chip]

CONTENT BLOCK 2 - "Tecnologias e padrões que dominamos:":
Display as horizontal tag cloud:
[Python] [Kotlin] [AWS] [DDD] [Hexagonal] [RAG] [crewAI] [OpenAI] [SSE] [BFF]

Tag Style:
- Background: #EFF6FF (light blue)
- Text: #1E293B (dark slate)
- Border Radius: 8px
- Padding: 8px 16px
- Spacing: 8px between tags
- Hover: Scale 1.05 + subtle shadow

PRIMARY CTA BUTTON:
- Text: "Conheça a Thorgus →"
- Link: https://thorgus.com
- Style: Solid blue (#3B82F6)
- Width: Auto (fit content)

DESIGN REQUIREMENTS:
- NO personal photos, names, or LinkedIn links
- Use Thorgus brand colors (blue primary, gray secondary)
- Tag cloud wraps gracefully on mobile
- Section padding: 80px vertical (desktop), 40px (mobile)
- Background: Light blue gradient (#EFF6FF)

=====================================================================
SECTION 4: FOOTER (Simplified)
=====================================================================

FOOTER CONTENT:
- Logo: CodeQuality AI (left side)
- Logo: Thorgus (left side, next to CodeQuality AI)
- Copyright Text: "© 2025 CodeQuality AI • Uma iniciativa Thorgus. Projeto em fase de validação de mercado."
- Email Only: "pilot@thorgus.com" (centered, clickable mailto link)
- Disclaimer: "Todos os dados coletados são anonimizados e usados exclusivamente para pesquisa e desenvolvimento de produto."

REMOVE:
- ❌ Privacy Policy link
- ❌ Terms of Use link
- ❌ Contact link
- ❌ Any social media icons

DESIGN REQUIREMENTS:
- Background: Dark navy (#1E293B)
- Text: White/Light gray (#F8FAFC)
- Email: Blue accent (#3B82F6), underlined on hover
- Padding: 40px vertical
- Text Alignment: Center
- Font Size: 14px for copyright, 16px for email

=====================================================================
GLOBAL DESIGN SYSTEM UPDATES
=====================================================================

COLORS:
- Primary Navy: #1E293B
- Primary Blue: #3B82F6
- Primary Blue Hover: #2563EB
- Success Green: #16A34A
- Warning Amber: #D97706
- Error Red: #DC2626
- Background White: #FFFFFF
- Background Light: #F8FAFC
- Background Blue Light: #EFF6FF
- Border Light: #E2E8F0
- Text Dark: #1E293B
- Text Body: #475569
- Text Muted: #64748B

TYPOGRAPHY (Consistent Across Sections):
- H1: 48px / 56px / Semibold (desktop), 32px / 40px (mobile)
- H2: 32px / 40px / Semibold (desktop), 24px / 32px (mobile)
- H3: 24px / 32px / Semibold
- Body Large: 18px / 28px / Regular
- Body: 16px / 24px / Regular
- Body Small: 14px / 20px / Regular
- Caption: 12px / 16px / Regular

BUTTONS:
- Primary CTA: Green (#16A34A), White text, 56px height
- Secondary CTA: Blue outline (#3B82F6), Blue text, 48px height
- Form Submit: Blue (#3B82F6), White text, 48px height
- All buttons: 8px border radius, hover lift 2px

SPACING:
- Section Padding: 80px vertical (desktop), 40px (mobile)
- Container Max: 1200px
- Grid Gap: 24px
- Element Spacing: 16px

=====================================================================
MOBILE RESPONSIVENESS REQUIREMENTS
=====================================================================

- Hero trust badges: Stack vertically on screens <768px
- Authority tag cloud: Wrap to multiple rows on mobile
- Micro-form: Full width, maintain 32px padding
- Footer: Center align all elements
- All text: Minimum 16px for form inputs (prevent iOS zoom)
- Touch targets: Minimum 44px height for all interactive elements

=====================================================================
ACCESSIBILITY REQUIREMENTS
=====================================================================

- Color contrast ratio: Minimum 4.5:1 for all text
- Form labels: Visible (not placeholder-only)
- Focus states: Visible on all interactive elements
- ARIA labels: All icons must have aria-labels
- Skip links: Add "Skip to main content" for screen readers

=====================================================================
OUTPUT REQUIREMENTS
=====================================================================

- Organized layers with clear naming (Section_Hero, Section_Form, etc.)
- Auto-layout enabled for ALL sections
- Components created for: Buttons, Cards, Form Fields, Tags
- Color styles saved as variables
- Text styles saved as variables
- All text editable (no outlined text)
- Create 3 artboards: Desktop (1440px), Tablet (834px), Mobile (390px)