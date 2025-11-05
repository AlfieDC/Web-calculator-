# Web Calculator

A clean, modern, and fully responsive web calculator built with HTML, CSS, and JavaScript. Designed with a minimalist aesthetic, this calculator provides a smooth user experience on all device sizes.

## Features

- **Basic Operations**: Addition, subtraction, multiplication, and division
- **Decimal Support**: Full support for decimal numbers
- **Sign Toggle**: +/− button to toggle between positive and negative numbers
- **Percentage Calculation**: Convert numbers to percentages
- **Delete Function**: Remove the last digit without clearing the entire display
- **Clear Function**: Reset the calculator with the AC (All Clear) button
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Subtle hover effects and transitions for better UX
- **Minimalist UI**: Clean, uncluttered interface with intuitive color coding

## File Structure

\`\`\`
.
├── index.html      # HTML markup and calculator layout
├── styles.css      # Styling and responsive design
├── script.js       # Calculator logic and event handling
└── README.md       # Project documentation
\`\`\`

## Getting Started

1. **Clone or Download** the project files
2. **Open `index.html`** in your web browser
3. Start calculating!

No installation or dependencies required. It's a standalone project that works in any modern browser.

## Button Functions

### Number Buttons (0-9)
Click to add numbers to the display. Multiple numbers can be combined.

### Operators (+, −, ×, /)
- **+**: Addition
- **−**: Subtraction
- **×**: Multiplication
- **/**: Division

### Function Buttons
- **AC**: All Clear - Resets the calculator to 0
- **DEL**: Delete - Removes the last digit
- **%**: Percentage - Converts the number to a percentage (divides by 100)
- **+/−**: Toggle Sign - Changes the number between positive and negative

### Special Buttons
- **.**: Decimal Point - Add decimals to your numbers
- **=**: Equals - Execute the calculation

## Design Highlights

### Color Scheme
- **Number Buttons**: Light gray background
- **Operators**: Blue background
- **Equals Button**: Green background
- **Function Buttons**: Dark gray background

### Responsive Breakpoints
- **Desktop**: Full size display and buttons
- **Tablet (≤480px)**: Scaled down padding and font sizes
- **Mobile (≤360px)**: Optimized for small screens with reduced spacing

## Example Usage

1. Calculate `15 + 23`:
   - Click: `1` → `5` → `+` → `2` → `3` → `=`
   - Result: `38`

2. Convert `50` to negative:
   - Click: `5` → `0` → `+/−`
   - Display: `-50`

3. Calculate percentage:
   - Click: `2` → `5` → `%`
   - Display: `0.25` (which is 25%)

## Browser Support

Works on all modern browsers including:
- Chrome/Chromium
- Firefox
- Safari
- Edge

## Technical Details

### HTML Structure
- Single input field for display (read-only)
- 4-column CSS Grid for button layout
- Semantic button elements with data attributes

### CSS Features
- CSS Grid for layout
- CSS Flexbox for centering
- Media queries for responsive design
- CSS transitions for smooth interactions
- Linear gradient background

### JavaScript Logic
- Event delegation for button clicks
- State management for current input, operators, and previous values
- Input validation (prevents multiple decimals, etc.)
- Safe division (prevents division by zero)

## Tips & Tricks

- Use your **keyboard** to input numbers and operators (1-9, 0, +, -, *, /, .)
- Press **Enter** or **=** to calculate
- Press **Backspace** to delete the last digit
- Click **AC** to clear and start over

## License

Free to use and modify for personal or commercial projects.

