import Vue from 'vue'

const state = {
  money: 0,
  jobsPurchased: {},
  businessesOwned: {},
  lastUpdate: null
}

const mutations = {
  ADD_MONEY (state, amount) {
    state.money += amount
  },

  SUBTRACT_MONEY (state, amount) {
    state.money -= amount
  },

  ADD_JOB (state, jobID) {
    if (undefined === state.jobsPurchased[jobID]) {
      Vue.set(state.jobsPurchased, jobID, 1)
    } else {
      state.jobsPurchased[jobID] += 1
    }
  },

  ADD_BUSINESS (state, businessID) {
    if (undefined === state.businessesOwned[businessID]) {
      Vue.set(state.businessesOwned, businessID, 1)
    } else {
      state.businessesOwned[businessID] += 1
    }
  },

  RESET (state) {
    state.money = 0
    state.jobsPurchased = {}
    state.businessesOwned = {}
    state.lastUpdate = null
  },

  LOAD_FROM_STORAGE_OBJECT (state, storageObject) {
    const blacklist = ['jobs', 'businesses', 'socialClasses', 'socialClassLevels']

    if (storageObject.scene) {
      for (const key of Object.keys(storageObject.scene)) {
        if (blacklist.indexOf(key) === -1) {
          state[key] = storageObject.scene[key]
        }
      }
    }
  }
}

const actions = {
  addJob: ({ state, getters, rootState, commit }, jobID) => {
    commit('SUBTRACT_MONEY', getters.jobCost(jobID))
    commit('ADD_JOB', jobID)
  },

  addBusiness: ({ state, getters, rootState, commit }, businessID) => {
    commit('SUBTRACT_MONEY', getters.businessCost(businessID))
    commit('ADD_BUSINESS', businessID)
  }
}

const getters = {
  // Simple values
  money: (state) => state.money,
  jobsPurchased: (state) => state.jobsPurchased,
  businessesOwned: (state) => state.businessesOwned,

  // Complex values
  moneyPerSecond (state, getters) {
    // Look at the purchases and correlate those to the items.
    let amount = 0

    for (const id of Object.keys(state.businessesOwned)) {
      amount += getters.businesses[id].moneyPerSecond * state.businessesOwned[id]
    }

    return amount
  },

  moneyPerClick (state, getters) {
    // Look at the purchases and correlate those to the items.
    let amount = 1 // We always have at least 1.

    for (const id of Object.keys(state.jobsPurchased)) {
      amount += getters.jobs[id].moneyPerClick * state.jobsPurchased[id]
    }

    return amount
  },

  jobCost (state, getters, rootState) {
    return (id) => {
      const numJobsPurchased = state.jobsPurchased[id] || 0
      return getters.jobs[id].baseCost * Math.pow(getters.jobs[id].scaleFactor, numJobsPurchased)
    }
  },

  jobCompoundCost (state, getters, rootState) {
    return (id) => {
      let total = 0
      const iterations = state.jobsPurchased[id] - 1

      for (let x = 0; x <= iterations; x++) {
        total += getters.jobs[id].baseCost * Math.pow(getters.jobs[id].scaleFactor, x)
      }

      return total
    }
  },

  jobsPurchasedCost (state, getters, rootState) {
    let total = 0

    for (const id of Object.keys(state.jobsPurchased)) {
      total += getters.jobCompoundCost(id)
    }

    return total
  },

  businessCost (state, getters, rootState) {
    return (id) => {
      const numBusinessesOwned = state.businessesOwned[id] || 0
      return getters.businesses[id].baseCost * Math.pow(getters.businesses[id].scaleFactor, numBusinessesOwned)
    }
  },

  businessCompoundCost (state, getters, rootState) {
    return (id) => {
      let total = 0
      const iterations = state.businessesOwned[id]

      for (let x = 0; x <= iterations; x++) {
        total += getters.businesses[id].baseCost * Math.pow(getters.businesses[id].scaleFactor, x)
      }

      return total
    }
  },

  businessesOwnedCost (state, getters, rootState) {
    let total = 0

    for (const id of Object.keys(state.businessesOwned)) {
      total += getters.businessCompoundCost(id)
    }

    return total
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
