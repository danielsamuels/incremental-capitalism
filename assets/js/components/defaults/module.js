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
    1:  {'label': 'Hairdresser',            'moneyPerClick': 274.10,  'baseCost': 1,  'scaleFactor': 1.1},
    2:  {'label': 'Cleaner',                'moneyPerClick': 290.40,  'baseCost': 1,  'scaleFactor': 1.1},
    3:  {'label': 'Shelf filler',           'moneyPerClick': 300.70,  'baseCost': 1,  'scaleFactor': 1.1},
    4:  {'label': 'Housekeeper',            'moneyPerClick': 310.40,  'baseCost': 1,  'scaleFactor': 1.1},
    5:  {'label': 'Teaching assistant',     'moneyPerClick': 311.10,  'baseCost': 1,  'scaleFactor': 1.1},
    6:  {'label': 'Fishmonger',             'moneyPerClick': 314.10,  'baseCost': 1,  'scaleFactor': 1.1},
    7:  {'label': 'Receptionist',           'moneyPerClick': 325.30,  'baseCost': 1,  'scaleFactor': 1.1},
    8:  {'label': 'Electrical engineer',    'moneyPerClick': 836.20,  'baseCost': 1,  'scaleFactor': 1.1},
    9:  {'label': 'Tax expert',             'moneyPerClick': 861.30,  'baseCost': 1,  'scaleFactor': 1.1},
    10: {'label': 'Health professional',    'moneyPerClick': 906.70,  'baseCost': 1,  'scaleFactor': 1.1},
    11: {'label': 'Prison officer',         'moneyPerClick': 908.00,  'baseCost': 1,  'scaleFactor': 1.1},
    12: {'label': 'Train driver',           'moneyPerClick': 952.20,  'baseCost': 1,  'scaleFactor': 1.1},
    13: {'label': 'Broker',                 'moneyPerClick': 1149.90, 'baseCost': 1,  'scaleFactor': 1.1},
    14: {'label': 'Financial manager',      'moneyPerClick': 1169.00, 'baseCost': 1,  'scaleFactor': 1.1},
    15: {'label': 'IT director',            'moneyPerClick': 1251.60, 'baseCost': 1,  'scaleFactor': 1.1},
    16: {'label': 'Lawyer',                 'moneyPerClick': 1293.60, 'baseCost': 1,  'scaleFactor': 1.1},
    17: {'label': 'Air traffic controller', 'moneyPerClick': 1500.80, 'baseCost': 1,  'scaleFactor': 1.1},
    18: {'label': 'Pilot',                  'moneyPerClick': 1800.90, 'baseCost': 1,  'scaleFactor': 1.1}
  },
  businesses: {
    1:  {'label': 'Etsy store',                   'baseCost': 50000,          'moneyPerSecond': 1,  'scaleFactor': 1.1},
    2:  {'label': 'Freelance website design',     'baseCost': 100000,         'moneyPerSecond': 3,  'scaleFactor': 1.1},
    3:  {'label': 'Coffee shop',                  'baseCost': 1000000,        'moneyPerSecond': 3,  'scaleFactor': 1.1},
    4:  {'label': 'High-end café',                'baseCost': 2500000,        'moneyPerSecond': 3,  'scaleFactor': 1.1},
    5:  {'label': 'Burger franchise',             'baseCost': 5000000,        'moneyPerSecond': 3,  'scaleFactor': 1.1},
    6:  {'label': 'Small design studio',          'baseCost': 10000000,       'moneyPerSecond': 3,  'scaleFactor': 1.1},
    7:  {'label': 'Events organisation',          'baseCost': 20000000,       'moneyPerSecond': 3,  'scaleFactor': 1.1},
    8:  {'label': 'Construction firm',            'baseCost': 25000000,       'moneyPerSecond': 3,  'scaleFactor': 1.1},
    9:  {'label': 'National restaurant chain',    'baseCost': 50000000,       'moneyPerSecond': 3,  'scaleFactor': 1.1},
    10: {'label': 'Local bank',                   'baseCost': 100000000,      'moneyPerSecond': 3,  'scaleFactor': 1.1},
    11: {'label': 'Utilities provider',           'baseCost': 1200500000,     'moneyPerSecond': 3,  'scaleFactor': 1.1},
    12: {'label': 'Railway provider',             'baseCost': 1500000000,     'moneyPerSecond': 3,  'scaleFactor': 1.1},
    13: {'label': 'Internet service provider',    'baseCost': 3000000000,     'moneyPerSecond': 3,  'scaleFactor': 1.1},
    14: {'label': 'Regional bank',                'baseCost': 5000000000,     'moneyPerSecond': 3,  'scaleFactor': 1.1},
    15: {'label': 'National bank',                'baseCost': 10000000000,    'moneyPerSecond': 3,  'scaleFactor': 1.1},
    16: {'label': 'Film studio',                  'baseCost': 12005000000,    'moneyPerSecond': 3,  'scaleFactor': 1.1},
    17: {'label': 'International bank',           'baseCost': 25000000000,    'moneyPerSecond': 3,  'scaleFactor': 1.1},
    18: {'label': 'Oil drillings',                'baseCost': 10000000000,    'moneyPerSecond': 3,  'scaleFactor': 1.1},
    19: {'label': 'Multi-national conglomerate',  'baseCost': 1000000000000,  'moneyPerSecond': 3,  'scaleFactor': 1.1}
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
