<template>
  <li class="jokes__list-item" v-for="joke in listToShow" :key="joke.id">
    <div class="jokes__wrapper" v-if="joke.setup">
      <p class="jokes__text">{{ joke.setup }} {{ joke.delivery }}</p>
      <input
        type="button"
        value="Like"
        class="jokes__like"
        :class="getButtonClass(joke.id)"
        @click="likeJoke(joke.id)"
      />
    </div>
    <div class="jokes__wrapper" v-else>
      <p class="jokes__text">{{ joke.joke }}</p>
      <input
        type="button"
        value="Like"
        class="jokes__like"
        :class="getButtonClass(joke.id)"
        @click="likeJoke(joke.id)"
      />
    </div>
  </li>
</template>

<script>
import { mapState } from "vuex";
import { mapMutations } from "vuex";

export default {
  name: "JokesItem",

  props: {
    listToShow: Array,
  },

  computed: {
    ...mapState(["likedJokesIds"]),
  },

  methods: {
    ...mapMutations(["setLikedJokesIds"]),

    likeJoke(id) {
      const array = this.likedJokesIds;
      const index = array.indexOf(id);
      if (index === -1) {
        array.push(id);
      } else {
        array.splice(index, 1);
      }
      this.setLikedJokesIds(array);
      const string = JSON.stringify(array);
      localStorage.setItem("likedJokes", string);
    },

    getButtonClass(id) {
      const index = this.likedJokesIds.indexOf(id);
      if (index === -1) {
        return "jokes__like_neutral";
      } else {
        return "jokes__like_active";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.jokes {
  &__list-item {
    margin-bottom: 10px;
  }

  &__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    border-radius: 20px;
    background-color: rgb(241, 196, 111);
  }

  &__like {
    padding: 6px;
    margin-left: 10px;
    border-radius: 15px;
    border-width: 0;
    cursor: pointer;

    &_active {
      background-color: rgb(114, 82, 231);
      color: rgb(248, 248, 231);
    }

    &_neutral {
      background-color: rgb(227, 225, 236);
      color: rgb(59, 55, 55);
    }
  }
}
</style>
