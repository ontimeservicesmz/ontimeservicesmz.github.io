

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        'body': [
            'Lexend Deca',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'system-ui',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'Noto Sans',
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
          'Noto Color Emoji'
        ],
        'sans': [
          'Lexend Deca',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'system-ui',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'Noto Sans',
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
          'Noto Color Emoji'
        ]
      },
      colors: {
         primary: {
           "0": "#ffffff",
           "50": "#f1ecff",
           "100": "#e3daff",
           "150": "#d4c8ff",
           "200": "#c5b6ff",
           "250": "#b4a4ff",
           "300": "#a392ff",
           "350": "#8f81ff",
           "400": "#7a70ff",
           "450": "#605fff",
           "500": "#3b4fff",
           "550": "#1e44f1",
           "600": "#243dd6",
           "650": "#2637bc",
           "700": "#2731a2",
           "750": "#262b8a",
           "800": "#242571",
           "850": "#211f5a",
           "900": "#1c1944",
           "950": "#17132f",
           "1000": "#100b1b",
           "1050": "#000000"


         }
      }
    },
    textFillColor: theme => theme('borderColor'),
    textStrokeColor: theme => theme('borderColor'),
    textStrokeWidth: theme => theme('borderWidth'),
    aspectRatio: {
      '4/3': '4 / 3',
    },
    paintOrder: {
      'fsm': { paintOrder: 'fill stroke markers' },
      'fms': { paintOrder: 'fill markers stroke' },
      'sfm': { paintOrder: 'stroke fill markers' },
      'smf': { paintOrder: 'stroke markers fill' },
      'mfs': { paintOrder: 'markers fill stroke' },
      'msf': { paintOrder: 'markers stroke fill' },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
      require('flowbite/plugin'),
      require('@tailwindcss/forms'),
      require('@tailwindcss/typography')
  ],
}