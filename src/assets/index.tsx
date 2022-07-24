const assets = {
  lotties: {
    bg: {
      summer: require('./lotties/bg/summer.json'),
      cloudy: require('./lotties/bg/cloudy.json'),
      snow: require('./lotties/bg/snow.json'),
    },
    weathers: {
      cloudynight: require('./lotties/weathers/cloudynight.json'),
      foggy: require('./lotties/weathers/foggy.json'),
      mist: require('./lotties/weathers/mist.json'),
      night: require('./lotties/weathers/night.json'),
      partly_cloudy: require('./lotties/weathers/partly-cloudy.json'),
      partly_shower: require('./lotties/weathers/partly-shower.json'),
      rainynight: require('./lotties/weathers/rainynight.json'),
      snow_sunny: require('./lotties/weathers/snow-sunny.json'),
      snow: require('./lotties/weathers/snow.json'),
      storm: require('./lotties/weathers/storm.json'),
      stormshowersday: require('./lotties/weathers/stormshowersday.json'),
      sunny: require('./lotties/weathers/sunny.json'),
      thunder: require('./lotties/weathers/thunder.json'),
      windy: require('./lotties/weathers/windy.json'),
    },
  },
  icons: {
    plus: require('./icons/plus.png'),
  },
}

export type WeathersType = 'cloudynight' | 'foggy' | 'mist'
export default assets