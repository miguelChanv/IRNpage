/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    divideWidth: {
      DEFAULT: '3px',
    },
    extend: {
      backgroundImage: { 
        'banner': "url('https://images.pexels.com/photos/3721941/pexels-photo-3721941.jpeg?cs=srgb&dl=pexels-daniel-reche-3721941.jpg&fm=jpg')", 
        'card': "url('https://ksassets.timeincuk.net/wp/uploads/sites/55/2014/09/EMINEM-WEMBLEY2-JEREMYDEPUTAT-copy-1.jpg')",
      },
      fontFamily: {
        markProLight: ['MarkLight', 'sans'],
        markPro: ['MarkPro', 'sans'],
        markProMedium: ['MarkProMedium', 'sans'],
        markProBold: ['MarkProBold', 'sans'],
        markProHeavy: ['MarkProHeavy', 'sans'],
        markProBlack: ['MarkProBlack', 'sans'],
      },
      colors: {
        'primary': '#FF5100',
        'secondary': '#230871',
      },
    },
    plugins: [],
  }
}
