# DESIGN SYSTEM UPGRADE — Dr. Gustavo Guerra
## Level: Medical Luxury / Premium Authority

---

## 1. COLOR SYSTEM

Primary palette (strictly follow):
- Petroleum Blue (hero/dark sections): #0D2233
- Graphite (secondary dark sections): #1C2B35
- Off-white (light sections): #F7F7F5
- Matte Gold accent (details only): #C9A96E

Rules for Matte Gold (#C9A96E):
- Use ONLY on: section labels, left card borders, 
  hover states, thin decorative lines, navbar bottom border
- NEVER use as background or large fill
- Opacity can be reduced to 0.4–0.6 for background texture elements
- It must feel like a whisper, not a statement

---

## 2. COLOR RHYTHM (CRITICAL)

The page MUST alternate between light and dark sections 
to create visual drama and hierarchy.

Mandatory alternation pattern:
- Hero → Background: #0D2233 | Text: white
- Problem Section → Background: #F7F7F5 | Text: dark
- Method 360° → Background: #0D2233 | Text: white
- Differentials → Background: #F7F7F5 | Text: dark
- Authority → Background: #1C2B35 | Text: white
- FAQ → Background: #F7F7F5 | Text: dark
- Final CTA → Background: #0D2233 | Text: white

Rule: NEVER two consecutive light sections. NEVER two consecutive dark sections.

---

## 3. HERO SECTION (Full Redesign)

- Background: Petroleum Blue (#0D2233)
- Add a thin horizontal hairline in Matte Gold (#C9A96E) 
  below the "GESTÃO ESTRATÉGICA DE SAÚDE" label
- Credentials card (right side):
  - Background: rgba(255,255,255,0.06) — frosted glass effect
  - Border: 1px solid rgba(255,255,255,0.12)
  - Add a minimal medical shield or thin cross icon at the top of the card
- Add a thin elegant divider between the two CTA buttons

---

## 4. CARDS (Personality Upgrade)

Current 2x2 cards are too generic. Apply:
- Left border: 3px solid #0D2233 on each card
- Add ordinal number (01, 02, 03, 04) in the top-right corner 
  of each card using serif font, color #D0D0D0, size 48px 
  — acts as a decorative graphic element
- Hover state: subtle box-shadow elevation + left border 
  color transitions to Matte Gold (#C9A96E) over 0.3s

---

## 5. TYPOGRAPHY (Final Refinement)

Section labels (e.g. "MÉTODO 360°", "AUTORIDADE"):
- font-size: 11px
- letter-spacing: 0.2em
- color: #C9A96E
- font-weight: 600
- text-transform: uppercase

H2 Titles: Keep serif font, but italicize one key word 
for elegant typographic contrast.
Example: "Excelência técnica *com* compromisso humano."

Card subtitles:
- font-weight: 600
- sans-serif
- font-size: 17px

---

## 6. NAVBAR (Refinement)

- Add a 1px bottom border in Matte Gold (#C9A96E)
- "Dr. Gustavo Guerra" should have a subtle medical symbol before the name
- Navbar background: white with backdrop-filter: blur(8px) 
  for frosted glass effect on scroll (sticky navbar)

---

## 7. AUTHORITY SECTION (Redesign)

Replace the single text card with a 2-column layout:
- Left column: Title + biographical text
- Right column: Credentials list with thin line-style check icons 
  + a pull quote with large typographic quotation marks in Petroleum Blue

---

## 8. IDENTITY GRAPHIC DETAIL

Add in at least 2 sections a subtle background graphic element:
- A thin diagonal line or incomplete circle arc in 
  rgba(201, 169, 110, 0.12) — acts as a luxury texture layer
- Must not draw attention — only adds visual depth

---

## 9. CTA BUTTONS (Final Refinement)

Primary button:
- Background: #0D2233
- Border: none
- Padding: 16px 40px
- Letter-spacing: 0.08em
- Hover: background transitions to #C9A96E over 0.3s

Secondary button:
- Background: transparent
- Border: 1px solid #0D2233
- Hover: background #0D2233, text white

---

## 10. FOOTER

Add a clean, elegant footer:
- Background: #0A1A24 (slightly darker than Petroleum Blue)
- Include doctor's CRM number
- Thin separator line in Matte Gold (#C9A96E)
- Tagline: "Evidence-based medicine. Purpose-based care."

---

## FINAL INSTRUCTION FOR THE CODE AGENT:

"Implement all changes above while preserving all existing content.
The goal is to elevate the visual from 'clean clinic' to 
'high-standard medicine with a strong visual identity.'

Color hierarchy to follow strictly:
- Petroleum Blue (#0D2233) → The protagonist
- Off-white (#F7F7F5) → The breathing space
- Graphite (#1C2B35) → The depth
- Matte Gold (#C9A96E) → The signature

Matte Gold must always feel restrained and intentional — 
never decorative for its own sake.
The overall feeling must be: solid, clean, sophisticated, 
masculine, and unmistakably premium."