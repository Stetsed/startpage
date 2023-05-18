/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors: {
      'background': "#1e1e2e",
      'colortext': "#cdd6f4",
      'sapphire': '#74c7ec',
      'ruby': "#f38ba8",
      'emerald': "#a6e3a1",
      'boxbackground': '#313244',
    },
    extend: {
      fontFamily: {
        jetbrains: ['JetBrains Mono', 'monospace'],
      },
    }
  },
  plugins: [require("daisyui")],
}

