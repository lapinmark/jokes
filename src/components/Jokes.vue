<template>
  <div class="jokes">
    <JokesSearch class="jokes__search" />
    <JokesTabs
      class="jokes__tabs-wrapper"
      :modelCurrentTab="currentTab"
      @switchTab="switchTab"
    />
    <component :is="currentTabComponent"> </component>
  </div>
</template>

<script>
import JokesSearch from "./JokesSearch.vue";
import JokesTabs from "./JokesTabs.vue";
import JokesListAll from "./JokesListAll.vue";
import JokesListFavourite from "./JokesListFavourite.vue";
import { mapState } from "vuex";
import { mapMutations } from "vuex";

const LINK = "https://v2.jokeapi.dev/joke/Any?amount=10";

export default {
  name: "Jokes",

  components: {
    JokesSearch,
    JokesTabs,
    JokesListAll,
    JokesListFavourite,
  },

  data() {
    return {
      search: "",
      currentTab: "All",
    };
  },

  async created() {
    await this.getJokes();
    this.copyStorage();
  },

  computed: {
    ...mapState(["jokesList", "searchedJokesList", "likedJokesIds"]),

    currentTabComponent() {
      switch (this.currentTab) {
        case "All":
          return "JokesListAll";
        case "Favourite":
          return "JokesListFavourite";
        default:
          return "JokesListAll";
      }
    },
  },

  methods: {
    ...mapMutations([
      "setLikedJokesIds",
      "setJokesList",
      "setSearchedJokesList",
    ]),

    async getJokes() {
      const response = await fetch(LINK);
      const data = await response.json();
      this.setJokesList(data.jokes);
      this.setSearchedJokesList(data.jokes);
    },

    copyStorage() {
      const response = localStorage.getItem("likedJokes");
      const likedJokesIds = JSON.parse(response) ?? [];
      this.setLikedJokesIds(likedJokesIds);
    },

    switchTab(tab) {
      this.currentTab = tab;
    },
  },
};
</script>

<style lang="scss" scoped>
.jokes {
  display: flex;
  flex-direction: column;

  &__search {
    margin-bottom: 15px;
  }

  &__tabs-wrapper {
    margin-bottom: 15px;
  }
}
</style>
