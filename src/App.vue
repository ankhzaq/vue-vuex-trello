<template>
  <div id="app">
    <app-header></app-header>
    <router-view class="container"></router-view>
    <app-footer></app-footer>
  </div>
</template>
<script>

import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'

export default {
  name: 'app',
  components: {
    AppHeader, AppFooter
  }
}
</script>


<style>
#app {
  box-sizing: border-box;
  color: #37474f;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin: 0 auto;
  padding: 0;
}

.container {
  padding-bottom: 4rem;
}

</style>
