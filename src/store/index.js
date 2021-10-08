import { createStore } from "vuex";

export default createStore({
  state: {
    jokesList: [],
    searchedJokesList: [],
    likedJokesIds: [],
  },
  getters: {
    likedJokesList: (state) => {
      return state.searchedJokesList.filter((joke) =>
        state.likedJokesIds.includes(joke.id)
      );
    },
  },
  mutations: {
    setLikedJokesIds(state, array) {
      state.likedJokesIds = array;
    },
    setJokesList(state, array) {
      state.jokesList = array;
    },
    setSearchedJokesList(state, array) {
      state.searchedJokesList = array;
    },
  },
  actions: {},
  modules: {},
});
