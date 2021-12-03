import { createStore } from "vuex";

// Create a new store instance.
const store = createStore({
  state() {
    return {
      dataArray: ["C++", "Java", "Algorithm", "Data structure", "Math"],
    };
  },
  getters: {
    getData(state) {
      return state.dataArray;
    },
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    addCourse(state, newValue) {
      state.dataArray.push(newValue);
    },
    deleteCourse(state, index) {
      state.dataArray.splice(index, 1);
    },
    editCourse(state, payload) {
      state.dataArray[payload[0]] = payload[1];
    },
  },
});

export default store;
