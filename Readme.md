# Document Signup Form

A responsive, accessible signup form with dynamic field validation and conditional content display.

## Description

This project implements a multi-section signup form that collects user account information, development skills, experience level, and referral source. The form includes client-side validation, dynamic field visibility based on user selections, and a clean, modern user interface.

## Features

- **Account Information Section**: Full name, email, and password with validation
- **Dev Skills Section**: Checkboxes for languages, frameworks, and DevOps tools
- **Experience Level**: Radio buttons for beginner to advanced levels
- **Referral Tracking**: Dropdown with conditional textarea for "Magic!" and "Other" options
- **Form Actions**: Submit and clear functionality with form reset
- **Responsive Design**: Works on mobile, tablet, and desktop viewports
- **Accessible**: Semantic HTML, ARIA labels, and visually hidden labels

## Theme & Design Intent

### Color Palette
- **Primary Blue**: `#2a5298` - Used for legend circles, submit button, and focus states
- **Accent Blue**: `#1389de` - Hover state for primary button
- **Background Gradient**: Deep blue to sky blue with rose accent
  - Creates depth and visual interest
  - Complements the white form card
- **Form Background**: Clean white (`#ffffff`) for maximum readability
- **Input Background**: Light gray-blue (`rgb(226, 231, 236)`) for subtle contrast
- **Error Red**: `#e63946` - Invalid input states
- **Text**: Dark gray/black for strong contrast and accessibility

### Typography
- **Font**: Roboto Slab (Google Font) - serif font for a professional, structured appearance
- **Font Weights**: 400 (regular), 600 (semi-bold), 700 (bold)
- **Hierarchy**: Clear sizing differences between headings, labels, and body text

### Visual Elements
- **Gradient Background**: Radial gradient (rose) layered with linear gradient (blue spectrum)
  - Creates a sophisticated, modern aesthetic
  - Draws user focus to the centered form card
- **Box Shadow**: `1.2rem 1.2rem 4rem -0.6rem black` - Elevated card effect
- **Border Radius**: 16px on form card, 5px on buttons, 2px on inputs
  - Soft, modern appearance with subtle hierarchy
- **Focus States**: Blue box-shadow with transparent overlay for clear keyboard navigation
- **Transitions**: Smooth 0.1-0.2s transitions on buttons and inputs for polished interactions

### Contrast & Accessibility
- Maintains WCAG AA compliance with sufficient color contrast ratios
- Legend circle numbers: white on dark blue (strong contrast)
- Form text: dark on white background
- Placeholder text: medium gray for subtle distinction
- Invalid states: red color with border change for color-blind accessibility

## Technical Notes

- Uses CSS Grid for responsive skill checkboxes layout
- JavaScript handles dynamic visibility of "Other" details textarea
- Form validation uses HTML5 attributes with JavaScript fallback
- Flexbox layout for centering and responsive behavior
- CSS custom properties ready for future theme customization