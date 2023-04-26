
import { defineStore } from 'pinia'
type appData = {
  isDark: boolean,
  title: string
}
export const useDataStore = defineStore('app', {
  state: () => ({
    app: <appData>{
      isDark: true,
      title: 'hello localStorage'
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
        key: 'test',
        storage: localStorage,
      },
    ],
  },

})
