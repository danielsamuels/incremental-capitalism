import Vue from 'vue'
import Vuex from 'vuex'

import modules from './components/modules'
import createStoragePlugin from './storage-plugin/StoragePlugin.js'

Vue.use(Vuex)

export default new Vuex.Store({ // eslint-disable-line new-cap
  modules,
  strict: true,
  plugins: [createStoragePlugin()]
})
