import Vue from 'vue'
import VueResource from 'vue-resource'

import components from './components'
import store from './store'

import numeral from 'numeral'
numeral.language('en', {
  delimiters: {
    thousands: ',',
    decimal: '.'
  },
  abbreviations: {
    thousand: 'k',
    million: 'm',
    billion: 'b',
    trillion: 't'
  },
  ordinal (number) {
    const b = number % 10
    return (~~(number % 100 / 10) === 1) ? 'th'
    : (b === 1) ? 'st'
    : (b === 2) ? 'nd'
    : (b === 3) ? 'rd' : 'th'
  },
  currency: {
    symbol: '£'
  }
})

Vue.use(VueResource)

Vue.filter('toString', (val) => {
  return String(val)
})

Vue.filter('default', (val, def) => {
  if (undefined === val) {
    return def
  }

  return val
})

Vue.filter('currency', (val) => {
  if (undefined === val) {
    val = -1
  }

  if (isNaN(val)) {
    return 0
  }

  return numeral(val).format('$0,0.00')
})

Vue.config.debug = true

new Vue({
  components,
  store
}).$mount('body')
