export default function (store) {
  const saveStateAttributes = ['scene']

  return (store) => {
    // Updates the state from local storage.
    const storageState = localStorage.getItem('state')
    if (storageState) {
      let storageObject
      // Attempt to parse
      try {
        storageObject = JSON.parse(storageState)
      } catch (SyntaxError) {
        // Shouldn't happen.
      }
      if (storageObject) {
        store.commit('LOAD_FROM_STORAGE_OBJECT', storageObject)
      }
    }

    store.subscribe((mutation, state) => {
      const data = {}

      // Build all required bits of state into a serialisable object.
      for (const attribute of saveStateAttributes) {
        if (state[attribute]) {
          data[attribute] = state[attribute]
        }
      }

      // Save it to local storage.
      try {
        const stateStringified = JSON.stringify(data)
        window.localStorage.setItem('state', stateStringified)
      } catch (e) {
        // There does not seem to be a standard way to catch a 'cannot save
        // to storage' exception. This can happen if a browser is in
        // private/incognito.
        // No way to save this, so do nothing.
      }
    })
  }
}
