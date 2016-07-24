const state = {
  socialClassLevels: [
    Math.pow(5000, 0) - 1,
    Math.pow(5000, 1) - 1,
    Math.pow(5000, 2) - 1,
    Math.pow(5000, 3) - 1,
    Math.pow(5000, 4) - 1,
    Math.pow(5000, 5) - 1,
    Math.pow(5000, 6) - 1
  ],
  socialClasses: [
    {
      'label': 'Precarious proletariat',
      'description': 'The poorest, most deprived class, scoring low for social and cultural capital.'
    },
    {
      'label': 'Emergent service worker',
      'description': 'A new, young, urban group which is relatively poor but has high social and cultural capital.'
    },
    {
      'label': 'Traditional working class',
      'description': 'Scores low on all forms of capital, but is not completely deprived. Its members have reasonably high house values, explained by this group having the oldest average age at 66.'
    },
    {
      'label': 'New affluent workers',
      'description': 'a young class group which is socially and culturally active, with middling levels of economic capital'
    },
    {
      'label': 'Technical middle class',
      'description': 'a small, distinctive new class group which is prosperous but scores low for social and cultural capital. Distinguished by its social isolation and cultural apathy'
    },
    {
      'label': 'Established middle class',
      'description': 'the second wealthiest, scoring highly on all three capitals. The largest and most gregarious group, scoring second highest for cultural capital'
    },
    {
      'label': 'Elite',
      'description': 'the most privileged group in the UK, distinct from the other six classes through its wealth. This group has the highest levels of all three capitals'
    }
  ],

  /* eslint-disable key-spacing,no-multi-spaces */
  jobs: {
    1:  {'label': 'Hairdresser',            'moneyPerClick': 1,     'baseCost': 20,     'scaleFactor': 1.1},
    2:  {'label': 'Cleaner',                'moneyPerClick': 10,    'baseCost': 900,    'scaleFactor': 1.11},
    3:  {'label': 'Shelf filler',           'moneyPerClick': 15,    'baseCost': 3900,    'scaleFactor': 1.12},
    4:  {'label': 'Housekeeper',            'moneyPerClick': 25,    'baseCost': 6400,    'scaleFactor': 1.13},
    5:  {'label': 'Teaching assistant',     'moneyPerClick': 40,    'baseCost': 9000,    'scaleFactor': 1.14},
    6:  {'label': 'Fishmonger',             'moneyPerClick': 60,    'baseCost': 12400,   'scaleFactor': 1.15},
    7:  {'label': 'Receptionist',           'moneyPerClick': 85,    'baseCost': 21700,   'scaleFactor': 1.16},
    8:  {'label': 'Electrical engineer',    'moneyPerClick': 115,   'baseCost': 32300,   'scaleFactor': 1.17},
    9:  {'label': 'Tax expert',             'moneyPerClick': 150,   'baseCost': 43000,   'scaleFactor': 1.18},
    10: {'label': 'Health professional',    'moneyPerClick': 200,   'baseCost': 54000,   'scaleFactor': 1.19},
    11: {'label': 'Prison officer',         'moneyPerClick': 250,   'baseCost': 65000,   'scaleFactor': 1.20},
    12: {'label': 'Train driver',           'moneyPerClick': 500,   'baseCost': 710000,  'scaleFactor': 1.21},
    13: {'label': 'Broker',                 'moneyPerClick': 1250,  'baseCost': 825000,  'scaleFactor': 1.22},
    14: {'label': 'Financial manager',      'moneyPerClick': 2500,  'baseCost': 950000,  'scaleFactor': 1.23},
    15: {'label': 'IT director',            'moneyPerClick': 5000,  'baseCost': 10100000, 'scaleFactor': 1.24},
    16: {'label': 'Lawyer',                 'moneyPerClick': 7500,  'baseCost': 21150000, 'scaleFactor': 1.25},
    17: {'label': 'Air traffic controller', 'moneyPerClick': 12000, 'baseCost': 35240000, 'scaleFactor': 1.26},
    18: {'label': 'Pilot',                  'moneyPerClick': 20000, 'baseCost': 42400000, 'scaleFactor': 1.30}
  },
  businesses: {
    1:  {'label': 'Etsy store',                   'baseCost': 50000,          'moneyPerSecond': 100,        'scaleFactor': 1.1},
    2:  {'label': 'Freelance website design',     'baseCost': 100000,         'moneyPerSecond': 200,        'scaleFactor': 1.1},
    3:  {'label': 'Coffee shop',                  'baseCost': 1000000,        'moneyPerSecond': 2000,       'scaleFactor': 1.1},
    4:  {'label': 'High-end café',                'baseCost': 2500000,        'moneyPerSecond': 5000,       'scaleFactor': 1.1},
    5:  {'label': 'Burger franchise',             'baseCost': 5000000,        'moneyPerSecond': 1000,       'scaleFactor': 1.1},
    6:  {'label': 'Small design studio',          'baseCost': 10000000,       'moneyPerSecond': 20000,      'scaleFactor': 1.1},
    7:  {'label': 'Events organisation',          'baseCost': 20000000,       'moneyPerSecond': 40000,      'scaleFactor': 1.1},
    8:  {'label': 'Construction firm',            'baseCost': 25000000,       'moneyPerSecond': 50000,      'scaleFactor': 1.1},
    9:  {'label': 'National restaurant chain',    'baseCost': 50000000,       'moneyPerSecond': 100000,     'scaleFactor': 1.1},
    10: {'label': 'Local bank',                   'baseCost': 100000000,      'moneyPerSecond': 200000,     'scaleFactor': 1.1},
    11: {'label': 'Utilities provider',           'baseCost': 1200000000,     'moneyPerSecond': 2400000,    'scaleFactor': 1.1},
    12: {'label': 'Railway provider',             'baseCost': 1500000000,     'moneyPerSecond': 3000000,    'scaleFactor': 1.1},
    13: {'label': 'Internet service provider',    'baseCost': 3000000000,     'moneyPerSecond': 6000000,    'scaleFactor': 1.1},
    14: {'label': 'Regional bank',                'baseCost': 5000000000,     'moneyPerSecond': 10000000,   'scaleFactor': 1.1},
    15: {'label': 'National bank',                'baseCost': 10000000000,    'moneyPerSecond': 20000000,   'scaleFactor': 1.1},
    16: {'label': 'Film studio',                  'baseCost': 12000000000,    'moneyPerSecond': 24000000,   'scaleFactor': 1.1},
    17: {'label': 'International bank',           'baseCost': 25000000000,    'moneyPerSecond': 50000000,   'scaleFactor': 1.1},
    18: {'label': 'Oil drillings',                'baseCost': 100000000000,   'moneyPerSecond': 200000000,  'scaleFactor': 1.1},
    19: {'label': 'Multi-national conglomerate',  'baseCost': 1000000000000,  'moneyPerSecond': 2000000000, 'scaleFactor': 1.1}
  }
  /* eslint-enable key-spacing,no-multi-spaces */
}

const getters = {
  // Simple values
  socialClasses: (state) => state.socialClasses,
  businesses: (state) => state.businesses,
  jobs: (state) => state.jobs,

  socialClass (state) {
    let level = 0

    state.socialClassLevels.forEach((amount, index) => {
      if (state.money > amount) {
        level = index
      } else {
        return true
      }
    })

    return state.socialClasses[level]
  }
}

export default {
  state,
  getters
}
