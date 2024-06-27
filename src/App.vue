<template>
  <div id="app">
    <!-- <v-main> -->
      <router-view />
    <!-- </v-main>  -->
  </div>
</template>
<!-- <router-view></router-view> -->

<script>
import { mapState, mapMutations } from 'vuex';
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
  },
  computed: {
    ...mapState({
      count: state => state.count
    })
  },
  methods: {
    ...mapMutations([
      'increment','decrement'
    ]), resolvePath(item) {
      if (item.pathName) {
        return { name: item.pathName };
      }
      return { path: item.path };
    },
  }
}
</script>

<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}
</style>
