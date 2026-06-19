# Design Guidelines — TixTax

## Visual Identity
- Name: TixTax
- Mood: Playful but clean. Minimal chrome, maximum focus on the board.

## Color Palette
- Background: #F9F9F9 (off-white)
- Surface (board/cards): #FFFFFF
- Primary accent (X): #E74C3C (red)
- Secondary accent (O): #3498DB (blue)
- Text primary: #1A1A2E
- Text secondary: #6B7280
- Border/grid lines: #E5E7EB
- Win highlight: #F0FDF4 with a #22C55E border
- Draw state: #FFF7ED with a #F59E0B border

## Typography
- Font: Inter (Google Fonts)
- Heading (game title): 28–32px, bold, #1A1A2E
- Status text (turn/winner): 18–20px, semibold
- Score labels: 14px, medium, #6B7280
- Score values: 24px, bold

## Layout
- Centered single-column layout, max-width ~400px
- Vertical stack: Title → Score panel → Status text → 3×3 Board → Play Again button
- Generous padding/spacing; board cells are square and large enough to tap easily on mobile

## Board
- 3×3 grid with visible grid lines (2px, #E5E7EB)
- Each cell: ~100×100px, centered content
- X rendered in #E74C3C, bold, large (~48px)
- O rendered in #3498DB, bold, large (~48px)
- Winning cells highlighted with green background (#F0FDF4) and green border
- Hover state on empty cells: light gray background (#F3F4F6)

## Score Panel
- Three columns: X | Draws | O
- Each column shows label + large bold number
- Subtle card background (#FFFFFF) with a light drop shadow
- Scores persist across Play Again resets

## Status Bar
- One line of text above the board
- Examples: "X's turn", "O wins!", "It's a draw!"
- Animate state changes with a simple fade or scale transition

## Buttons
- Play Again: full-width, rounded (8px), background #1A1A2E, text white, 16px semibold
- Hover: slightly lighter (#2D2D44)
- Padding: 12px 24px

## Elevation & Shadow
- Board card: box-shadow 0 2px 8px rgba(0,0,0,0.08)
- Score panel: box-shadow 0 1px 4px rgba(0,0,0,0.06)

## Responsive
- Mobile-first. On small screens the board fills ~90vw.
- No horizontal scroll at any viewport width.