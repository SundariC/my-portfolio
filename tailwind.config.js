export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        'pulse-slow': 'pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      colors: {
        neonPurple: '#a855f7',
        neonBlue: '#3b82f6',
      },
    },
  },
  plugins: [],
}