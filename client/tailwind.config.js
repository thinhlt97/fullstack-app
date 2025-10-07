/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: '#2563eb', // xanh chuyên nghiệp
        secondary: '#facc15', // vàng nhẹ tạo điểm nhấn
        dark: '#0f172a',
        light: '#f8fafc'
      },
      boxShadow: {
        card: "0 4px 12px rgba(0,0,0,0.08)",
      },
    },
  },
  plugins: [],
}
