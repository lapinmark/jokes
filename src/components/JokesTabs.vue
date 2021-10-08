<template>
  <div class="jokes__tabs-wrapper">
    <button
      v-for="tab in tabs"
      :key="tab"
      :class="['jokes__tab', { jokes__tab_active: modelCurrentTab === tab }]"
      @click="switchTab(tab)"
    >
      {{ tab }}
    </button>
  </div>
</template>

<script>
export default {
  name: "JokesTabs",

  props: {
    modelCurrentTab: String,
  },

  data() {
    return {
      tabs: ["All", "Favourite"],
    };
  },

  computed: {
    currentTab: {
      get() {
        return this.modelCurrentTab;
      },
      set(currentTab) {
        this.$emit("update:modelCurrentTab", currentTab);
      },
    },
  },

  methods: {
    switchTab(tab) {
      this.$emit("switchTab", tab);
    },
  },
};
</script>

<style lang="scss" scoped>
.jokes__tab {
  padding: 6px;
  margin-right: 7px;
  border-radius: 15px;
  border-width: 0;
  cursor: pointer;

  &_active {
    color: rgb(226, 223, 220);
    background-color: rgb(124, 121, 118);
  }
}
</style>
