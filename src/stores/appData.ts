
import { defineStore } from 'pinia'
type appData = {
  isDark: boolean,
  title: string
}
export const useDataStore = defineStore('app', {
  state: () => ({
    app: <appData>{
      isDark: true,
      title: 'hello pinia localStorage'
    }

  }),
  actions: {
    updateTheme() {
      this.app.isDark = !this.app.isDark
    },
  },
  persist: {
    enabled: true,
    strategies: [
      {
        key: 'app',
        storage: localStorage,
      },
    ],
  },

})
