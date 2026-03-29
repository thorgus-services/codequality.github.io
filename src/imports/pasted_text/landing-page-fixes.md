=====================================================================
CORREÇÃO DE ESTRUTURA - MANTER AMBOS FORMULÁRIOS
=====================================================================

CRITICAL FIX: There are TWO different forms on this landing page.
DO NOT replace one with the other. Both must exist:

FORM 1 - MAIN QUALIFICATION FORM (Long Form)
- Location: Dedicated section near bottom of page
- Purpose: Generate full diagnosis with KPIs
- Fields: 10-11 fields (comprehensive)
- CTA: "GERAR DIAGNÓSTICO GRATUITO →"
- Section ID: "diagnosis-form"

FORM 2 - MICRO VALIDATION FORM (Short Form in MODAL)
- Location: Inside a MODAL/POPUP (NOT a page section)
- Purpose: Quick validation interest capture
- Fields: 3 fields only (name, email, interest dropdown)
- CTA: "Enviar →"
- Trigger: Secondary CTA buttons open this modal
- Modal ID: "validation-modal"

=====================================================================
SECTION: HERO TRUST BADGES (2-Column Grid) - FIX MISSING CTA
=====================================================================

Create TWO trust badge cards side-by-side below main CTA:

CARD 1 - LEFT (Privacy-by-Design):
Title: "🔐 Privacy-by-Design"
Subtitle: "Seu código está protegido"
Bullets (3 items):
  • "Seu código nunca é usado para treinar modelos externos"
  • "Anonimização automática de dados sensíveis"
  • "Relatório 100% confidencial"

CARD 2 - RIGHT (Em Desenvolvimento Ativo):
Title: "🔬 Em Desenvolvimento Ativo"
Subtitle: "CodeQuality AI está sendo construído com base em:"
Bullets (3 items):
  • "Pesquisa de mercado com líderes de engenharia de PMEs tech"
  • "Princípios de engenharia validados em ambientes enterprise"
  • "Metodologias de governança de IA em evolução contínua"
SECONDARY CTA BUTTON (inside this card):
  • Text: "Participe da validação →"
  • Style: Outline, blue border (#3B82F6), transparent background
  • Action: Opens validation modal (NOT scroll to section)
  • Icon: Arrow right

DESIGN REQUIREMENTS FOR BOTH CARDS:
- Layout: 2-column grid on desktop, stacked on mobile
- Card Size: EQUAL dimensions (min-height: 320px, same width)
- Background: Semi-transparent white (rgba 255,255,255,0.1)
- Border: 1px solid rgba(255,255,255,0.3)
- Border Radius: 12px
- Padding: 24px
- Text Alignment: LEFT aligned (not centered)
- Typography:
  • Title: 18px, Semibold, White
  • Subtitle: 14px, Regular, rgba(255,255,255,0.9)
  • Bullets: 14px, Regular, rgba(255,255,255,0.85)
  • Button: 14px, Semibold
- Gap Between Cards: 24px
- Mobile: Stack vertically, maintain same styling

=====================================================================
MODAL COMPONENT: VALIDATION FORM (NOT A PAGE SECTION)
=====================================================================

Create a MODAL/POPUP component (separate from page flow):

MODAL STRUCTURE:
- Overlay: Dark semi-transparent background (rgba 0,0,0,0.6)
- Modal Box: Centered, max-width 500px
- Background: White (#FFFFFF)
- Border Radius: 12px
- Padding: 32px
- Shadow: 0 8px 32px rgba(0,0,0,0.2)
- Close Button: X icon, top-right corner

MODAL CONTENT:
Title: "Participe da Validação"
Subtitle: "Ajude a construir a solução certa para o mercado"

FORM FIELDS (3 only):
1. Name (text input)
   - Label: "Seu nome *"
   - Placeholder: "Digite seu nome completo"
   - Required: Yes
   - Height: 48px

2. Email (email input)
   - Label: "E-mail corporativo *"
   - Placeholder: "seu@empresa.com"
   - Required: Yes
   - Height: 48px

3. Interest (dropdown/select)
   - Label: "Tenho interesse em..."
   - Options:
     • "Participar do pilot gratuito"
     • "Dar feedback sobre a ideia"
     • "Explorar parceria com minha comunidade"
   - Required: Yes
   - Height: 48px

SUBMIT BUTTON:
- Text: "Enviar →"
- Style: Solid blue (#3B82F6)
- Width: Full width
- Height: 48px
- Border Radius: 8px
- Hover: Darken 10% + 2px lift

PRIVACY NOTE (below button):
"🔐 Seus dados estão seguros. Não enviamos spam."

MODAL TRIGGER BUTTONS (place in multiple locations):
- Location 1: Inside Hero "Em Desenvolvimento Ativo" card
- Location 2: After Authority section (optional)
- Location 3: Exit-intent popup (note for dev)
- Button Style: Outline, blue border, 48px height
- Button Text: "Participe da validação →"
- Action: Open validation-modal

=====================================================================
SECTION: MAIN QUALIFICATION FORM (Keep Original)
=====================================================================

DO NOT REMOVE OR REPLACE THIS SECTION.

SECTION ID: "diagnosis-form"
SECTION TITLE: "Responda 7 Perguntas Para Gerar Seu Diagnóstico"

FORM FIELDS (10-11 fields):
1. Nome Completo * (text)
2. E-mail Corporativo * (email)
3. Cargo * (dropdown: CEO/Founder, CTO, VP Engenharia, GPM, Tech Lead, Outro)
4. Tamanho do Time * (dropdown: 1-5, 6-15, 16-50, 50+)
5. Usa IA para código? * (radio: Sim amplamente, Sim pontualmente, Não mas planeja, Não)
6. Horas/semana revisando código IA * (dropdown: Não revisamos, <1h, 1-5h, 5-10h, 10-20h, >20h)
7. Bugs em produção (último trimestre) * (dropdown: Nenhum, 1-3, 4-10, 11-20, >20, Não medimos)
8. Features por sprint * (dropdown: <3, 3-5, 6-10, 11-15, >15, Não medimos)
9. Maior preocupação * (dropdown: Qualidade, Segurança, Conformidade, Dívida técnica, Treinamento, Outro)
10. Restrições de código externo? * (radio: Sim rígidas, Sim moderadas, Não, Não sei)
11. Posso contactar para feedback? (checkbox: Sim, quero otimizar meu resultado)

SUBMIT BUTTON:
- Text: "GERAR DIAGNÓSTICO GRATUITO →"
- Style: Solid green (#16A34A)
- Width: Full width
- Height: 56px

PRIVACY NOTE:
"🔐 Seus dados estão seguros. Não enviamos spam. Código-fonte NÃO é coletado."

FORM CONTAINER:
- Max-width: 650px
- Centered
- Background: White
- Border: 1px solid #E2E8F0
- Border Radius: 12px
- Padding: 40px
- Shadow: 0 4px 16px rgba(0,0,0,0.08)

=====================================================================
GLOBAL REQUIREMENTS
=====================================================================

VISUAL DISTINCTION BETWEEN FORMS:
- Main Form: Green CTA, larger, dedicated section
- Micro Form (Modal): Blue CTA, compact, popup overlay

BUTTON NAMING (for dev handoff):
- Main CTA: "btn-diagnosis-primary"
- Secondary CTA (modal trigger): "btn-validation-secondary"
- Modal Submit: "btn-modal-submit"

MODAL STATES TO DESIGN:
- Default (closed): Not visible
- Open: Overlay + modal box centered
- Success: Checkmark + thank you message
- Error: Field validation states

MOBILE RESPONSIVENESS:
- Modal: Full width on mobile (90% viewport)
- Hero cards: Stack vertically <768px
- Both forms: Full width inputs, 16px font (prevent iOS zoom)

LAYER ORGANIZATION:
- Group modal components separately (Modal_Overlay, Modal_Box, Modal_Form)
- Name trigger buttons clearly (Trigger_Hero, Trigger_Authority)
- Keep both forms in separate groups (Form_Diagnosis, Form_Validation)

=====================================================================
OUTPUT CHECKLIST
=====================================================================

After generation, verify:
☐ Both forms exist (NOT replaced)
☐ Micro-form is inside a MODAL component (NOT a page section)
☐ Secondary CTA button visible in Hero "Em Desenvolvimento Ativo" card
☐ Hero trust badges in 2-column grid, equal size
☐ Main form has 10-11 fields
☐ Modal form has 3 fields
☐ Modal has close button (X)
☐ Modal has overlay background
☐ All button actions labeled for dev
☐ Mobile variants created for both forms