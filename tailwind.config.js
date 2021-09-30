module.exports = {
  mode: 'jit',
  purge: ['*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'logo': 'Jacques Francois',
        'rightNav': ['Archivo Black', 'sans'],
	      'sans': ["Anton", "system-ui", "-apple- system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "Noto Sans", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"],
      },
      fontSize: {
        '110' : '6.87rem',
      },
      minHeight: {
        '115': '7.18rem',
      },
      colors: {
        utama: "#323232",
        oren: "#E3763E",
        blueNavbar: "#2D4059",
        navbarHover: "#1C3C65",
      },
      spacing: {
        '216': '16.31rem',
        '330': '20.62rem',
        '350': '21.87rem',
        '420': '26.25rem',
        '430': '26.87rem',
        '480': '30rem',
        '500': '31.25rem',
        '550': '34.37rem',
        '580': '36.25rem',
        '600': '37.5rem',
        '680': '42.5rem',
        '750': '46.87rem',
        '800': '50rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
