import { defineStore } from 'pinia'

export const useMonthlyStore = defineStore('monthly', {
  state: () => ({
    sortBy: [],
  }),
  getters: {
    mappedSortBy: state => {
      const result = state.sortBy.map(item => {
        return `${item.key}, order: ${item.order}`;
      });

      return result;
    },
  },
  actions: {
    setSortBy(data) {
      this.sortBy = data;
    },
  },
});