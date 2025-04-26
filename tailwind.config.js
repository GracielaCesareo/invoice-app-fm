// tailwind.config.js
export default {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}', // Ensure this includes all relevant file types
        './stories/**/*.stories.tsx'  // Add your Storybook stories if using them
      ],
    theme: {
      extend: {
        colors: {
            primary: '#7C5DFA',
            primaryHover: '#9277FF',      // Custom blue
            secondary: '#DFE3FA',    // Custom yellow
            secondaryHover: '#888EB0',
            danger: '#EC5757',
            dangerHover: '#9277FF',
            backgroundLigth: '#F8F8FB',   // Light background color
            backgroundDark: '#141625', // Back background color
            dark: '#2d3748',         // Dark text color for contrast
            // Add more colors as per your design system
          },
      },
    },
    plugins: [],
  };
  