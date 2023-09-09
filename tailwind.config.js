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
        'banner': "url('https://th.bing.com/th/id/R.6197195ca2042fbbeb86312b84af35d4?rik=%2fPGfnnDWt8TT3A&pid=ImgRaw&r=0')", 
        'card': "url('https://scontent.fmex3-2.fna.fbcdn.net/v/t39.30808-6/329954990_980336889601048_8012090807132942794_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=a2f6c7&_nc_eui2=AeFln2FRpOKYLwZW1n4rRhL7M9wT47IdKz4z3BPjsh0rPjDwoK-08YK_xrSkyOR1kNszSzcckMV5OJb9CLZu4u2U&_nc_ohc=T2WGJFtRvcIAX8nL58i&_nc_ht=scontent.fmex3-2.fna&oh=00_AfDAoEhYFvSBPcSFD0dqHl0YDDzqxFQjxCMHwGgSrvNYyg&oe=650034BE')",
        'contact':"url('https://th.bing.com/th/id/OIP.VC3VocGRslZq96ECVSHcjwEsDh?pid=ImgDet&rs=1')",
        'click': "url('https://www.pinclipart.com/picdir/big/539-5395427_finger-click-png-finger-click-icon-png-clipart.png')"
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
