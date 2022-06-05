module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'barlow-condensed': ['Barlow Condensed'],
        'barlow': ['Barlow'],
        'bellefair': ['Bellefair']
      },
      backgroundImage: {
        'home-desktop': 'url("./assets/background-home-desktop.jpg")',
        'home-tablet': 'url("./assets/background-home-tablet.jpg")',
        'home-mobile': 'url("./assets/background-home-mobile.jpg")',
        'destination-desktop': 'url("./assets/destination/background-destination-desktop.jpg")',
        'destination-tablet': 'url("./assets/destination/background-destination-tablet.jpg")',
        'destination-mobile': 'url("./assets/destination/background-destination-mobile.jpg")',
        'crew-mobile': 'url("./assets/crew/background-crew-mobile.jpg")',
        'crew-tablet': 'url("./assets/crew/background-crew-tablet.jpg")',
        'crew-desktop': 'url("./assets/crew/background-crew-desktop.jpg")',
        'technology-desktop': 'url("./assets/technology/background-technology-desktop.jpg")',
        'technology-tablet': 'url("./assets/technology/background-technology-tablet.jpg")',
        'technology-mobile': 'url("./assets/technology/background-technology-mobile.jpg")'
      }
    },
  },
  plugins: [],
}
