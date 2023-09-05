import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import { useAppStore } from './modules/app'

const store = createPinia()

store.use(piniaPluginPersistedstate)

export function setupStore(app) {
  app.use(store)
}

function useStore() {
  return {
    appStore: useAppStore(),
  }
}

export default useStore
