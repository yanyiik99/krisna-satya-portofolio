module.exports = {
  mode: 'jit',
  purge: ['*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'logo': 'Jacques Francois',
        'rightNav': 'Archivo Black',
	sans: ["Anton", "system-ui", "-apple- system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "Noto Sans", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"],
      },
      minHeight: {
        '115': '7.18rem',
      },
      colors: {
        utama: "#323232",
        oren: "#E3763E",
        blueNavbar: "#2D4059",
        navbarHover: "#1C3C65",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
