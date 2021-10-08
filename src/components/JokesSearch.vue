<template>
  <input
    type="text"
    class="jokes__search"
    placeholder="Search..."
    v-model="search"
    @input="changeJokesList"
  />
</template>

<script>
import { mapState } from "vuex";
import { mapMutations } from "vuex";

export default {
  name: "JokesSearch",

  data() {
    return {
      search: "",
    };
  },

  computed: {
    ...mapState(["jokesList"]),

    searchedJokesList() {
      return this.jokesList.filter((joke) => {
        if (joke.setup) {
          return (
            joke.setup.toLowerCase().includes(this.search.toLowerCase()) ||
            joke.delivery.toLowerCase().includes(this.search.toLowerCase())
          );
        } else {
          return joke.joke.toLowerCase().includes(this.search.toLowerCase());
        }
      });
    },
  },

  methods: {
    ...mapMutations(["setSearchedJokesList"]),

    changeJokesList() {
      this.setSearchedJokesList(this.searchedJokesList);
    },
  },
};
</script>

<style lang="scss" scoped>
.jokes__search {
  padding: 5px;
  border-radius: 15px;

  &:focus {
    outline: none;
  }
}
</style>
