/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        examBlue: '#CBDCF6',
        examYellow: '#F9E6A7',
        examRed: '#F8D3CC',
        examGreen: '#D6F0E0',
        badgeGray: '#D9D9D9',
        upcomingPurple: '#D9D9F5',
        upcomingGreen: '#D9F5E3',
        sidebarTop: "#8dd1ff60",
        sidebarBottom: "#ffffff8c",
        sidebarActiveBg: '#F3F4F6',
        calendarPillBg: '#F3F4F6',
      },
      borderRadius: {
        xl: '12px',
        lg: '8px',
      },
      fontFamily: {
        sans: ['ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        sm: '0 1px 3px rgba(0,0,0,0.1)',
      }
    },
  },
  plugins: [],
}
