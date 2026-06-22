<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->
# AGENTS.md

## Project Overview

This project is a Pharmacy EPOS (Electronic Point of Sale) system used by pharmacy staff for sales, prescriptions, inventory management, reporting, and customer transactions.

The application is optimized for speed, readability, and long working sessions. Prioritize usability over visual flair.

---

## Design Principles

* Enterprise-first UI
* Fast information scanning
* Minimal cognitive load
* Accessible color contrast
* Consistent spacing and typography
* Mobile responsiveness is secondary to desktop usability
* Avoid decorative UI elements
* Prefer clarity over creativity

---

## Color System

### Backgrounds

* Background: #FAFAF8
* Surface/Card: #FFFFFF

### Text

* Primary Text: #1C1C1E
* Secondary Text: #6B7280
* Disabled Text: #9CA3AF

### Actions

* Primary: #0F766E
* Success: #16A34A
* Warning: #D97706
* Destructive: #DC2626

### Borders

* Border: #E5E7EB

---

## Typography

### Primary Font

Use Geist Sans for all UI elements.

### Monospace Font

Use Geist Mono for:

* Transaction IDs
* Invoice numbers
* Prescription references
* Product codes
* Batch numbers

### Font Sizes

* Page Title: 32px / font-semibold
* Section Title: 20px / font-semibold
* Body Text: 14px / font-normal
* Secondary Text: 13px / font-normal
* KPI Values: 18px / font-semibold

---

## Layout Standards

### Cards

* White background
* Rounded corners
* Subtle border
* Consistent padding

### Tables

* Dense but readable
* Sticky headers when appropriate
* Zebra striping should be subtle
* Avoid excessive borders

### Forms

* Labels above inputs
* Clear validation messages
* Required fields clearly marked

### Buttons

Primary:

* Background: Primary color
* White text

Secondary:

* Outline style

Destructive:

* Destructive color

---

## Dashboard Standards

Dashboard pages should contain:

* Key metrics at the top
* Filters near the relevant content
* Tables as the primary data display
* Avoid unnecessary charts

---

## Code Standards

* Use TypeScript
* Prefer server components where possible
* Use reusable UI components
* Avoid duplicated logic
* Keep components small and focused

---

## Accessibility

* Maintain WCAG-compliant contrast
* Support keyboard navigation
* Use semantic HTML
* Provide aria labels where needed

---

## AI Agent Instructions

When generating new pages or components:

* Follow the design system defined above
* Reuse existing UI components before creating new ones
* Prefer consistency over experimentation
* Use the established color palette
* Do not introduce dark mode unless explicitly requested
* Do not introduce additional fonts
* Optimize for pharmacy staff using the application for long periods
