---
name: Functional Clarity
colors:
  surface: '#fcf9f8'
  surface-dim: '#dcd9d9'
  surface-bright: '#fcf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f2'
  surface-container: '#f0eded'
  surface-container-high: '#eae7e7'
  surface-container-highest: '#e5e2e1'
  on-surface: '#1c1b1b'
  on-surface-variant: '#43474f'
  inverse-surface: '#313030'
  inverse-on-surface: '#f3f0ef'
  outline: '#737780'
  outline-variant: '#c3c6d1'
  surface-tint: '#3a5f94'
  primary: '#001e40'
  on-primary: '#ffffff'
  primary-container: '#003366'
  on-primary-container: '#799dd6'
  inverse-primary: '#a7c8ff'
  secondary: '#5d5f5f'
  on-secondary: '#ffffff'
  secondary-container: '#dfe0e0'
  on-secondary-container: '#616363'
  tertiary: '#351600'
  on-tertiary: '#ffffff'
  tertiary-container: '#542700'
  on-tertiary-container: '#f27b00'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d5e3ff'
  primary-fixed-dim: '#a7c8ff'
  on-primary-fixed: '#001b3c'
  on-primary-fixed-variant: '#1f477b'
  secondary-fixed: '#e2e2e2'
  secondary-fixed-dim: '#c6c6c7'
  on-secondary-fixed: '#1a1c1c'
  on-secondary-fixed-variant: '#454747'
  tertiary-fixed: '#ffdcc6'
  tertiary-fixed-dim: '#ffb786'
  on-tertiary-fixed: '#311300'
  on-tertiary-fixed-variant: '#723600'
  background: '#fcf9f8'
  on-background: '#1c1b1b'
  surface-variant: '#e5e2e1'
typography:
  headline-lg:
    fontFamily: Lexend
    fontSize: 34px
    fontWeight: '700'
    lineHeight: 44px
  headline-md:
    fontFamily: Lexend
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
  body-lg:
    fontFamily: Lexend
    fontSize: 22px
    fontWeight: '400'
    lineHeight: 32px
  body-md:
    fontFamily: Lexend
    fontSize: 20px
    fontWeight: '400'
    lineHeight: 28px
  label-lg:
    fontFamily: Lexend
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: 0.5px
  button:
    fontFamily: Lexend
    fontSize: 22px
    fontWeight: '700'
    lineHeight: 24px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  margin-mobile: 24px
  gutter: 16px
  touch-target-min: 64px
  padding-button: 20px 32px
---

## Brand & Style

This design system is engineered for maximum cognitive ease and visual accessibility, specifically tailored for older adults. The brand personality is dependable, patient, and empowering. It avoids visual clutter and "clever" UI patterns in favor of directness and high legibility. 

The aesthetic style is **High-Contrast / Bold** mixed with **Modern Corporate** sensibilities. By utilizing thick strokes, vibrant action colors, and massive touch targets, the interface prioritizes utility over decoration. The goal is to evoke a sense of confidence and independence for the user, ensuring that every interaction is intentional and every piece of information is unmistakable.

## Colors

The color palette is strictly regulated to maintain a high contrast ratio (WCAG AAA standards where possible). 

- **Primary (Deep Blue):** Used for headers, primary navigation, and core branding elements to provide a sense of stability.
- **Secondary (Crisp White):** The primary background color to ensure text "pops" and the interface feels fresh and clean.
- **Action Colors:** Specific semantic colors are used for critical tasks. **Red** is reserved exclusively for "Clear," "Delete," or "Stop" actions. **Orange** is utilized for "Undo" or "Modify" actions, providing a distinct visual tier from standard confirmations.
- **Neutral:** A very dark grey is used for body text instead of pure black to reduce eye strain while maintaining maximum legibility against white backgrounds.

## Typography

This design system utilizes **Lexend**, a typeface specifically designed to reduce visual stress and improve reading performance. 

The typographic scale is intentionally oversized. The minimum body text size is set at 20px to accommodate users with presbyopia or other age-related visual impairments. Headlines are bold and heavy to clearly anchor the user's focus on the page. All text uses increased line heights to prevent "crowding" and ensure that each line of text is easily trackable.

## Layout & Spacing

The layout follows a **fluid grid** model with generous safe areas. A 24px outer margin is enforced on all screens to prevent content from hitting the edges of the device where it may be harder to read or interact with.

Spacing follows an 8px rhythmic grid. However, priority is given to the **Touch Target Minimum of 64px**. This exceeds the standard 48px recommendation to account for reduced motor precision. White space is used aggressively to separate functional groups, ensuring that users do not accidentally trigger the wrong action.

## Elevation & Depth

This design system avoids subtle ambient shadows which can appear blurry or indistinct to older eyes. Instead, it uses **Bold Borders** and **Tonal Layers** to communicate hierarchy.

- **Surface Levels:** High-contrast borders (2px width) are used to define cards and input fields.
- **Active States:** When a button is pressed, it should visually "sink" using a solid inset border or a color shift, rather than a soft shadow change.
- **Modals:** Use a high-opacity (80%+) dark backdrop to completely isolate the foreground task and eliminate background distractions.

## Shapes

The shape language uses **Rounded** corners to make the interface feel approachable and safe. 

A standard 8px (0.5rem) radius is applied to cards and containers. For primary buttons and interactive chips, a larger radius is used to make them feel "squishy" and inviting to touch. These soft edges contrast with the high-contrast color palette to ensure the app feels modern and friendly rather than clinical or overly rigid.

## Components

### Buttons
Buttons are the core of the experience. They must be full-width or large-format with a minimum height of 64px. Text within buttons is always bold and centered. Primary buttons use the Deep Blue background with White text; the "Clear" button uses Red; the "Undo" button uses Orange.

### Lists
List items must have a minimum height of 80px to ensure easy tapping. Every list item should include a large trailing chevron or icon to indicate interactivity. Use 2px dividers between items for clear separation.

### Inputs
Text fields must have a 2px border at all times (not just on focus). Labels are persistent and placed above the field, never as placeholder text, to ensure the user doesn't lose context while typing.

### Checkboxes & Radios
These elements are scaled to 150% of standard size. They must be accompanied by a large, tap-sensitive label area so the user doesn't have to hit the small box precisely.

### Cards
Cards are used to group related information. They should have a 2px border in a light grey or the primary blue to clearly define the container boundaries against the white background.