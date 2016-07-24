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
    2:  {'label': 'Cleaner',                'moneyPerClick': 10,    'baseCost': 3000,    'scaleFactor': 1.2},
    3:  {'label': 'Shelf filler',           'moneyPerClick': 15,    'baseCost': 9000,    'scaleFactor': 1.3},
    4:  {'label': 'Housekeeper',            'moneyPerClick': 25,    'baseCost': 21000,    'scaleFactor': 1.4},
    5:  {'label': 'Teaching assistant',     'moneyPerClick': 40,    'baseCost': 50000,    'scaleFactor': 1.5},
    6:  {'label': 'Fishmonger',             'moneyPerClick': 60,    'baseCost': 75000,   'scaleFactor': 1.6},
    7:  {'label': 'Receptionist',           'moneyPerClick': 85,    'baseCost': 125000,   'scaleFactor': 1.7},
    8:  {'label': 'Electrical engineer',    'moneyPerClick': 115,   'baseCost': 250000,   'scaleFactor': 1.8},
    9:  {'label': 'Tax expert',             'moneyPerClick': 150,   'baseCost': 750000,   'scaleFactor': 1.9},
    10: {'label': 'Health professional',    'moneyPerClick': 200,   'baseCost': 1250000,   'scaleFactor': 2.0},
    11: {'label': 'Prison officer',         'moneyPerClick': 250,   'baseCost': 3000000,   'scaleFactor': 2.1},
    12: {'label': 'Train driver',           'moneyPerClick': 500,   'baseCost': 6000000,  'scaleFactor': 2.2},
    13: {'label': 'Broker',                 'moneyPerClick': 1250,  'baseCost': 13500000,  'scaleFactor': 2.3},
    14: {'label': 'Financial manager',      'moneyPerClick': 2500,  'baseCost': 40000000,  'scaleFactor': 2.4},
    15: {'label': 'IT director',            'moneyPerClick': 5000,  'baseCost': 95000000, 'scaleFactor': 2.5},
    16: {'label': 'Lawyer',                 'moneyPerClick': 7500,  'baseCost': 200000000, 'scaleFactor': 2.6},
    17: {'label': 'Air traffic controller', 'moneyPerClick': 12000, 'baseCost': 500000000, 'scaleFactor': 2.7},
    18: {'label': 'Pilot',                  'moneyPerClick': 20000, 'baseCost': 1250000000, 'scaleFactor': 2.8}
  },
  businesses: {
    1:  {'label': 'Etsy store',                   'baseCost': 50000,          'moneyPerSecond': 10,        'scaleFactor': 1.3},
    2:  {'label': 'Freelance website design',     'baseCost': 150000,         'moneyPerSecond': 20,        'scaleFactor': 1.5},
    3:  {'label': 'Coffee shop',                  'baseCost': 1000000,        'moneyPerSecond': 200,       'scaleFactor': 1.7},
    4:  {'label': 'High-end café',                'baseCost': 5500000,        'moneyPerSecond': 500,       'scaleFactor': 1.9},
    5:  {'label': 'Burger franchise',             'baseCost': 12500000,        'moneyPerSecond': 100,       'scaleFactor': 2.1},
    6:  {'label': 'Small design studio',          'baseCost': 50000000,       'moneyPerSecond': 2000,      'scaleFactor': 2.3},
    7:  {'label': 'Events organisation',          'baseCost': 100000000,       'moneyPerSecond': 4000,      'scaleFactor': 2.5},
    8:  {'label': 'Construction firm',            'baseCost': 250000000,       'moneyPerSecond': 5000,      'scaleFactor': 2.7},
    9:  {'label': 'National restaurant chain',    'baseCost': 500000000,       'moneyPerSecond': 10000,     'scaleFactor': 2.9},
    10: {'label': 'Local bank',                   'baseCost': 1000000000,      'moneyPerSecond': 20000,     'scaleFactor': 3.1},
    11: {'label': 'Utilities provider',           'baseCost': 12000000000,     'moneyPerSecond': 200000,    'scaleFactor': 3.3},
    12: {'label': 'Railway provider',             'baseCost': 15000000000,     'moneyPerSecond': 300000,    'scaleFactor': 3.5},
    13: {'label': 'Internet service provider',    'baseCost': 30000000000,     'moneyPerSecond': 600000,    'scaleFactor': 3.7},
    14: {'label': 'Regional bank',                'baseCost': 50000000000,     'moneyPerSecond': 1000000,   'scaleFactor': 3.9},
    15: {'label': 'National bank',                'baseCost': 100000000000,    'moneyPerSecond': 2000000,   'scaleFactor': 4.1},
    16: {'label': 'Film studio',                  'baseCost': 120000000000,    'moneyPerSecond': 2000000,   'scaleFactor': 4.3},
    17: {'label': 'International bank',           'baseCost': 250000000000,    'moneyPerSecond': 5000000,   'scaleFactor': 4.5},
    18: {'label': 'Oil drillings',                'baseCost': 1000000000000,   'moneyPerSecond': 20000000,  'scaleFactor': 4.7},
    19: {'label': 'Multi-national conglomerate',  'baseCost': 10000000000000,  'moneyPerSecond': 2000000000, 'scaleFactor': 4.9}
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
